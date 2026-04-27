# 이도근 — Study & Notes

석사과정 동안의 **공부한 것 (Docs)** 과 **경험한 것 (Blog)** 을 한 곳에 기록하기 위한 [Docusaurus](https://docusaurus.io/) 사이트.

## 디렉토리

```
docs/
├── intro.mdx           시작 가이드
├── papers/             논문 정리
├── courses/            강의 노트
├── topics/             기술 학습
└── templates/          새 글 시작용 템플릿 3종

blog/
├── authors.yml         작성자 정보 (이도근)
├── tags.yml            태그 정의 (논문 발표, 세미나, 해커톤, 학회, 단체활동, 회고)
├── templates/          회고 템플릿 5종 (모두 draft: true)
└── YYYY-MM-DD-*.md     회고 글
```

## 새 글 시작

| 종류        | 템플릿                                | 저장 위치          |
|-------------|---------------------------------------|--------------------|
| 논문 정리   | `docs/templates/paper-summary.md`     | `docs/papers/...`  |
| 강의 노트   | `docs/templates/course-note.md`       | `docs/courses/...` |
| 기술 학습   | `docs/templates/topic-note.md`        | `docs/topics/...`  |
| 논문 발표   | `blog/templates/paper-presentation.md`| `blog/YYYY-MM-DD-*.md` |
| 세미나      | `blog/templates/seminar.md`           | `blog/YYYY-MM-DD-*.md` |
| 해커톤      | `blog/templates/hackathon.md`         | `blog/YYYY-MM-DD-*.md` |
| 학회·단체   | `blog/templates/activity.md`          | `blog/YYYY-MM-DD-*.md` |
| 주간 회고   | `blog/templates/retrospective.md`     | `blog/YYYY-MM-DD-*.md` |

블로그 템플릿은 `draft: true` 가 붙어 있어 빌드 결과에는 노출되지 않습니다. 복사 후 새 파일에서 해당 줄을 지우세요.

## 명령어

```bash
npm install        # 최초 1회
npm start          # 개발 서버 (http://localhost:3000)
npm run build      # 정적 빌드 (build/)
npm run serve      # 빌드 결과 미리보기
```

## 수식 (KaTeX)

`$...$` 인라인, `$$...$$` 블록 모두 지원합니다 (remark-math + rehype-katex).

## 깃 초기화 후 권장 설정

`docusaurus.config.js`에서:

- `showLastUpdateTime: true` 로 켜면 docs 페이지에 마지막 수정 시각 표시
- `url`, `organizationName`, `projectName` 본인 값으로 교체
- `blog/authors.yml` 의 url / image_url / socials 도 갱신

## 배포

GitHub Pages 기준 `npm run deploy`. 그 외 정적 호스팅은 `build/` 디렉토리를 그대로 업로드.
