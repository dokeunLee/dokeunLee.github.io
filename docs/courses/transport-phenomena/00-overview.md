---
title: "0장. Transport Phenomena의 전체 구조"
description: "momentum, energy, mass transport를 하나의 관점에서 이해하기 위한 과목 개요"
sidebar_position: 1
tags: [강의노트, Transport-Phenomena, 유체역학, 전달현상]
---

# 0장. Transport Phenomena의 전체 구조

## 1. Transport Phenomena란 무엇인가

Transport Phenomena는 서로 다른 전달 현상을 하나의 관점에서 다루는 과목이다.

| 분야 | 전달되는 양 |
|---|---|
| Fluid dynamics | momentum |
| Heat transfer | energy |
| Mass transfer | mass |

즉, 이 과목은 유체역학, 열전달, 물질전달을 따로 떨어진 과목으로 보지 않고, **공간을 따라 어떤 물리량이 이동하는가**라는 공통된 관점에서 묶는다.

핵심 질문은 다음과 같다.

> 무엇이 공간을 따라 이동하는가?

그 답은 상황에 따라 다음 세 가지로 나뉜다.

- momentum
- energy
- mass

현재 1~2장에서 공부한 내용은 이 중 **momentum transport**에 해당한다.

---

## 2. 세 가지 분석 수준

Transport Phenomena는 하나의 현상을 세 가지 수준에서 분석한다.

| 분석 수준 | 보는 대상 | 예시 |
|---|---|---|
| Molecular level | 분자 운동과 충돌 | viscosity, thermal conductivity, diffusivity의 기원 |
| Microscopic level | 작은 유체 요소 내부 | velocity, temperature, concentration profile |
| Macroscopic level | 장치 전체 | tank, pipe, equipment balance |

각 수준은 보는 길이 스케일이 다르다.

- **Molecular level**에서는 분자의 운동과 충돌을 통해 물성이 왜 생기는지 본다.
- **Microscopic level**에서는 위치에 따라 속도, 온도, 농도가 어떻게 변하는지 본다.
- **Macroscopic level**에서는 장치 전체에 대해 들어오고 나가는 양을 계산한다.

따라서 같은 유체 문제라도 어떤 수준에서 보느냐에 따라 식의 형태와 얻는 정보가 달라진다.

---

## 3. 교재 전체 구성

교재는 크게 세 부분으로 구성된다.

| Part | 내용 | 장 |
|---|---|---|
| Part I | pure fluids, constant temperature | Chapters 1–8 |
| Part II | pure fluids, varying temperature | Chapters 9–16 |
| Part III | fluid mixtures, varying composition | Chapters 17–24 |

진행 순서는 쉬운 조건에서 복잡한 조건으로 확장된다.

```text
순수 유체 + 등온
↓
순수 유체 + 온도 변화
↓
혼합물 + 조성 변화
```

또한 각 Part 안에서는 보통 다음 흐름으로 전개된다.

```text
transport property
↓
microscopic balance / profile
↓
macroscopic balance
```

즉, 먼저 물성의 의미를 배우고, 그다음 작은 유체 요소에서의 분포를 계산하며, 마지막으로 장치 전체에 대한 balance로 확장한다.

---

## 4. Conservation law의 중요성

Transport Phenomena 전체에서 가장 중요한 기반은 **보존법칙**이다.

교재에서 다루는 주요 보존량은 다음과 같다.

- mass
- momentum
- energy
- angular momentum

0장에서는 두 개의 이원자분자가 충돌하는 예시를 통해, 충돌 전후에 어떤 양들이 보존되는지 설명한다.

이 예시는 이후에 나오는 여러 balance equation의 물리적 출발점이 된다.

즉, Transport Phenomena에서 식을 세운다는 것은 결국 다음 질문에 답하는 것이다.

> 어떤 양이 들어오고, 어떤 양이 나가고, 내부에서 얼마나 축적되거나 생성되는가?

---

## 5. 지금까지 공부한 위치

현재 1~2장에서 공부한 내용은 전체 Transport Phenomena 중에서 **momentum transport**에 해당한다.

```text
Transport Phenomena
├── Momentum transport ← 현재 공부 중
├── Energy transport
└── Mass transport
```

따라서 지금 배우는 viscosity, velocity profile, shell momentum balance는 나중에 heat transfer와 mass transfer에서도 반복되는 구조의 첫 번째 예시라고 볼 수 있다.

---

## 정리

0장에서 잡아야 할 핵심은 세 가지다.

1. Transport Phenomena는 momentum, energy, mass의 전달을 통합적으로 다룬다.
2. 같은 현상도 molecular, microscopic, macroscopic level에서 다르게 분석할 수 있다.
3. 교재 전체는 보존법칙을 바탕으로 transport property → profile → balance 순서로 확장된다.
