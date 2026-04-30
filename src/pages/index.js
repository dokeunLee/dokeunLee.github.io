import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import profile from '@site/src/data/profile';

function Avatar() {
  const photoUrl = useBaseUrl(profile.photo || '');
  if (profile.photo) {
    return (
      <img
        className={styles.avatar}
        src={photoUrl}
        alt={`${profile.name.ko} 프로필 사진`}
      />
    );
  }
  return (
    <div className={styles.avatar} aria-hidden>
      {profile.name.short}
    </div>
  );
}

function Hero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.profile}>
          <Avatar />
          <div>
            <span className={styles.kicker}>
              {profile.role.en} · Since {profile.since}
            </span>
            <Heading as="h1" className={styles.name}>
              {profile.name.ko}
              <span className={styles.nameEn}>{profile.name.en}</span>
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
            {profile.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className={styles.factList}>
            <div className={styles.fact}>
              <div className={styles.factLabel}>Status</div>
              <div className={styles.factValue}>{profile.role.ko}</div>
            </div>
            <div className={styles.fact}>
              <div className={styles.factLabel}>Born</div>
              <div className={styles.factValue}>{profile.birthYear}</div>
            </div>
            <div className={styles.fact}>
              <div className={styles.factLabel}>Interests</div>
              <div className={styles.factValue}>{profile.interests}</div>
            </div>
            <div className={styles.fact}>
              <div className={styles.factLabel}>Contact</div>
              <div className={styles.factValue}>
                <Link to={`mailto:${profile.contact.email}`}>{profile.contact.email}</Link>
                {' · '}
                <Link to={profile.contact.github}>GitHub</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Timeline</h2>
          <p>간단한 이력. 자세한 내용은 향후 Blog · Docs로 채워갑니다.</p>
        </div>
        <div className={styles.timeline}>
          {profile.timeline.map((it) => (
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
  {
    kicker: 'Blog · Activities',
    title: '대외활동',
    desc: '외부 활동에서 얻은 경험과 결과를 기록.',
    to: '/blog/tags/대외활동',
  },
];

function BlogSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Records — 무엇을 경험했는가</h2>
          <p>발표·세미나·해커톤·대외활동 등 그날의 경험을 회고로 남김.</p>
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
          <p>나중에 다시 찾아볼 가치가 있는 지식인가.</p>
        </div>
        <div className={styles.howRow}>
          <div className={styles.howBlock}>
            <h3>📚 Docs</h3>
            <p>
              재사용 가능한 지식. 논문 요약, 강의 정리, 기술 노트.
            </p>
          </div>
          <div className={styles.howBlock}>
            <h3>📝 Blog</h3>
            <p>
              그날의 경험과 결정. 발표·세미나·해커톤·대외활동 회고.
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
      description={`${profile.name.ko} — 석사과정 동안의 공부와 경험을 기록하는 공간`}
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
