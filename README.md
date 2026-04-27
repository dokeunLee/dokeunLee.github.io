# 이도근 — Study & Notes

너가 경험한 거를 한 곳에 쌓는 사이트로, [Docusaurus](https://docusaurus.io/) 기반이고, 깃허브 액션으로 자동 배포돼.

이 README 한 번만 차분히 읽으면 새 글 추가, 수식 쓰기, 디자인 손보기, 배포까지 다 할 수 있어.

---

## 1. 처음 1번만 — 로컬 셋업

```bash
npm install     # 패키지 설치 (최초 1회)
npm start       # 개발 서버 (http://localhost:3000/dokeunLee/)
```

`npm start`로 띄워두면 파일 수정할 때마다 브라우저가 알아서 새로고침 됨. 글 쓸 땐 항상 이거 켜놓고 작업하는 게 좋을 거 같음.

> **주의:** baseUrl이 `/dokeunLee/`라 로컬 주소도 `localhost:3000/dokeunLee/`야. 그냥 `localhost:3000` 들어가면 404 나니까 슬래시 끝까지 붙여야 해.

자주 쓰는 명령어:

| 명령어 | 뭐 하는 건지 |
|--------|-------------|
| `npm start` | 개발 서버 (수정사항 실시간 반영) |
| `npm run build` | 정적 빌드 (`build/` 폴더에 결과물) |
| `npm run serve` | 빌드 결과물 미리보기 |
| `npm run clear` | 캐시 청소 (브라우저 청크 에러 뜰 때 이거 돌려) |
| `npm run gen:og` | 소셜 카드 PNG 다시 생성 (SVG 디자인 바꿨을 때) |

---

## 2. 너에 대한 정보 한 곳에서 바꾸기

이름·이메일·생년·학력·자기소개 같은 개인 정보는 전부 한 파일에 모아놨어:

📍 [src/data/profile.js](src/data/profile.js)

여기 한 군데만 고치면 메인 페이지 전체가 바뀌니까 확인해보고 수정해.

```js
// 예시 — Timeline에 새 항목 추가
timeline: [
  {when: '2026 –', what: '석사과정', sub: '○○대학교 △△연구실'},
  {when: '2026.06', what: '학회 발표', sub: 'KCC 2026 — Best Paper'},  // 새로 추가
  {when: '2020 – 2025', what: '학사 졸업', sub: '○○대 컴퓨터공학과'},
  {when: '2001', what: '출생', sub: ''},
],
```

**프로필 사진을 다른 사진으로 바꾸려면**: `static/img/` 아래에 새 사진을 두고 [profile.js](src/data/profile.js)의 `photo` 경로만 수정.

**블로그 글에 표시되는 작성자 정보**는 별도로 한 군데 더: [blog/authors.yml](blog/authors.yml). GitHub 주소나 이메일 바뀌면 같이 갱신해줘.

---

## 3. 글 쓰는 자리 정하는 팁 — Docs vs Blog

판단 기준 단 하나: **나중의 내가 다시 찾아볼 가치가 있는 지식인가?**

| | Docs (`docs/`) | Blog (`blog/`) |
|--|---|---|
| 뭐 쓰는 자리? | 재사용 가능한 지식 | 그날의 경험·회고 |
| 예시 | 논문 정리, 강의 노트, 기술 학습 | 발표 후기, 세미나 참석, 해커톤 회고 |
| 시간이 지나면? | 계속 가치 있음 | 휘발돼도 OK |

헷갈리면 그냥 Blog로 쓰고 나중에 주기적으로 확인하겠다 싶으면 Docs로 옮기면 돼.

---

## 4. 새 글 쓰기 — 템플릿 복사가 먼저

틀이 안잡혀 있을 거 같아서 템플릿을 미리 깔아놨어. 복사해서 쓰면 돼.

### 4-1. Docs 새 글

| 종류 | 템플릿 | 어디에 둘 것인지 |
|---|---|---|
| 논문 정리 | [docs/templates/paper-summary.md](docs/templates/paper-summary.md) | `docs/papers/` |
| 강의 노트 | [docs/templates/course-note.md](docs/templates/course-note.md) | `docs/courses/` |
| 기술 학습 | [docs/templates/topic-note.md](docs/templates/topic-note.md) | `docs/topics/` |

워크플로우:
1. 위 템플릿 파일 복사 → `docs/papers/transformer.md` 같은 이름으로 저장
2. 상단의 frontmatter (title, description) 수정
3. 본문 채우기
4. **저장하면 사이드바에 자동으로 등록돼.** 별도 설정 불필요.

### 4-2. Blog 새 글

| 회고 종류 | 템플릿 |
|---|---|
| 논문 발표 후기 | [blog/templates/paper-presentation.md](blog/templates/paper-presentation.md) |
| 세미나 참석 | [blog/templates/seminar.md](blog/templates/seminar.md) |
| 해커톤 | [blog/templates/hackathon.md](blog/templates/hackathon.md) |
| 학회·단체활동 | [blog/templates/activity.md](blog/templates/activity.md) |
| 주간/월간 회고 | [blog/templates/retrospective.md](blog/templates/retrospective.md) |

워크플로우:
1. 템플릿 복사 → `blog/2026-05-12-kcc-2026.md` 같은 이름 (날짜는 필수: `YYYY-MM-DD-slug.md`)
2. frontmatter에서 **`draft: true` 줄 삭제** ← 안 지우면 빌드 결과에 안 나타남
3. `slug`, `title`, `tags` 본인 글에 맞게 수정
4. 본문 채우기

---

## 5. Markdown 모르면 확인

마크다운은 *글에 서식을 입히는 가장 쉬운 문법*이야. 이 정도면 90% 커버:

### 5-1. 제목

```md
# 제일 큰 제목
## 두 번째
### 세 번째
```

> 글 본문에서는 `#` (h1)은 보통 frontmatter의 `title`이 자동으로 만들어주니까, 본문에서는 `##`부터 시작하는 게 좋아.

### 5-2. 강조

```md
**굵게**, *기울임*, ~~취소선~~, `인라인 코드`
```

### 5-3. 리스트

```md
- 순서 없는 리스트
- 두 번째
  - 들여쓰기는 공백 2칸

1. 순서 있는
2. 두 번째
```

### 5-4. 링크 / 이미지

```md
[표시할 글](https://example.com)
![대체 텍스트](/img/profile.jpg)
```

이미지는 `static/img/` 폴더에 둔 파일을 `/img/파일명`으로 가져와.

### 5-5. 코드 블록

```text
```python
def hello():
    print("Hello")
```
```

언어 이름 적어주면 하이라이팅 돼서 예쁘게 나와. (`python`, `bash`, `js`, `yaml`, `json`, `latex` 다 됨)

### 5-6. 인용 / 표

```md
> 이렇게 시작하면 인용

| 컬럼1 | 컬럼2 |
|------|------|
| 값1   | 값2  |
```

### 5-7. Frontmatter (글 맨 위 메타데이터)

모든 글은 `---` 사이에 메타데이터를 적고 시작해:

```md
---
title: "내가 정한 제목"
description: "한 줄 설명"
tags: [transformer, attention]
---

여기서부터 본문...
```

Blog 글이면 추가로 `slug`, `authors`, `date` 같은 필드를 넣어. (템플릿에 다 적혀 있음)

---

## 6. MDX 함정 모음 — 이거 모르면 빌드 깨져

이 사이트는 `.md` 파일도 **MDX 엄격 모드**로 파싱해. MDX는 마크다운 + JSX인데, 평범한 마크다운에선 안 나오는 함정이 몇 가지 있어:

### ❌ HTML 주석 안 됨

```md
<!-- 이거 쓰면 빌드 깨짐 -->
```

대신 MDX 주석 써:

```md
{/* 이렇게 써야 됨 */}
```

특히 **블로그의 `<!-- truncate -->` 마커**가 흔히 깨져. 템플릿엔 이미 `{/* truncate */}`로 적혀있어.

### ❌ 본문에 `{` `}` 그대로 쓰면 안 됨

MDX는 `{...}`를 JS 표현식으로 해석하려고 해. 그래서 글에 중괄호 들어가면 깨질 수 있어:

```md
이 함수는 {key: value} 형태를 받는다  ← ❌ 빌드 에러
```

해결: 백틱으로 감싸서 코드로 만들거나, escape:

```md
이 함수는 `{key: value}` 형태를 받는다  ← ✅ OK
이 함수는 \{key: value\} 형태를 받는다   ← ✅ OK
```

### ❌ 본문에 `<태그>` 처럼 보이는 것

`<MyComponent>`는 React 컴포넌트로 해석되려고 해. 일반 텍스트로 쓰려면 escape하거나 코드 블록 안에 넣어.

---

## 7. KaTeX 수식 쓰는 법 — 석사라면 거의 매일

이 사이트엔 [remark-math](https://github.com/remarkjs/remark-math) + [KaTeX](https://katex.org/)가 켜져 있어. 그냥 LaTeX처럼 쓰면 렌더링돼.

### 인라인 수식

```md
손실은 $L = \sum_i (y_i - \hat{y}_i)^2$ 이렇게 정의된다.
```

→ 손실은 $L = \sum_i (y_i - \hat{y}_i)^2$ 이렇게 정의된다.

### 블록 수식

```md
$$
\hat{\beta} = (X^\top X)^{-1} X^\top y
$$
```

> **주의:** 위에서 말했듯 본문에서 `{`는 MDX가 가로채. 근데 `$...$` 안에 들어간 `{`는 KaTeX가 먼저 처리해서 안전해. **수식은 반드시 `$` 또는 `$$` 안에 넣어.**

### 자주 쓰는 표기

| 의미 | 입력 |
|---|---|
| 분수 | `\frac{a}{b}` → $\frac{a}{b}$ |
| 거듭제곱 | `x^2`, `x^{n+1}` |
| 첨자 | `x_i`, `x_{i,j}` |
| 합·곱 | `\sum_{i=1}^n`, `\prod_{i=1}^n` |
| 적분 | `\int_a^b f(x)\,dx` |
| 그리스 문자 | `\alpha, \beta, \theta, \mu, \sigma` |
| 행렬 | `\begin{pmatrix} a & b \\ c & d \end{pmatrix}` |
| 기댓값 | `\mathbb{E}[X]`, `\mathbb{P}(A)` |

자세한 KaTeX 지원 함수 목록: <https://katex.org/docs/supported.html>

---

## 8. Admonition — 강조 박스

중요한 부분을 박스로 빼고 싶을 때:

```md
:::note 메모
이건 메모 박스야.
:::

:::tip 팁
이건 팁 박스.
:::

:::warning 주의
이건 노란 경고 박스.
:::

:::danger 위험
이건 빨간 위험 박스.
:::
```

---

## 9. 카테고리·태그 새로 추가하기

### Docs에 새 카테고리 (예: `experiments/`)

1. `docs/experiments/` 폴더 생성
2. `docs/experiments/_category_.json` 만들기:

   ```json
   {
     "label": "실험 노트",
     "position": 5,
     "link": {
       "type": "generated-index",
       "description": "실험 셋업과 결과 기록."
     }
   }
   ```

3. [sidebars.js](sidebars.js)의 `sidebars.docs` 배열에 항목 추가:

   ```js
   {
     type: 'category',
     label: '실험 노트',
     link: {type: 'generated-index', slug: '/category/실험-노트'},
     items: [{type: 'autogenerated', dirName: 'experiments'}],
   },
   ```

4. 폴더에 `.md` 파일 떨어뜨리면 끝.

### Blog 새 태그

1. [blog/tags.yml](blog/tags.yml)에 정의 추가:

   ```yaml
   대학원입시:
     label: "대학원 입시"
     permalink: /대학원입시
     description: "대학원 진학 준비 기록"
   ```

2. 글 frontmatter의 `tags`에 `대학원입시` 넣으면 끝.

> 정의 안 한 태그를 쓰면 빌드 시 경고가 떠 (`onInlineTags: 'warn'` 설정). 미리 [tags.yml](blog/tags.yml)에 등록해두는 게 깔끔해.

---

## 10. 자주 만나는 트러블

### "Loading chunk ... failed" / "Unexpected token '<'"

브라우저가 옛 청크 ID로 dev 서버에 요청하다 실패하는 케이스. 캐시 청소:

```bash
npm run clear
npm start
```

브라우저도 강력 새로고침 (Ctrl+F5).

### `npm audit`이 취약점 21개라고 뱉음

전부 `webpack-dev-server` 라인의 dev 전용 의존성이야. **프로덕션 빌드에는 한 줄도 안 들어가.** `npm audit fix --force` 돌리지 마 — Docusaurus 다운그레이드되면서 설정 깨짐. 그냥 무시.

### 글이 안 보임

- Docs: 사이드바엔 `_category_.json`에 등록된 폴더 안의 `.md`만 자동으로 잡혀
- Blog: frontmatter에 `draft: true`가 남아있는지 확인. 템플릿 복사할 때 이거 지우는 거 잊기 쉬움
- 파일명에 한글 들어가면 URL이 인코딩돼서 보기 흉할 수 있어. 슬러그는 영문 권장

---

## 11. 배포 — 깃허브 액션으로 자동

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)에 자동 배포 워크플로우가 있어. `main` 브랜치에 push하면 알아서:

1. 우분투 러너에서 `npm ci` → `npm run build`
2. `build/` 폴더를 GitHub Pages 아티팩트로 업로드
3. `https://dokeunLee.github.io/dokeunLee/` 로 배포

### 처음 1번만 — Repository 설정

1. GitHub에 레포 만들기. **레포 이름은 반드시 `dokeunLee`** (이게 baseUrl과 일치해야 함)
2. `git init && git remote add origin git@github.com:dokeunLee/dokeunLee.git`
3. **Settings → Pages** 들어가서:
   - **Source**: `GitHub Actions` 선택 (gh-pages 브랜치 말고)
4. 첫 push:

   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git push -u origin main
   ```

5. Actions 탭에서 워크플로우 돌아가는 거 확인. 1~2분 걸려.
6. Settings → Pages 다시 가면 배포된 URL 떠.

### 그 다음부터는

```bash
git add .
git commit -m "새 글 추가: KCC 2026 발표 회고"
git push
```

→ 5초 안에 액션 시작, 1~2분 뒤 사이트 갱신. 끝.

### 배포 도메인 바꾸고 싶으면

[docusaurus.config.js](docusaurus.config.js) 위쪽:

```js
url: 'https://dokeunLee.github.io',
baseUrl: '/dokeunLee/',
```

커스텀 도메인 (예: `lee.dev`) 쓰면:

```js
url: 'https://lee.dev',
baseUrl: '/',
```

그리고 `static/CNAME` 파일에 `lee.dev` 한 줄 적어두면 GitHub Pages가 자동 인식.

---

## 12. 디자인 손보기

### 색감

[src/css/custom.css](src/css/custom.css) 위쪽 `--ifm-color-primary*` 변수들. 인디고 톤이 기본인데, 다른 색으로 가고 싶으면 [Docusaurus 색상 도구](https://docusaurus.io/docs/styling-layout#styling-your-site-with-infima)에서 hex 7개 뽑아서 교체.

### 메인 페이지 섹션 순서·내용

[src/pages/index.js](src/pages/index.js) 마지막의 `Home` 함수에서 `<AboutSection />`, `<TimelineSection />` 등을 빼거나 순서 바꾸면 돼.

### 소셜 카드 (링크 공유 시 미리보기 이미지)

1. [static/img/og-card.svg](static/img/og-card.svg)를 편집기 (Figma, Inkscape, VS Code) 로 열어서 텍스트·색 수정
2. `npm run gen:og` 돌리면 [static/img/og-card.png](static/img/og-card.png) 자동 갱신
3. 커밋 → 푸시 → 배포

### 파비콘

같은 패턴: [static/img/favicon.svg](static/img/favicon.svg) 편집하면 끝. SVG라 별도 변환 불필요.

---

## 13. 디렉토리 구조 한눈에

```text
.
├── docs/                       # 재사용 지식 (사이드바 자동 생성)
│   ├── intro.mdx               # /docs 첫 페이지
│   ├── papers/                 # 논문 정리
│   ├── courses/                # 강의 노트
│   ├── topics/                 # 기술 학습
│   └── templates/              # 새 글 시작용 템플릿
│
├── blog/                       # 회고·기록
│   ├── authors.yml             # 작성자 정보
│   ├── tags.yml                # 태그 정의
│   ├── templates/              # 회고 템플릿 (draft: true)
│   └── YYYY-MM-DD-*.md         # 실제 글
│
├── src/
│   ├── data/profile.js         # 너에 대한 정보
│   ├── pages/index.js          # 메인 페이지
│   └── css/custom.css          # 전역 스타일
│
├── static/img/                 # 파비콘·로고·소셜 카드·프로필 사진
│
├── .github/workflows/deploy.yml  # GitHub Pages 자동 배포
├── docusaurus.config.js        # 사이트 메타·플러그인 설정
├── sidebars.js                 # Docs 사이드바 구조
└── scripts/gen-og.mjs          # 소셜 카드 SVG → PNG 변환
```

---

## 14. 다음에 손볼만한 것들 (선택)

- `git init` 한 다음 [docusaurus.config.js](docusaurus.config.js)에서 `showLastUpdateTime: true`로 바꾸면 docs 페이지마다 마지막 수정 시각이 표시돼
- 메인 페이지에 통계 (작성한 글 수, 최근 글 등) 추가하고 싶으면 `@docusaurus/plugin-content-blog`의 글 메타데이터를 가져오는 컴포넌트 만들면 됨
- Algolia DocSearch 등록하면 검색바 활성화 ([공식 안내](https://docusaurus.io/docs/search))

천천히 글부터 쌓고, 주마다 보고 링크 보내는 거 잊지 말고.
