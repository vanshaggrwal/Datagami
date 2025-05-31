import Image from 'next/image';
import aboutImg    from './images/ibm-about.webp';
import whyImg      from './images/ibm-why.png';
import benefitsImg from './images/ibm-benifits.jpg';

const IbmIce = () => {
  return (
    <div className="page">
      {/* ──────────  ABOUT  ────────── */}
      <section className="section">
        <div className="textBlock">
          <h2 className="heading">
            <span className="yellow">About </span>
            <span className="indigo">IBM ICE</span>
          </h2>
          <p className="lead">
            IBM Innovation Centre for Education (IBM ICE) is a unique global initiative by IBM,
            providing essential applied IT knowledge in key and emerging technology areas. Delivered
            in collaboration with universities, IBM acts as the Knowledge Partner, while
            universities serve as Academic Partners.
          </p>
          <p className="lead">
            IBM ICE programs are intensive and combine face-to-face learning with IBM’s advanced
            online platform, the <em>Industry–Academia Collaboration Framework</em>. This approach
            ensures students gain deep, applied knowledge through industry alignment and
            interactions, preparing them to be industry-ready and future-ready professionals.
          </p>
        </div>

        <div className="imageBlock">
          <Image
            src={aboutImg}
            alt="Students in IBM ICE program"
            width={600}
            height={400}
            className="rounded"
            priority
          />
        </div>
      </section>

      {/* ──────────  WHY IBM ICE  ────────── */}
      <section className="section alt">
        <div className="textBlock">
          <h2 className="heading">
            <span className="yellow">Why </span>
            <span className="indigo">IBM ICE</span>
          </h2>

          <p>
            As technology evolves, traditional Computer Science programs often lag, leaving
            students needing further training before contributing effectively in the workplace.
          </p>
          <p>
            IBM ICE bridges this gap by offering cutting-edge technological knowledge and
            industry-specific training. Our state-of-the-art delivery model ensures students are
            equipped with the skills needed to thrive in a dynamic landscape, providing immediate
            value to employers.
          </p>
        </div>

        <div className="imageBlock">
          <Image
            src={whyImg}
            alt="IBM ICE delivery model graphic"
            width={600}
            height={400}
            className="rounded"
          />
        </div>
      </section>

      {/* ──────────  KEY BENEFITS  ────────── */}
      <section className="section">
        <div className="imageBlock">
          <Image
            src={benefitsImg}
            alt="Team collaboration"
            width={600}
            height={400}
            className="rounded"
          />
        </div>

        <div className="textBlock">
          <h2 className="heading">
            <span className="indigo">Key Benefits</span>
            <br />
            <span className="indigo">for the </span>
            <span className="yellow">Students</span>
          </h2>

          <ul className="benefits">
            {[
              'Technology-based and totally vendor-agnostic curriculum',
              'IBM-certified Faculties',
              'Curriculum designed by IBM',
              'Project-based learning',
              'Globally recognised Digital Badge for students from IBM',
              'Continuous industry updates',
              'Collaboration and competition on IBM ICE Days',
              'Exclusive in-depth applied courseware',
              'Online / Offline discussion forums',
              'SME visits & interaction',
            ].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ──────────  STYLES  ────────── */}
      <style jsx>{`
        /* ----------  Variables  ---------- */
        :root {
          --yellow: #fbbf24;
          --indigo: #1e1b4b;
          --bg-light: #f5f6fc;
          --bg-white: #ffffff;
          --text-gray: #374151;
          --shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        /* ----------  Global Container  ---------- */
        .page {
          background: var(--bg-light);
          color: var(--text-gray);
          font-family: Inter, system-ui, sans-serif;
          line-height: 1.6;
        }

        /* ----------  Section Layout  ---------- */
        .section {
          max-width: 1150px;
          margin: 0 auto;
          padding: 4rem 1.5rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }
        .section.alt {
          background: var(--bg-white);
        }
        @media (min-width: 768px) {
          .section {
            grid-template-columns: repeat(2, 1fr);
          }
          /* flip the middle section for visual variety */
          .section:nth-of-type(2) .textBlock {
            order: 2;
          }
          .section:nth-of-type(2) .imageBlock {
            order: 1;
          }
        }

        .textBlock {
          order: 1;
        }
        .imageBlock {
          order: 2;
        }

        /* ----------  Typography  ---------- */
        .heading {
          font-size: 2.25rem;
          font-weight: 700;
          margin: 0 0 1.25rem;
        }
        @media (min-width: 1024px) {
          .heading {
            font-size: 2.75rem;
          }
        }
        .yellow {
          color: var(--yellow);
        }
        .indigo {
          color: var(--indigo);
        }
        .lead {
          font-size: 1.125rem;
          margin-bottom: 1.25rem;
        }

        /* ----------  Images  ---------- */
        .rounded {
          border-radius: 1rem;
          box-shadow: var(--shadow);
        }

        /* ----------  Benefits List  ---------- */
        .benefits {
          margin: 1.75rem 0 0;
          padding-left: 1.25rem; /* default bullet indent */
          display: grid;
          gap: 0.75rem;
        }
        .benefits li {
          list-style: disc;
        }
      `}</style>
    </div>
  );
};

export default IbmIce;
