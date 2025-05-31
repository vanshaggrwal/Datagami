import Image from 'next/image';
import aboutImg     from './images/abouttechlearn.webp';
import whyImg       from './images/job_assured.webp';
import trainingImg  from './images/training_method.webp';

const Techlearn = () => {
  return (
    <div className="page">
      {/* ──────────  About  ────────── */}
      <section className="section">
        <div className="textBlock">
          <h2 className="heading">
            <span className="blue">About </span>
            <span className="indigo">TechLearn</span>
          </h2>
          <p className="lead">
            TechLearn is an industry-oriented training platform focused on Cloud Computing, Full-Stack
            Development, DevOps, and AI. Our programs bridge the gap between academic knowledge and
            real-world tech skills through career-focused, employer-aligned certifications.
          </p>
        </div>

        <div className="imageBlock">
          <Image
            src={aboutImg}
            alt="About TechLearn"
            width={600}
            height={400}
            className="rounded"
            priority
          />
        </div>
      </section>

      {/* ──────────  Why Choose  ────────── */}
      <section className="section alt">
        <div className="textBlock">
          <h2 className="heading">
            <span className="blue">Why </span>
            <span className="indigo">Choose TechLearn</span>
          </h2>

          <ul className="whyList">
            {[
              'Hands-on Project Training',
              '100 % Placement Assistance',
              'Latest Tech-Stack Coverage',
              'Mentorship by Industry Experts',
              'IBM & NASSCOM Certifications',
              'Lifetime Learning Portal Access',
            ].map((item, idx) => (
              <li key={idx} className="whyItem">
                <span className="plus">+</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="imageBlock">
          <Image
            src={whyImg}
            alt="Job-Assured Training Model"
            width={600}
            height={400}
            className="rounded"
          />
        </div>
      </section>

      {/* ──────────  Training Methodology / Courses  ────────── */}
      <section className="section">
        <div className="textBlock">
          <h2 className="heading">
            <span className="indigo">Our </span>
            <span className="blue">Courses</span>
          </h2>

          <div className="courses">
            <article>
              <h3>Full-Stack Development Program</h3>
              <p>
                A career-assured pathway covering front-end, back-end, databases, and cloud
                deployment — perfect for aspiring full-stack engineers.
              </p>
            </article>

            <article>
              <h3>Cloud &amp; DevOps Certification Program</h3>
              <p>
                Master AWS, Azure, Docker, Kubernetes, and CI/CD pipelines to become an in-demand
                cloud or DevOps professional.
              </p>
            </article>
          </div>
        </div>

        <div className="imageBlock">
          <Image
            src={trainingImg}
            alt="TechLearn Training Method"
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
          --blue:   #3b82f6;
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

        .textBlock {
          order: 1;
        }
        .imageBlock {
          order: 2;
        }
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
        @media (min-width: 1024px) {
          .heading { font-size: 2.75rem; }
        }
        .blue   { color: var(--blue); }
        .indigo { color: var(--indigo); }
        .lead   { font-size: 1.125rem; }

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
          color: var(--blue);
          font-weight: 700;
          margin-right: 0.5rem;
          font-size: 1.25rem;
          line-height: 1;
        }

        /* ----------  Courses  ---------- */
        .courses article { margin-bottom: 2rem; }
        .courses h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--indigo);
          margin: 0 0 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default Techlearn;
