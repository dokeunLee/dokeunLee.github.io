---
title: "2장. Shell Momentum Balances and Velocity Distributions in Laminar Flow"
description: "shell momentum balance를 이용해 laminar flow의 velocity distribution을 구하는 장"
sidebar_position: 3
tags: [강의노트, Transport-Phenomena, 유체역학, Momentum-Transport, Shell-Balance, Laminar-Flow]
---

# 2장. Shell Momentum Balances and Velocity Distributions in Laminar Flow

## 1. 2장의 위치

2장은 1장에서 배운 momentum flux와 Newton's law of viscosity를 실제 유동 문제에 적용하는 장이다.

1장에서는 다음을 배웠다.

- viscosity
- molecular momentum flux
- convective momentum flux
- combined momentum flux
- Newton's law of viscosity

2장에서는 이 개념들을 이용해 실제 **laminar flow**에서 velocity distribution을 구한다.

```text
1장
momentum flux와 viscosity 정의
↓
2장
shell momentum balance 설정
↓
momentum-flux distribution 계산
↓
velocity distribution 계산
```

즉, 2장은 단순히 공식을 외우는 장이 아니라, 유동 문제를 balance로 세우고 적분해서 해를 구하는 절차를 익히는 장이다.

---

## 2. 2장의 핵심 목적

2장의 핵심 목적은 다음과 같다.

> 단순한 laminar flow system에서 momentum balance를 세워 velocity profile을 구하고, 그로부터 평균속도, 최대속도, 유량, 벽면응력 등을 계산하는 것.

2장에서 다루는 대표 유동은 다음과 같다.

| 절 | 유동 |
|---|---|
| 2.1 | Shell momentum balance와 boundary condition |
| 2.2 | Flow of a falling film |
| 2.3 | Flow through a circular tube |
| 2.4 | Flow through an annulus |
| 2.5 | Flow of two adjacent immiscible fluids |
| 2.6 | Creeping flow around a sphere |

---

## 3. 2장의 기본 전제

2장은 다음 조건을 기본으로 한다.

- steady flow
- laminar flow
- 단순한 geometry
- 주로 Newtonian fluid
- 대부분 한 방향 속도성분만 존재
- 속도는 하나의 공간변수에만 의존

**steady flow**란 각 위치에서 pressure, density, velocity component가 시간에 따라 변하지 않는다는 뜻이다.

**laminar flow**는 유체 입자들이 질서 있게 층을 이루며 흐르는 유동이다. 반대로 turbulent flow는 복잡하고 불규칙한 유동이며, 2장의 주요 대상이 아니다.

---

## 4. Shell momentum balance의 기본 구조

2장에서 가장 중요한 방법은 **shell momentum balance**이다.

얇은 fluid shell을 잡고, 그 shell에 대해 momentum balance를 세운다.

기본 구조는 다음과 같다.

```text
momentum in
-
momentum out
+
body force
=
0
```

좀 더 구체적으로는 다음 항들을 고려한다.

```text
convective momentum in
-
convective momentum out
+
molecular momentum in
-
molecular momentum out
+
gravity force
=
0
```

2장에서 자주 쓰는 핵심 절차는 다음과 같다.

1. 살아있는 velocity component를 정한다.
2. velocity가 어떤 coordinate에 의존하는지 정한다.
3. 얇은 shell을 잡는다.
4. shell에 대해 momentum balance를 세운다.
5. shell thickness를 0으로 보내 differential equation을 얻는다.
6. momentum-flux distribution을 구한다.
7. Newton's law of viscosity를 대입한다.
8. velocity distribution을 구한다.
9. boundary condition으로 적분상수를 정한다.
10. 평균속도, 최대속도, 유량, 벽면응력 등을 계산한다.

---

## 5. Boundary condition의 역할

2장에서 해를 결정하는 핵심은 **boundary condition**이다.

미분방정식을 적분하면 integration constant가 생긴다. 이 상수는 boundary condition으로 결정된다.

자주 쓰는 boundary condition은 다음과 같다.

| 경계 | 조건 | 의미 |
|---|---|---|
| solid-fluid interface | no-slip | 유체 속도 = 고체 표면 속도 |
| liquid-gas interface | shear stress ≈ 0 | gas side viscosity가 작을 때 사용 |
| liquid-liquid interface | velocity continuity | 계면에서 두 유체 속도 같음 |
| liquid-liquid interface | stress continuity | 계면에서 shear stress 같음 |
| centerline | finite stress or symmetry | 중심에서 응력이 무한대가 되면 안 됨 |

2장에서는 식 자체보다 boundary condition을 어떻게 적용하는지가 중요하다.

---

## 6. 2.1 Shell Momentum Balances and Boundary Conditions

2.1은 이후 예제들을 풀기 위한 공통 절차를 설명한다.

핵심은 다음이다.

> 유동 방향 momentum에 대해 얇은 shell balance를 세우고, 그 결과를 Newton's law of viscosity와 연결해 velocity distribution을 구한다.

2장에서 다루는 문제들은 대부분 다음 형태이다.

$$
v_z = v_z(x)
$$

또는

$$
v_z = v_z(r)
$$

즉, 흐름은 한 방향으로만 일어나고, 속도는 흐름에 수직인 한 좌표에만 의존한다.

이때 풀이 순서는 다음과 같다.

```text
momentum balance
↓
stress distribution
↓
Newton's law of viscosity
↓
velocity distribution
```

이 순서가 2장의 핵심이다.

---

## 7. 2.2 Flow of a Falling Film

### 7.1 문제 설정

Falling film은 액체가 경사진 평판을 따라 흘러내리는 문제이다.

유체는 중력에 의해 아래로 흐르고, 점성력은 그 흐름을 저항한다.

이 문제는 다음을 보여준다.

- gravity force가 momentum balance에 들어가는 방식
- Cartesian coordinate 사용
- liquid-gas interface boundary condition
- wall no-slip condition
- film velocity profile 계산

### 7.2 기본 구조

좌표 설정은 다음과 같이 이해하면 된다.

| 방향 | 의미 |
|---|---|
| $z$ | 유체가 흘러내리는 방향 |
| $x$ | film 표면에서 벽까지의 방향 |
| $y$ | plate width 방향 |

속도는 다음과 같이 가정한다.

$$
v_z = v_z(x)
$$

즉, 유체는 $z$방향으로 흐르지만 그 속도는 벽에서 떨어진 거리 $x$에 따라 변한다.

### 7.3 Shear stress distribution

falling film에서 momentum balance를 세우면 shear stress distribution이 먼저 나온다.

$$
\tau_{xz} = \rho g x \cos\beta
$$

각 항의 의미는 다음과 같다.

| 기호 | 의미 |
|---|---|
| $\tau_{xz}$ | $z$-momentum이 $x$방향으로 전달되는 viscous momentum flux |
| $\rho$ | fluid density |
| $g$ | gravitational acceleration |
| $\beta$ | plate inclination과 관련된 각도 |
| $x$ | liquid-gas interface에서부터의 거리 |

여기서 중요한 점은 shear stress가 $x$에 따라 선형으로 변한다는 것이다.

### 7.4 Newton's law of viscosity 적용

falling film에서는 다음 관계를 사용한다.

$$
\tau_{xz} = -\mu \frac{dv_z}{dx}
$$

momentum balance로 얻은 $\tau_{xz}$를 여기에 대입하고 적분하면 velocity distribution을 얻는다.

### 7.5 Velocity distribution

대표적으로 다음 형태의 velocity profile을 얻는다.

$$
v_z = \frac{\rho g \delta^2 \cos\beta}{2\mu}\left[1 - \left(\frac{x}{\delta}\right)^2\right]
$$

각 항의 의미는 다음과 같다.

| 기호 | 의미 |
|---|---|
| $\delta$ | film thickness |
| $\mu$ | viscosity |
| $x=0$ | liquid-gas interface |
| $x=\delta$ | solid wall |

velocity profile은 포물선 형태이다.

### 7.6 Boundary condition

falling film에서 사용한 boundary condition은 다음과 같다.

| 위치 | 조건 | 의미 |
|---|---|---|
| $x=0$ | $\tau_{xz}=0$ | liquid-gas interface에서 shear stress를 0으로 둠 |
| $x=\delta$ | $v_z=0$ | wall에서 no-slip condition |

### 7.7 주요 결과

최대속도는 film surface에서 나타난다.

$$
v_{z,\max} = \frac{\rho g \delta^2 \cos\beta}{2\mu}
$$

평균속도는 다음과 같다.

$$
\langle v_z \rangle = \frac{\rho g \delta^2 \cos\beta}{3\mu}
$$

따라서

$$
\langle v_z \rangle = \frac{2}{3}v_{z,\max}
$$

mass flow rate는 다음과 같이 쓸 수 있다.

$$
w = \frac{\rho^2 g W \delta^3 \cos\beta}{3\mu}
$$

### 7.8 Falling film에서 기억할 점

- 중력이 흐름을 만든다.
- 벽에서는 no-slip condition이 적용된다.
- 자유표면에서는 shear stress를 0으로 둔다.
- shear stress는 $x$에 대해 선형이다.
- velocity profile은 포물선형이다.
- 평균속도는 최대속도의 $2/3$이다.

---

## 8. 2.3 Flow Through a Circular Tube

### 8.1 문제 설정

Circular tube flow는 원형 관 내부의 laminar flow이다.

이 문제는 가장 중요한 대표 예제 중 하나이다. 흐름은 압력차와 중력에 의해 발생한다.

이 문제에서 배우는 것은 다음과 같다.

- cylindrical coordinate 사용
- pressure force와 gravity force의 역할
- centerline boundary condition
- wall no-slip condition
- Hagen-Poiseuille equation

### 8.2 기본 구조

좌표는 cylindrical coordinate를 사용한다.

| 좌표 | 의미 |
|---|---|
| $r$ | 중심축에서 떨어진 반지름 방향 |
| $z$ | 관의 축 방향 |
| $\theta$ | 원주 방향 |

속도는 다음과 같이 가정한다.

$$
v_z = v_z(r)
$$

즉, 유체는 $z$방향으로 흐르고 속도는 반지름 $r$에 따라 달라진다.

### 8.3 Modified pressure

tube flow에서는 pressure와 gravity를 함께 다루기 위해 modified pressure를 사용한다.

$$
P = p - \rho g z
$$

이 값을 이용하면 pressure force와 gravity force를 하나의 항처럼 다룰 수 있다.

### 8.4 Shear stress distribution

momentum balance를 세우면 다음 결과가 나온다.

$$
\tau_{rz} = \frac{(P_0 - P_L)}{2L}r
$$

각 항의 의미는 다음과 같다.

| 기호 | 의미 |
|---|---|
| $\tau_{rz}$ | $z$-momentum이 $r$방향으로 전달되는 viscous momentum flux |
| $P_0$ | tube 입구의 modified pressure |
| $P_L$ | tube 출구의 modified pressure |
| $L$ | tube length |
| $r$ | radial coordinate |

shear stress는 중심에서 0이고, 벽면에서 최대이다.

### 8.5 Velocity distribution

Newton's law of viscosity를 적용하면 다음 velocity profile을 얻는다.

$$
v_z = \frac{(P_0 - P_L)R^2}{4\mu L}\left[1 - \left(\frac{r}{R}\right)^2\right]
$$

velocity profile은 포물선형이다.

### 8.6 Boundary condition

circular tube flow에서 사용하는 boundary condition은 다음과 같다.

| 위치 | 조건 | 의미 |
|---|---|---|
| $r=0$ | $\tau_{rz}$ finite | 중심축에서 stress가 무한대가 되면 안 됨 |
| $r=R$ | $v_z=0$ | wall no-slip condition |

### 8.7 주요 결과

최대속도는 중심축에서 나타난다.

$$
v_{z,\max} = \frac{(P_0 - P_L)R^2}{4\mu L}
$$

평균속도는 다음과 같다.

$$
\langle v_z \rangle = \frac{(P_0 - P_L)R^2}{8\mu L}
$$

따라서

$$
\langle v_z \rangle = \frac{1}{2}v_{z,\max}
$$

mass flow rate는 다음과 같다.

$$
w = \frac{\pi R^4 \rho (P_0 - P_L)}{8\mu L}
$$

이 결과가 Hagen-Poiseuille equation이다.

### 8.8 Circular tube flow에서 기억할 점

- shear stress는 $r$에 대해 선형이다.
- velocity profile은 포물선형이다.
- 중심에서 velocity가 최대이다.
- 중심에서 shear stress는 0이다.
- 벽에서 velocity는 0이다.
- 벽에서 shear stress는 최대이다.
- 평균속도는 최대속도의 $1/2$이다.
- 유량은 $R^4$에 비례한다.

### 8.9 Hagen-Poiseuille equation의 의미

Hagen-Poiseuille equation은 laminar tube flow에서 flow rate를 구하는 핵심 결과이다.

$$
w \propto R^4
$$

따라서 tube radius가 조금만 커져도 flow rate는 크게 증가한다.

시험에서 확인해야 하는 점은 다음이다.

- laminar flow 조건인지
- Newtonian fluid인지
- incompressible flow인지
- no-slip condition이 성립하는지
- entrance effect를 무시할 수 있는지

---

## 9. 2.4 Flow Through an Annulus

### 9.1 문제 설정

Annulus flow는 두 개의 동심 원통 사이를 흐르는 유동이다.

바깥쪽 원통 반지름은 $R$, 안쪽 원통 반지름은 $\kappa R$이다.

이 문제는 circular tube flow와 비슷하지만, 중심에 solid cylinder가 존재한다는 점이 다르다.

### 9.2 핵심 역할

Annulus flow는 boundary condition이 해의 형태를 어떻게 바꾸는지 보여준다.

circular tube에서는 중심축 $r=0$에서 stress finite 조건을 사용했다. 하지만 annulus에서는 중심축이 유체 영역에 포함되지 않는다.

따라서 두 벽에서 모두 no-slip condition을 적용한다.

| 위치 | 조건 |
|---|---|
| $r=\kappa R$ | $v_z=0$ |
| $r=R$ | $v_z=0$ |

### 9.3 Shear stress distribution

annulus에서는 shear stress가 단순히 $r$에 비례하지 않는다. 대표 형태는 다음과 같다.

$$
\tau_{rz} = \frac{(P_0-P_L)R}{2L}\left[\frac{r}{R} - \lambda^2\frac{R}{r}\right]
$$

여기서

$$
\lambda^2 = \frac{1-\kappa^2}{2\ln(1/\kappa)}
$$

이다.

shear stress가 0이 되는 위치가 존재하며, 그 위치에서 velocity가 최대가 된다.

### 9.4 Velocity distribution

대표적인 velocity distribution은 다음과 같다.

$$
v_z = \frac{(P_0-P_L)R^2}{4\mu L}\left[1 - \left(\frac{r}{R}\right)^2 + \frac{1-\kappa^2}{\ln(1/\kappa)}\ln\left(\frac{r}{R}\right)\right]
$$

이 식은 circular tube flow보다 복잡하다.

이유는 안쪽 벽과 바깥쪽 벽 두 곳에서 no-slip condition을 모두 만족해야 하기 때문이다.

### 9.5 Annulus flow에서 기억할 점

- 두 벽에서 velocity가 0이다.
- velocity maximum은 단순히 중심이 아니라 annulus 내부 어딘가에 있다.
- shear stress는 중간에서 부호가 바뀔 수 있다.
- boundary condition이 circular tube flow와 다르기 때문에 velocity profile도 달라진다.
- annulus가 매우 얇으면 thin slit flow와 비슷하게 볼 수 있다.

---

## 10. 2.5 Flow of Two Adjacent Immiscible Fluids

### 10.1 문제 설정

두 개의 섞이지 않는 유체가 평행한 판 사이에서 나란히 흐르는 문제이다.

두 유체는 같은 방향으로 흐르지만, viscosity가 서로 다를 수 있다.

이 문제의 핵심은 liquid-liquid interface에서의 boundary condition이다.

### 10.2 Interface boundary condition

두 immiscible fluids 사이의 계면에서는 다음 조건을 적용한다.

| 조건 | 의미 |
|---|---|
| velocity continuity | 계면에서 두 유체 속도는 같다 |
| stress continuity | 계면에서 shear stress는 같다 |

즉,

$$
v_z^{I} = v_z^{II}
$$

$$
\tau_{xz}^{I} = \tau_{xz}^{II}
$$

이다.

### 10.3 Two-fluid flow의 의미

이 문제는 단순히 velocity profile을 구하는 것보다 계면 조건을 어떻게 처리하는지가 중요하다.

고체벽에서는 no-slip condition을 적용한다.

$$
v_z = 0
$$

하지만 유체-유체 계면에서는 속도와 응력이 모두 연결되어야 한다.

### 10.4 Two-fluid flow에서 기억할 점

- 두 유체의 viscosity가 같으면 전체 profile은 단일 유체의 slit flow와 비슷해진다.
- 두 유체의 viscosity가 다르면 velocity profile이 대칭이 아니다.
- interface에서 velocity는 끊어지면 안 된다.
- interface에서 shear stress도 끊어지면 안 된다.
- boundary condition의 수가 많아지므로 integration constant 처리에 주의해야 한다.

---

## 11. 2.6 Creeping Flow Around a Sphere

### 11.1 문제 설정

2.6은 sphere 주변의 매우 느린 유동을 다룬다.

이 유동은 **creeping flow** 또는 **Stokes flow**라고 부른다.

이 문제는 앞의 2.2~2.5와 다르다.

앞의 문제들은 속도성분이 하나이고, shell balance로 직접 풀 수 있었다. 하지만 sphere 주변 유동은 속도성분이 둘 이상 존재한다.

따라서 단순 shell balance로 직접 풀기 어렵다.

### 11.2 Creeping flow의 조건

creeping flow는 Reynolds number가 매우 작은 유동이다.

$$
\mathrm{Re} = \frac{D v_{\infty}\rho}{\mu}
$$

Stokes' law는 대략 다음 조건에서 사용된다.

$$
\mathrm{Re} \lesssim 0.1
$$

즉, inertial effect보다 viscous effect가 지배적인 유동이다.

### 11.3 Sphere에 작용하는 힘

sphere 주변 유동에서는 fluid가 sphere에 힘을 가한다.

이 힘은 다음 두 가지로 나누어 볼 수 있다.

| 힘 | 의미 |
|---|---|
| form drag | pressure distribution에 의한 힘 |
| friction drag | shear stress에 의한 힘 |

두 힘을 합치면 sphere에 작용하는 kinetic force가 된다.

### 11.4 Stokes' law

creeping flow around a sphere에서 중요한 결과는 Stokes' law이다.

$$
F_k = 6\pi\mu R v_{\infty}
$$

각 항의 의미는 다음과 같다.

| 기호 | 의미 |
|---|---|
| $F_k$ | sphere에 작용하는 kinetic force |
| $\mu$ | fluid viscosity |
| $R$ | sphere radius |
| $v_{\infty}$ | sphere로부터 멀리 떨어진 곳의 approach velocity |

### 11.5 Falling sphere와 viscosity 측정

작은 구가 점성 유체 속에서 떨어질 때 terminal velocity에 도달한다.

이때 force balance를 이용하면 viscosity를 구할 수 있다.

terminal velocity는 다음과 같이 정리된다.

$$
v_{\infty} = \frac{2R^2g(\rho_s - \rho)}{9\mu}
$$

각 항의 의미는 다음과 같다.

| 기호 | 의미 |
|---|---|
| $\rho_s$ | sphere density |
| $\rho$ | fluid density |
| $R$ | sphere radius |
| $\mu$ | fluid viscosity |
| $g$ | gravitational acceleration |

이 식은 falling sphere viscometer의 기초가 된다.

### 11.6 Creeping flow에서 기억할 점

- 매우 작은 Reynolds number에서만 Stokes' law를 쓸 수 있다.
- sphere 문제는 단순 shell balance로 직접 풀기 어렵다.
- normal force와 tangential force를 모두 고려한다.
- form drag와 friction drag가 합쳐져 전체 drag가 된다.
- terminal velocity 측정으로 viscosity를 구할 수 있다.

---

## 12. 2장의 전체 흐름

2장의 전개는 다음과 같이 정리할 수 있다.

```text
2.1
shell momentum balance의 일반 절차
↓
2.2
falling film: gravity force + Cartesian coordinate
↓
2.3
circular tube: pressure force + gravity force + cylindrical coordinate
↓
2.4
annulus: boundary condition의 중요성
↓
2.5
two immiscible fluids: liquid-liquid interface condition
↓
2.6
sphere: creeping flow와 Stokes' law
```

---

## 13. 2장에서 반드시 잡아야 하는 구조

### 13.1 Momentum balance가 먼저다

2장 문제는 velocity profile을 바로 쓰는 것이 아니다.

먼저 momentum balance를 세운다.

```text
momentum balance
↓
stress distribution
↓
Newton's law of viscosity
↓
velocity distribution
```

이 순서가 무너지면 풀이가 꼬인다.

### 13.2 Stress profile과 velocity profile은 다르다

예를 들어 circular tube flow에서 다음 관계가 성립한다.

| 위치 | velocity | shear stress |
|---|---|---|
| centerline | maximum | 0 |
| wall | 0 | maximum |

속도와 응력은 같은 모양이 아니다.

- stress는 balance에서 나온다.
- velocity는 stress를 Newton's law에 넣고 적분해서 나온다.

### 13.3 Boundary condition이 해를 결정한다

같은 momentum balance라도 boundary condition이 다르면 해가 달라진다.

| 문제 | 핵심 boundary condition |
|---|---|
| falling film | free surface shear stress = 0 |
| circular tube | center stress finite, wall no-slip |
| annulus | inner wall no-slip, outer wall no-slip |
| two fluids | interface velocity continuity, stress continuity |
| sphere | solid surface no-slip, far-field velocity |

### 13.4 좌표계 선택이 중요하다

문제마다 자연스러운 좌표계가 다르다.

| 문제 | 좌표계 |
|---|---|
| falling film | Cartesian |
| circular tube | cylindrical |
| annulus | cylindrical |
| sphere | spherical |

좌표계를 잘못 잡으면 momentum balance와 stress component 해석이 어려워진다.

### 13.5 Reynolds number는 적용 가능성 판단 기준이다

2장의 결과는 대부분 laminar flow를 전제로 한다.

따라서 식을 쓰기 전에 Reynolds number를 확인해야 한다.

| 유동 | Reynolds number 역할 |
|---|---|
| falling film | laminar/rippling/turbulent regime 구분 |
| circular tube | laminar tube flow 여부 판단 |
| sphere | Stokes' law 적용 가능 여부 판단 |

공식은 외우는 것보다, 이 결과가 laminar 또는 creeping 조건에서만 유효하다는 점이 더 중요하다.

---

## 14. 2장의 핵심 식 모음

### 14.1 Falling film

$$
\tau_{xz} = \rho g x \cos\beta
$$

$$
v_z = \frac{\rho g \delta^2 \cos\beta}{2\mu}\left[1 - \left(\frac{x}{\delta}\right)^2\right]
$$

$$
\langle v_z \rangle = \frac{\rho g \delta^2 \cos\beta}{3\mu}
$$

### 14.2 Circular tube flow

$$
\tau_{rz} = \frac{(P_0-P_L)}{2L}r
$$

$$
v_z = \frac{(P_0-P_L)R^2}{4\mu L}\left[1 - \left(\frac{r}{R}\right)^2\right]
$$

$$
\langle v_z \rangle = \frac{(P_0-P_L)R^2}{8\mu L}
$$

$$
w = \frac{\pi R^4\rho(P_0-P_L)}{8\mu L}
$$

### 14.3 Annulus flow

$$
\tau_{rz} = \frac{(P_0-P_L)R}{2L}\left[\frac{r}{R} - \lambda^2\frac{R}{r}\right]
$$

$$
\lambda^2 = \frac{1-\kappa^2}{2\ln(1/\kappa)}
$$

$$
v_z = \frac{(P_0-P_L)R^2}{4\mu L}\left[1 - \left(\frac{r}{R}\right)^2 + \frac{1-\kappa^2}{\ln(1/\kappa)}\ln\left(\frac{r}{R}\right)\right]
$$

### 14.4 Two adjacent immiscible fluids

$$
v_z^{I} = v_z^{II}
$$

$$
\tau_{xz}^{I} = \tau_{xz}^{II}
$$

### 14.5 Creeping flow around a sphere

$$
F_k = 6\pi\mu R v_{\infty}
$$

$$
v_{\infty} = \frac{2R^2g(\rho_s - \rho)}{9\mu}
$$

---

## 15. 핵심 개념 모음

| 개념 | 의미 |
|---|---|
| shell momentum balance | 얇은 shell에 대해 momentum in/out과 body force를 비교하는 방법 |
| laminar flow | 유체층이 질서 있게 흐르는 유동 |
| velocity distribution | 위치에 따른 속도분포 |
| stress distribution | 위치에 따른 momentum flux 분포 |
| no-slip condition | solid wall에서 유체 속도가 벽 속도와 같다는 조건 |
| liquid-gas interface | 보통 gas-side shear stress를 무시 |
| liquid-liquid interface | velocity와 shear stress가 연속 |
| Hagen-Poiseuille equation | 원형 관 laminar flow의 유량 공식 |
| Stokes' law | creeping flow에서 sphere에 작용하는 drag force |

---

## 16. 시험 포인트

### 16.1 풀이 순서

2장 문제는 반드시 다음 순서를 따라야 한다.

```text
shell 설정
↓
momentum balance
↓
differential equation
↓
stress distribution
↓
Newton's law of viscosity
↓
velocity distribution
↓
boundary condition 적용
↓
average velocity / flow rate / force 계산
```

### 16.2 자주 틀리는 부분

| 실수 | 주의점 |
|---|---|
| velocity부터 바로 구하려 함 | stress distribution이 먼저 나온다 |
| shear stress 부호 혼동 | 좌표 방향과 momentum flux 방향 확인 |
| boundary condition 누락 | 적분상수 결정 불가 |
| centerline 조건 착각 | tube에서는 stress finite 조건 사용 |
| annulus를 tube처럼 처리 | annulus는 중심축이 유체 영역이 아님 |
| interface 조건 누락 | two-fluid 문제는 velocity와 stress 모두 연속 |
| Stokes' law 무조건 사용 | creeping flow 조건에서만 적절 |

### 16.3 가장 중요한 비교

| 문제 | shear stress | velocity profile | 핵심 boundary condition |
|---|---|---|---|
| falling film | $x$에 대해 선형 | 포물선형 | surface shear stress = 0, wall no-slip |
| circular tube | $r$에 대해 선형 | 포물선형 | center finite stress, wall no-slip |
| annulus | $r$항과 $1/r$항 포함 | logarithm 포함 | inner/outer wall no-slip |
| two fluids | 계면에서 연속 | viscosity에 따라 비대칭 | velocity/stress continuity |
| sphere | normal + tangential force | shell balance로 직접 풀이 어려움 | creeping flow 조건 |

---

## 마지막 정리

2장은 다음 한 문장으로 정리할 수 있다.

> 1장에서 정의한 momentum flux와 viscosity를 이용해, laminar flow에서 shell momentum balance를 세우고 velocity distribution을 구하는 장이다.

가장 중요한 사고방식은 다음이다.

> 힘의 평형이 아니라 momentum flux의 balance로 유동을 해석한다.

2장을 제대로 이해했다는 것은 falling film, tube flow, annulus flow의 공식을 외웠다는 뜻이 아니다.

새로운 단순 유동을 만났을 때 **shell balance를 세울 수 있다**는 뜻이다.
