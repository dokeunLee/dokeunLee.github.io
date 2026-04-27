// 사이트 곳곳에서 쓰는 개인 정보를 한 곳에 모아둔 파일.
// 이름 / 이메일 / 학력 등을 바꾸고 싶다면 이 파일만 수정하세요.
// (블로그 작성자 정보는 blog/authors.yml 도 함께 갱신해 주세요.)

const profile = {
  name: {
    ko: '이도근',
    en: 'Lee Dokeun',
    short: '도근', // 프로필 사진이 없을 때 아바타에 표시
  },

  // 메인 페이지 아바타로 쓸 사진 경로. null/undefined면 텍스트 모노그램으로 fallback.
  // 새 사진을 쓰려면 static/img/ 아래에 두고 경로만 바꾸면 됩니다.
  photo: '/img/profile.jpg',

  birthYear: 2001,

  role: {
    ko: '석사과정 재학 중',
    en: "Master's Student",
  },

  since: 2026, // 석사과정 시작 연도 — 히어로 키커에 표시됨

  // 메인 페이지 About 섹션 자기소개. 배열 한 칸이 한 문단.
  bio: [
    '안녕하세요, 이도근입니다. 2001년생, 현재 석사과정에 재학 중입니다.',
    '연구·수업에서 매일 새로 알게 되는 것들이 흩어져버리는 게 아쉬워서 이 사이트를 만들었습니다. 다시 찾아볼 가치가 있는 지식은 정리하고, 발표·세미나·해커톤 같은 경험은 회고로 남깁니다.',
    '읽고, 정리하고, 만든 흔적이 시간과 함께 쌓이는 모습을 보고 싶습니다.',
  ],

  // 사이드 박스 한 줄짜리 정보
  interests: '연구 · 학습 기록 · 협업',

  contact: {
    email: 'nsa08008@daum.net',
    githubId: 'dokeunLee',
    github: 'https://github.com/dokeunLee',
  },

  // 메인 페이지 Timeline. 위에서부터 최신순.
  timeline: [
    {when: '2026 –', what: '석사과정', sub: '지도교수 / 연구실 (편집해 주세요)'},
    {when: '2020 – 2025', what: '학사 졸업', sub: '학교 / 전공'},
    {when: '2001', what: '출생', sub: ''},
  ],
};

export default profile;
