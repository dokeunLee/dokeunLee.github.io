import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function Hero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.profile}>
          <div className={styles.avatar} aria-hidden>도근</div>
          <div>
            <span className={styles.kicker}>Master's Student · Since 2026</span>
            <Heading as="h1" className={styles.name}>
              이도근
              <span className={styles.nameEn}>Lee Dogeun</span>
            </Heading>
            <p className={styles.role}>
              석사과정 중 공부한 것과 경험한 것을 한 곳에 정리하고 있습니다.
              재사용 가능한 지식은 <b>Docs</b>로, 그날의 경험과 회고는 <b>Blog</b>로 분리해 기록합니다.
            </p>
            <div className={styles.buttons}>
              <Link className="button button--primary button--lg" to="/docs/intro">
                Docs 둘러보기
              </Link>
              <Link className="button button--secondary button--lg" to="/blog">
                Blog 보기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function AboutSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>About</h2>
          <p>지금의 나, 그리고 이 사이트를 시작한 이유.</p>
        </div>
        <div className={styles.aboutGrid}>
          <div className={styles.bio}>
            <p>
              안녕하세요, <b>이도근</b>입니다. 2001년생, 현재 석사과정에 재학 중입니다.
            </p>
            <p>
              연구·수업에서 매일 새로 알게 되는 것들이 흩어져버리는 게 아쉬워서
              이 사이트를 만들었습니다. 다시 찾아볼 가치가 있는 지식은 정리하고,
              발표·세미나·해커톤 같은 경험은 회고로 남깁니다.
            </p>
            <p>
              읽고, 정리하고, 만든 흔적이 시간과 함께 쌓이는 모습을 보고 싶습니다.
            </p>
          </div>
          <div className={styles.factList}>
            <div className={styles.fact}>
              <div className={styles.factLabel}>Status</div>
              <div className={styles.factValue}>석사과정 재학 중</div>
            </div>
            <div className={styles.fact}>
              <div className={styles.factLabel}>Born</div>
              <div className={styles.factValue}>2001</div>
            </div>
            <div className={styles.fact}>
              <div className={styles.factLabel}>Interests</div>
              <div className={styles.factValue}>연구 · 학습 기록 · 협업</div>
            </div>
            <div className={styles.fact}>
              <div className={styles.factLabel}>Contact</div>
              <div className={styles.factValue}>
                <Link to="mailto:your-email@example.com">your-email@example.com</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  const items = [
    {when: '2026 –', what: '석사과정', sub: '지도교수 / 연구실 (편집해 주세요)'},
    {when: '2020 – 2025', what: '학사 졸업', sub: '학교 / 전공'},
    {when: '2001', what: '출생', sub: ''},
  ];
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Timeline</h2>
          <p>간단한 이력. 자세한 내용은 향후 Blog · Docs로 채워나갑니다.</p>
        </div>
        <div className={styles.timeline}>
          {items.map((it) => (
            <div key={it.when} className={styles.timelineItem}>
              <div className={styles.timelineWhen}>{it.when}</div>
              <div className={styles.timelineWhat}>
                <strong>{it.what}</strong>
                {it.sub && <span>{it.sub}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const docCards = [
  {
    kicker: 'Docs · Papers',
    title: '논문 정리',
    desc: '읽은 논문의 핵심·한계·내 연구와의 연결을 한 페이지에.',
    to: '/docs/category/논문-정리',
  },
  {
    kicker: 'Docs · Courses',
    title: '강의 노트',
    desc: '수강 과목의 개념과 과제 풀이를 학기별로 정리.',
    to: '/docs/category/강의-노트',
  },
  {
    kicker: 'Docs · Topics',
    title: '기술 학습',
    desc: 'PyTorch, LaTeX, Git 등 다시 봐도 바로 쓰는 노트.',
    to: '/docs/category/기술-학습',
  },
];

function DocsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Knowledge — 무엇을 공부했는가</h2>
          <p>구조화된 카테고리에서 노트를 빠르게 찾을 수 있도록.</p>
        </div>
        <div className={styles.cardGrid}>
          {docCards.map((c) => (
            <Link key={c.to} to={c.to} className="snCard">
              <div className="snCardKicker">{c.kicker}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const blogCards = [
  {
    kicker: 'Blog · Talk',
    title: '논문 발표',
    desc: '발표 준비·받은 질문·다음에 바꿀 점을 그날 회고.',
    to: '/blog/tags/논문-발표',
  },
  {
    kicker: 'Blog · Seminar',
    title: '세미나',
    desc: '들었던 세미나의 메시지를 한 문단으로 압축.',
    to: '/blog/tags/세미나',
  },
  {
    kicker: 'Blog · Hackathon',
    title: '해커톤',
    desc: '단기 협업에서 잘된 결정과 다시 안 할 결정.',
    to: '/blog/tags/해커톤',
  },
];

function BlogSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Records — 무엇을 경험했는가</h2>
          <p>발표·세미나·해커톤·학회 등 그날의 경험을 회고로 남깁니다.</p>
        </div>
        <div className={styles.cardGrid}>
          {blogCards.map((c) => (
            <Link key={c.to} to={c.to} className="snCard">
              <div className="snCardKicker">{c.kicker}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>어디에 무엇을 쓰지?</h2>
          <p>판단 기준은 단 하나 — 나중에 다시 찾아볼 가치가 있는 지식인가.</p>
        </div>
        <div className={styles.howRow}>
          <div className={styles.howBlock}>
            <h3>📚 Docs</h3>
            <p>
              재사용 가능한 지식. 논문 요약, 강의 정리, 기술 노트.
              템플릿을 복사해 시작하면 형식 고민이 사라집니다.
            </p>
          </div>
          <div className={styles.howBlock}>
            <h3>📝 Blog</h3>
            <p>
              그날의 경험과 결정. 발표·세미나·해커톤·학회 회고.
              빠르게 적고 미래에 패턴을 찾는 자료가 됩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="이도근 — 석사과정 동안의 공부와 경험을 기록하는 공간"
    >
      <Hero />
      <main>
        <AboutSection />
        <TimelineSection />
        <DocsSection />
        <BlogSection />
        <HowSection />
      </main>
    </Layout>
  );
}
