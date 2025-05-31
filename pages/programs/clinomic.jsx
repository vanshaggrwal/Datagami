import Image from 'next/image';
import aboutImg from './images/about-clinomic.webp';
import whyImg   from './images/benefits.webp';

const Clinomic = () => (
  <div className="page">
    {/* ──────────  About  ────────── */}
    <section className="section">
      <div className="textBlock">
        <h2 className="heading">
          <span className="yellow">About </span>
          <span className="indigo">Clinomic</span>
        </h2>

        <p className="lead">
          Clinomic Center for Clinical Research Pvt. Ltd. is the premier institute dedicated to
          promoting ethical research and high-quality Clinical Research education in India.
        </p>

        <p>
          <strong>Clinical Research Industry</strong><br />
          The Indian pharmaceutical sector is one of the fastest-growing areas of the economy.
        </p>

        <p>
          <strong>Clinical Research Training Sector</strong><br />
          Clinomic equips students to work in hospitals, diagnostic labs, and healthcare settings,
          providing a global framework for training, information exchange, and professional
          excellence in clinical research.
        </p>
      </div>

      <div className="imageBlock">
        <Image
          src={aboutImg}
          alt="Clinomic – microscope research"
          width={600}
          height={400}
          className="rounded"
          priority
        />
      </div>
    </section>

    {/* ──────────  Why Clinomic  ────────── */}
    <section className="section alt">
      <div className="textBlock">
        <h2 className="heading">
          <span className="yellow">Why </span>
          <span className="indigo">Clinomic<br />Center&nbsp;for&nbsp;Clinical&nbsp;Research</span>
        </h2>

        <ul className="whyList">
          {[
            '100 % Placement Assessment',
            'Interview skill development for every student',
            'Practical experience via internship programs',
            'Accolades such as International Education Award & ISO Certification',
            'Experienced teaching staff',
            'E-teaching methodology',
            'Courseware with the latest industry updates',
          ].map((item, i) => (
            <li key={i} className="whyItem">
              <span className="plus">+</span> {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="imageBlock">
        <Image
          src={whyImg}
          alt="Why Clinomic – hands-on molecular model"
          width={600}
          height={400}
          className="rounded"
        />
      </div>
    </section>

    {/* ──────────  Styles  ────────── */}
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

      /* ----------  Global  ---------- */
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
      }

      .textBlock { order: 1; }
      .imageBlock { order: 2; }
      @media (min-width: 768px) {
        .section:nth-of-type(even) .textBlock { order: 2; }
        .section:nth-of-type(even) .imageBlock { order: 1; }
      }

      /* ----------  Typography  ---------- */
      .heading {
        font-size: 2.25rem;
        font-weight: 700;
        margin: 0 0 1.25rem;
      }
      @media (min-width: 1024px) { .heading { font-size: 2.75rem; } }
      .yellow { color: var(--yellow); }
      .indigo { color: var(--indigo); }
      .lead   { font-size: 1.125rem; margin-bottom: 1.25rem; }

      /* ----------  Images  ---------- */
      .rounded {
        border-radius: 1rem;
        box-shadow: var(--shadow);
      }

      /* ----------  Why List  ---------- */
      .whyList {
        list-style: none;
        padding: 0;
        margin: 2rem 0 0;
        display: grid;
        gap: 1.25rem;
      }
      .whyItem {
        background: var(--bg-light);
        border-radius: 0.75rem;
        padding: 1rem 1.25rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        box-shadow: var(--shadow);
        transition: transform 0.2s, box-shadow 0.2s;
      }
      .whyItem:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
      }
      .plus {
        color: var(--yellow);
        font-weight: 700;
        margin-right: 0.5rem;
        font-size: 1.25rem;
        line-height: 1;
      }
    `}</style>
  </div>
);

export default Clinomic;
