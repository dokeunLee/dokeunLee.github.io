---
title: "1장. Viscosity and Momentum Transport"
description: "viscosity를 통해 momentum transport가 어떻게 일어나는지 이해하고, molecular transport와 convective transport를 구분하는 장"
sidebar_position: 2
tags: [강의노트, Transport-Phenomena, 유체역학, Momentum-Transport, Viscosity]
---

# 1장. Viscosity and Momentum Transport

## 1. 1장의 위치

1장은 Part I **Momentum Transport**의 첫 장이다.

0장에서 Transport Phenomena 전체 구조를 봤다면, 1장부터는 그중 첫 번째 영역인 **momentum transport**를 다룬다.

이 장의 핵심 목적은 다음과 같다.

> 유체가 흐를 때 momentum이 어떻게 전달되는지 이해하고, 그 전달 정도를 나타내는 물성인 viscosity를 정의하는 것.

즉, 1장은 2장에서 shell momentum balance를 세우기 위한 준비 단계이다.

```text
0장
Transport Phenomena 전체 구조
↓
1장
Momentum transport의 물성 및 전달 메커니즘
↓
2장
Momentum balance를 이용한 velocity distribution 계산
```

---

## 2. Viscosity의 의미

유체가 흐를 때 유체 내부의 층들은 서로 미끄러지듯 움직인다.

이때 한 층의 운동이 인접한 층에 전달되며, 이 과정에서 유체는 흐름에 대한 저항을 보인다. 이 저항을 나타내는 물성이 **viscosity**이다.

| 기호 | 의미 |
|---|---|
| $\mu$ | viscosity, dynamic viscosity |
| $\nu$ | kinematic viscosity |
| $\rho$ | density |

kinematic viscosity는 다음과 같이 정의된다.

$$
\nu = \frac{\mu}{\rho}
$$

즉, viscosity가 유체의 점성 저항 자체를 나타낸다면, kinematic viscosity는 density까지 고려한 점성 효과를 나타낸다.

---

## 3. Newton's law of viscosity

1장의 출발점은 두 평판 사이의 단순 전단 유동이다.

두 평판 사이에 유체가 있고 한쪽 평판을 움직이면, 유체 내부에는 속도구배가 생긴다. 이때 shear stress와 velocity gradient 사이의 관계가 **Newton's law of viscosity**이다.

$$
\tau_{yx} = -\mu \frac{dv_x}{dy}
$$

각 항의 의미는 다음과 같다.

| 기호 | 의미 |
|---|---|
| $\tau_{yx}$ | $x$-momentum이 $y$방향으로 전달되는 flux |
| $\mu$ | viscosity |
| $v_x$ | $x$방향 속도 |
| $y$ | 속도가 변하는 방향 |

여기서 중요한 점은 $\tau_{yx}$를 단순히 힘으로만 보지 않는 것이다.

$\tau_{yx}$는 다음 두 가지 의미를 가진다.

1. $y$방향에 수직인 단위면에 작용하는 $x$방향 힘
2. $x$-momentum이 $y$방향으로 전달되는 flux

따라서 viscosity는 momentum transport와 직접 연결된다.

---

## 4. Molecular momentum transport

Newton's law of viscosity는 **molecular momentum transport**를 표현한다.

유체 내부에서는 분자 운동과 상호작용에 의해 momentum이 전달된다. 교재는 이를 다음과 같이 해석한다.

```text
속도가 큰 영역
↓
momentum 전달
↓
속도가 작은 영역
```

즉, momentum은 속도 차이가 있는 방향으로 전달된다.

이때 velocity gradient가 momentum transport의 driving force 역할을 한다.

$$
\frac{dv_x}{dy}
$$

이 항은 속도가 공간에 따라 얼마나 빠르게 변하는지를 나타낸다.

---

## 5. Newtonian fluid와 non-Newtonian fluid

Newton's law of viscosity를 따르는 유체를 **Newtonian fluid**라고 한다.

즉, 다음 식으로 shear stress와 velocity gradient가 선형 관계를 가지는 유체이다.

$$
\tau_{yx} = -\mu \frac{dv_x}{dy}
$$

교재에서는 모든 기체와 분자량이 약 5000보다 작은 액체는 이 식으로 잘 설명된다고 한다.

반대로 이 식으로 설명되지 않는 유체는 **non-Newtonian fluid**이다.

예시는 다음과 같다.

- polymeric liquids
- suspensions
- pastes
- slurries
- other complex fluids

이들은 Chapter 8에서 따로 다룬다.

---

## 6. Newton's law의 일반화

1.1에서는 단순한 유동만 고려했다.

즉,

$$
v_x = v_x(y)
$$

이고 다른 속도성분은 없는 경우였다.

하지만 실제 유동에서는 속도성분이 세 방향 모두 존재할 수 있다.

$$
v_x, \quad v_y, \quad v_z
$$

또한 각 속도성분은 위치와 시간에 따라 달라질 수 있다.

$$
v_x(x,y,z,t), \quad v_y(x,y,z,t), \quad v_z(x,y,z,t)
$$

따라서 단순한 shear stress 하나만으로는 일반 유동을 설명할 수 없다.

이 때문에 stress를 tensor 형태로 일반화한다.

---

## 7. Stress tensor의 의미

일반 유동에서는 여러 방향의 momentum이 여러 방향으로 전달된다.

따라서 stress는 다음과 같은 형태를 가진다.

$$
\tau_{ij}
$$

여기서 첨자의 의미가 중요하다.

| 첨자 | 의미 |
|---|---|
| 첫 번째 첨자 $i$ | momentum이 전달되는 방향 |
| 두 번째 첨자 $j$ | 전달되는 momentum의 성분 |

예를 들어,

$$
\tau_{yx}
$$

는 $x$-momentum이 $y$방향으로 전달되는 viscous momentum flux이다.

즉, 첫 번째 첨자는 면의 방향 또는 전달 방향, 두 번째 첨자는 운동량 성분 방향이다.

---

## 8. Molecular stress tensor

교재는 pressure와 viscous stress를 합쳐서 **molecular stress**를 정의한다.

$$
\pi_{ij} = p\delta_{ij} + \tau_{ij}
$$

각 항의 의미는 다음과 같다.

| 항 | 의미 |
|---|---|
| $p\delta_{ij}$ | pressure contribution |
| $\tau_{ij}$ | viscous stress contribution |
| $\pi_{ij}$ | molecular momentum flux |

즉, molecular momentum flux에는 pressure에 의한 부분과 viscosity에 의한 부분이 함께 포함된다.

---

## 9. Pressure and temperature dependence of viscosity

viscosity는 유체의 종류뿐 아니라 온도와 압력에도 의존한다.

교재는 reduced viscosity, reduced temperature, reduced pressure를 이용해 viscosity의 압력 및 온도 의존성을 정리한다.

기본적인 경향은 다음과 같다.

| 유체 | 온도 증가 시 viscosity 변화 |
|---|---|
| low-density gas | 증가 |
| liquid | 감소 |

기체와 액체의 경향이 다른 이유는 momentum transport의 주된 메커니즘이 다르기 때문이다.

- gas에서는 분자들이 이동하며 momentum을 전달한다.
- liquid에서는 분자 간 상호작용이 더 중요하다.

---

## 10. Gas viscosity의 분자론적 해석

낮은 밀도의 기체에서는 kinetic theory를 이용해 viscosity를 설명한다.

기체 분자들은 무작위 방향으로 운동하며, 충돌 사이를 이동하는 동안 momentum을 운반한다.

이때 중요한 개념은 다음과 같다.

| 기호 | 의미 |
|---|---|
| $\bar{u}$ | 평균 분자 속도 |
| $\lambda$ | mean free path |
| $n$ | number density |
| $m$ | 분자 질량 |

교재는 단순한 기체 분자 모델을 통해 기체의 viscosity가 분자 운동과 mean free path에 관련됨을 보인다.

낮은 밀도의 기체에서 viscosity는 압력에 거의 의존하지 않고, 온도가 증가하면 증가하는 경향을 가진다.

---

## 11. Lennard-Jones potential

기체 viscosity를 더 정확하게 계산하기 위해 교재는 분자 간 상호작용을 나타내는 **Lennard-Jones potential**을 사용한다.

$$
\phi(r) = 4\epsilon \left[\left(\frac{\sigma}{r}\right)^{12} - \left(\frac{\sigma}{r}\right)^6\right]
$$

각 기호의 의미는 다음과 같다.

| 기호 | 의미 |
|---|---|
| $r$ | 두 분자 사이 거리 |
| $\sigma$ | collision diameter |
| $\epsilon$ | 최대 인력 에너지와 관련된 값 |

이 potential은 분자 사이 거리가 가까울 때는 강한 반발을, 어느 정도 멀어지면 약한 인력을 나타낸다.

---

## 12. Liquid viscosity의 분자론적 해석

액체에서는 기체와 달리 분자들이 서로 가까이 있다.

따라서 분자는 자유롭게 긴 거리를 이동하기보다, 주변 분자들이 만든 cage 안에서 진동하다가 인접한 빈자리로 이동하는 방식으로 해석된다.

교재는 Eyring 이론을 이용해 liquid viscosity를 설명한다.

핵심 관점은 다음과 같다.

```text
액체 분자
↓
주변 분자들이 만든 cage 안에 갇힘
↓
에너지 장벽을 넘어 인접 위치로 이동
↓
이 과정이 momentum transport와 연결됨
```

액체의 viscosity는 일반적으로 온도가 증가하면 감소한다.

---

## 13. Suspensions and emulsions의 viscosity

1.6에서는 suspension과 emulsion의 viscosity를 다룬다.

이들은 하나의 균일한 상이 아니라 두 상으로 이루어진 계이다.

| 계 | 의미 |
|---|---|
| suspension | 고체 입자가 유체에 분산된 계 |
| emulsion | 한 액체가 다른 액체 안에 작은 방울로 분산된 계 |

이런 계에서는 단순한 $\mu$ 대신 **effective viscosity**를 사용한다.

$$
\mu_{\mathrm{eff}}
$$

즉, 복잡한 두 상의 계를 하나의 가상적인 균일 유체처럼 보고 그에 해당하는 점도를 정의한다.

---

## 14. Convective momentum transport

1.7에서는 momentum transport의 또 다른 메커니즘을 다룬다.

앞부분에서 다룬 것은 주로 **molecular momentum transport**였다.

하지만 유체가 bulk motion을 하면, 유체 덩어리 자체가 이동하면서 momentum을 운반한다.

이것이 **convective momentum transport**이다.

| 전달 방식 | 의미 |
|---|---|
| Molecular momentum transport | 분자 운동과 점성에 의한 momentum 전달 |
| Convective momentum transport | 유체의 bulk motion에 의한 momentum 전달 |

convective momentum flux는 다음과 같이 표현된다.

$$
\rho \mathbf{v}\mathbf{v}
$$

여기서 $\rho$는 density이고, $\mathbf{v}$는 velocity vector이다.

---

## 15. Combined momentum flux

교재는 molecular momentum flux와 convective momentum flux를 합쳐 **combined momentum flux**를 정의한다.

$$
\mathbf{\Phi} = \boldsymbol{\pi} + \rho \mathbf{v}\mathbf{v}
$$

각 항의 의미는 다음과 같다.

| 항 | 의미 |
|---|---|
| $\boldsymbol{\pi}$ | molecular momentum flux |
| $\rho \mathbf{v}\mathbf{v}$ | convective momentum flux |
| $\mathbf{\Phi}$ | combined momentum flux |

이 개념은 2장에서 shell momentum balance를 세울 때 사용된다.

즉, 1장의 마지막 부분은 2장으로 연결되는 핵심 준비이다.

---

## 16. 1장의 전체 흐름

1장의 전개는 다음 순서로 이해하면 된다.

```text
단순 전단 유동
↓
Newton's law of viscosity
↓
viscosity 정의
↓
stress tensor로 일반화
↓
viscosity의 온도·압력 의존성
↓
gas/liquid viscosity의 분자론적 해석
↓
suspension/emulsion의 effective viscosity
↓
convective momentum transport
↓
combined momentum flux
```

---

## 17. 1장에서 반드시 기억할 핵심 개념

### 17.1 Viscosity

viscosity는 유체의 흐름에 대한 저항을 나타내는 물성이다.

또한 momentum transport의 크기를 결정하는 계수이다.

### 17.2 Newton's law of viscosity

$$
\tau_{yx} = -\mu \frac{dv_x}{dy}
$$

이 식은 1장의 가장 중요한 출발점이다.

### 17.3 Momentum flux 해석

$\tau_{yx}$는 $x$-momentum이 $y$방향으로 전달되는 flux로 해석된다.

따라서 stress를 단순히 힘으로만 보지 말고, momentum transport의 관점에서 이해해야 한다.

### 17.4 Stress tensor

일반 유동에서는 stress를 tensor로 다룬다.

$$
\tau_{ij}
$$

첫 번째 첨자는 전달 방향, 두 번째 첨자는 전달되는 momentum의 성분이다.

### 17.5 Molecular transport와 convective transport

momentum은 두 방식으로 전달된다.

| 방식 | 식 |
|---|---|
| Molecular transport | $\boldsymbol{\pi} = p\boldsymbol{\delta} + \boldsymbol{\tau}$ |
| Convective transport | $\rho \mathbf{v}\mathbf{v}$ |

이 둘을 합친 것이 combined momentum flux이다.

$$
\mathbf{\Phi} = \boldsymbol{\pi} + \rho \mathbf{v}\mathbf{v}
$$

---

## 18. 2장과의 연결

1장은 2장을 위한 도구를 제공한다.

2장에서 shell momentum balance를 세울 때 필요한 것은 다음 세 가지이다.

1. momentum flux의 의미
2. viscosity와 velocity gradient의 관계
3. molecular flux와 convective flux의 구분

따라서 1장은 단순히 viscosity만 배우는 장이 아니라, 2장에서 velocity profile을 구하기 위한 기초 장이다.

```text
1장
momentum flux와 viscosity 정의
↓
2장
shell momentum balance에 적용
↓
velocity distribution 계산
```

---

## 마지막 정리

### 핵심 식 모음

$$
\tau_{yx} = -\mu \frac{dv_x}{dy}
$$

$$
\nu = \frac{\mu}{\rho}
$$

$$
\pi_{ij} = p\delta_{ij} + \tau_{ij}
$$

$$
\mathbf{\Phi} = \boldsymbol{\pi} + \rho \mathbf{v}\mathbf{v}
$$

### 핵심 개념 모음

| 개념 | 의미 |
|---|---|
| viscosity | 유체의 흐름 저항 및 momentum transport 계수 |
| Newtonian fluid | stress와 velocity gradient가 선형 관계인 유체 |
| non-Newtonian fluid | Newton's law of viscosity를 따르지 않는 유체 |
| molecular momentum transport | 분자 운동과 점성에 의한 momentum 전달 |
| convective momentum transport | 유체 bulk motion에 의한 momentum 전달 |
| stress tensor | 일반 유동에서 momentum flux를 표현하는 tensor |
| effective viscosity | suspension/emulsion을 하나의 유체처럼 볼 때 사용하는 점도 |
