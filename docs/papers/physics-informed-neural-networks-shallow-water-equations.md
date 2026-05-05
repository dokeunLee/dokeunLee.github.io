---
title: "Physics-Informed Neural Networks for Shallow Water Equations"
description: "Shallow Water Equations에 PINN을 적용한 논문을 읽고, 물리 제약 기반 신경망의 가능성과 한계를 정리한 노트"
sidebar_position: 1
tags: [논문정리, PINN, Shallow-Water-Equations, 딥러닝, 수치해석]
---

# Physics-Informed Neural Networks for Shallow Water Equations

## 논문 정보

| 항목 | 내용 |
|---|---|
| 논문 제목 | Physics-Informed Neural Networks for Shallow Water Equations |
| 저자 | Riccardo Anelli |
| 소속 | Politecnico di Milano |
| 연도 | 2022 |
| 주제 | PINN을 이용한 Shallow Water Equations 근사 |

## 원문 PDF

- [Physics-Informed SWE Seminar Summary PDF 열기](/files/papers/physics-informed-swe-seminar-summary.pdf)

> PDF 파일은 `static/files/papers/physics-informed-swe-seminar-summary.pdf` 경로에 두면 위 링크로 연결된다.

## 읽은 목적

이 논문은 **Physics-Informed Neural Networks(PINN)**가 **Shallow Water Equations(SWE)**를 근사하는 데 얼마나 유효한지 단계적으로 평가한다.

특히 단순히 PINN을 적용했다는 점보다, 다음 문제군에서 PINN이 어떤 수준까지 작동하는지를 확인하는 데 초점이 있다.

- steady-state 문제
- transient 문제
- parametric many-query 문제
- 2D shallow water 문제

따라서 이 논문은 PINN의 개념을 이해하는 데서 끝나는 것이 아니라, **쌍곡형 PDE와 수치해석 benchmark 문제에 PINN을 적용할 때 어떤 가능성과 한계가 생기는지**를 보는 데 의미가 있다.

---

## 핵심 문제의식

Shallow Water Equations는 수심이 얕은 유체 흐름을 기술하는 PDE다.

댐 붕괴, 홍수, 하천 흐름과 같은 문제를 단순화해 다룰 수 있으며, 보존형 방정식 구조를 갖는다.

논문에서 다루는 핵심 질문은 다음과 같다.

> PINN이 Shallow Water Equations의 해를 기존 수치해석법처럼 안정적으로 근사할 수 있는가?

여기서 중요한 점은 SWE가 비교적 까다로운 PDE라는 것이다.

- shock wave가 나타날 수 있음
- wet/dry transition이 존재함
- friction term과 topography source term이 들어감
- 1D뿐 아니라 2D 확장이 필요함
- parameter가 바뀌는 many-query setting도 고려해야 함

따라서 이 논문은 PINN이 단순한 toy problem을 넘어 실제 수리·유체 문제에 적용될 수 있는지를 검증하는 성격을 갖는다.

---

## 논문 전체 구조

논문은 다음 흐름으로 전개된다.

| 구분 | 내용 |
|---|---|
| Introduction | 논문 목적과 문제의식 소개 |
| Chapter 1 | Shallow Water Equations의 물리적·수학적 배경 |
| Chapter 2 | ANN, 손실 함수, 자동미분 등 머신러닝 최소 배경 |
| Chapter 3 | PINN 알고리즘, 오차 분석, 코드 검증 |
| Chapter 4 | Steady, transient, parametric, 2D 실험 결과 |

즉, 논문은 수학 모델을 먼저 설명하고, 그다음 PINN을 구성한 뒤, 다양한 SWE benchmark 문제에 적용하는 방식으로 전개된다.

---

## 학습한 내용 1. SWE의 물리적 가정

이 논문을 통해 SWE가 단순히 물을 얕게 본다는 의미가 아니라, 여러 물리적 가정을 바탕으로 만들어진 모델이라는 점을 이해했다.

주요 가정은 다음과 같다.

- shallow water assumption
- hydrostatic pressure assumption
- vertical velocity와 vertical acceleration 무시
- 2D depth-averaged flow
- incompressible fluid
- continuum assumption

SWE에서는 3차원 유체 운동을 그대로 푸는 것이 아니라, 수직 방향 정보를 평균화해 상대적으로 단순한 2D 흐름으로 표현한다.

즉, 복잡한 유체 문제를 계산 가능한 수준으로 낮추기 위해 물리적 가정을 두고, 그 결과 수심과 유속 중심의 방정식이 만들어진다.

---

## 학습한 내용 2. SWE의 수학적 구조

SWE는 보존형 벡터 방정식 형태로 표현된다.

상태 벡터, 플럭스 벡터, 소스항을 이용해 다음과 같은 구조를 갖는다.

```text
시간 변화 + x방향 플럭스 변화 + y방향 플럭스 변화 = 소스항
```

여기서 상태 벡터는 수심과 운동량 성분을 포함한다.

- h: 수심
- qx: x방향 discharge 또는 momentum 성분
- qy: y방향 discharge 또는 momentum 성분

소스항에는 지형 경사와 바닥 마찰이 포함될 수 있다.

논문에서는 다음 요소들이 중요하게 다뤄진다.

- topography
- friction
- Manning-Strickler law
- Darcy-Weisbach law
- Froude number

이를 통해 SWE는 단순한 물높이 예측 문제가 아니라, **보존법칙, 플럭스, 소스항, 경계조건이 결합된 PDE 시스템**이라는 점을 이해할 수 있었다.

---

## 학습한 내용 3. PINN에서 scaling이 중요한 이유

논문에서 특히 중요하게 본 부분은 scaling이다.

SWE는 공간 스케일, 시간 스케일, 해의 크기가 문제마다 크게 달라질 수 있다.

반면 신경망은 일반적으로 O(1) 규모의 입력과 출력에서 더 안정적으로 학습된다.

따라서 물리 문제를 그대로 넣는 것이 아니라, 신경망이 학습하기 쉬운 크기로 변환하는 scaling이 필요하다.

이 부분을 통해 다음 점을 이해했다.

> PINN에서 scaling은 단순한 형식 변환이 아니라 학습 안정성을 좌우하는 전처리다.

즉, PDE residual을 loss에 넣는다고 자동으로 좋은 학습이 되는 것이 아니라, 변수 크기와 손실 항의 균형을 맞추는 과정이 필요하다.

---

## 학습한 내용 4. PINN의 기본 작동 방식

PINN은 neural network를 PDE 해의 surrogate model로 둔다.

일반적인 supervised learning처럼 정답 데이터만 맞추는 것이 아니라, PDE residual을 손실 함수에 포함한다.

기본 흐름은 다음과 같다.

```text
training point 설정
↓
network output 계산
↓
automatic differentiation으로 편미분 계산
↓
PDE residual 계산
↓
boundary condition / initial condition residual 계산
↓
loss minimization
```

이때 자동미분은 핵심 역할을 한다.

PINN에서는 네트워크 출력의 공간·시간 편미분이 필요하고, 이 편미분을 PDE residual 계산에 직접 사용한다.

따라서 PINN은 단순히 데이터를 맞추는 모델이 아니라, **미분 가능한 신경망 함수를 PDE 해로 보고 그 함수가 방정식을 만족하도록 학습시키는 방법**이다.

---

## 학습한 내용 5. PINN의 오차를 보는 관점

논문에서 오차는 단순히 예측값과 정답의 차이로만 보지 않는다.

PINN의 총 오차는 여러 요소로 나뉜다.

- approximation error
- optimization error
- generalization error

이를 통해 PDE residual이 작다고 해서 실제 해와 항상 가까운 것은 아니라는 점을 이해했다.

즉, PINN에서 loss가 작다는 것은 좋은 신호지만, 그것만으로 해의 정확성을 완전히 보장하지는 않는다.

특히 collocation point의 배치, 네트워크 깊이와 너비, 학습률, optimizer, loss weight 같은 hyperparameter가 결과에 큰 영향을 준다.

---

## 학습한 내용 6. 실험 구성과 benchmark 문제

논문은 SWE에 대해 여러 종류의 benchmark 문제를 구성한다.

| 문제군 | 검증 내용 |
|---|---|
| Steady-state problems | hydrostatic equilibrium, wet/dry transition, boundary condition 포함 steady solution |
| Wet domain dam break | shock wave와 rarefaction wave 재현 |
| Dry domain dam break | moving wet/dry front 재현 |
| Friction cases | friction term이 포함된 transient structure |
| Parametric cases | friction coefficient 또는 gravity를 network input으로 포함 |
| 2D circular dam break | 2D SWE 확장과 대칭 구조 유지 |

특히 dam-break 문제는 hyperbolic PDE에서 나타나는 shock, rarefaction, dry front를 확인할 수 있는 대표적 benchmark다.

이를 통해 PINN이 단순한 정적 문제뿐 아니라 시간의존적이고 불연속성이 강한 문제에서도 어느 정도 구조를 재현할 수 있는지 확인한다.

---

## 학습한 내용 7. PINN이 shock를 근사하는 방식

가장 중요하게 이해한 부분은 PINN이 shock를 다루는 방식이다.

PINN은 neural network로 해를 연속적이고 미분가능한 함수로 표현한다.

따라서 shock처럼 급격한 discontinuity가 있는 문제에서는 sharp discontinuity를 그대로 표현하기보다, 부드러운 형태로 근사하는 경향이 있다.

논문 결과의 경향은 다음과 같이 정리할 수 있다.

| 항목 | PINN 결과 경향 |
|---|---|
| shock 위치 | 비교적 잘 재현 |
| 전체 wave structure | 전반적으로 유지 |
| 급격한 gradient | reference보다 smooth하게 근사 |
| dry front / friction 포함 case | 구조는 유지하지만 sharpness가 약화될 수 있음 |

즉, PINN은 SWE에 적용 가능성을 보이지만, hyperbolic PDE의 sharp gradient를 정밀하게 재현하는 데에는 한계가 있다.

---

## 논문을 통해 이해한 점

이 논문을 읽고 가장 크게 이해한 점은 다음이다.

> PINN은 기존 수치해석법을 바로 대체하는 기술이라기보다, 물리 제약을 가진 surrogate model 또는 보완적 도구로 보는 것이 타당하다.

PINN은 다음과 같은 장점이 있다.

- PDE residual을 loss에 포함해 물리 제약을 반영할 수 있음
- 데이터가 부족한 상황에서 물리 모델을 활용할 수 있음
- parameter를 입력으로 포함해 many-query 문제에 활용할 수 있음
- 미분 가능한 surrogate solution을 얻을 수 있음

하지만 다음 한계도 분명하다.

- training cost가 높음
- hyperparameter tuning이 어렵고 trial-and-error에 의존함
- scaling과 loss balancing이 중요함
- shock나 dry front처럼 급격한 변화가 있는 문제에서 smoothing이 발생함
- FEM, FVM, FDM 같은 전통 수치해석법의 안정성과 정확도를 바로 대체하기는 어려움

따라서 PINN은 “수치해석법의 대체재”라기보다, **빠른 surrogate modeling, parameter study, inverse problem, data assimilation 같은 영역에서 보완적으로 활용될 가능성이 크다**고 이해했다.

---

## 내 학습과의 연결

내가 물리학과 컴퓨터학을 함께 공부하는 입장에서, 이 논문은 두 분야가 만나는 지점을 보여준다.

물리학 관점에서는 SWE의 가정, 보존법칙, 플럭스, 소스항, boundary condition을 이해해야 한다.

컴퓨터학 관점에서는 neural network, loss function, automatic differentiation, optimization, generalization을 이해해야 한다.

즉, PINN 연구는 단순히 딥러닝 모델을 적용하는 문제가 아니라, **물리 모델과 학습 알고리즘을 동시에 이해해야 하는 문제**다.

이 논문을 통해 앞으로 PINN을 공부할 때 다음 순서가 중요하다고 느꼈다.

1. 대상 PDE의 물리적 가정과 수학적 구조를 먼저 이해한다.
2. 어떤 항을 residual loss에 넣을지 명확히 정한다.
3. scaling과 nondimensionalization을 신중하게 설계한다.
4. benchmark 문제로 코드가 제대로 작동하는지 검증한다.
5. loss 감소뿐 아니라 reference solution과의 구조적 차이를 함께 본다.
6. PINN의 결과를 기존 수치해석법과 비교하면서 해석한다.

---

## 한 줄 정리

이 논문은 PINN이 Shallow Water Equations에 적용될 수 있음을 보여주지만, shock, wet/dry front, friction, 2D 확장처럼 어려운 조건에서는 smoothing, 높은 학습 비용, hyperparameter 민감성이라는 한계를 함께 드러낸다.
