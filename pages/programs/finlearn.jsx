import Image from 'next/image';
import aboutImg   from './images/about.webp';
import whyImg     from './images/why.webp';
import coursesImg from './images/courses.webp';

const Finlearn = () => {
  return (
    <div className="page">
      {/* ────────  About  ──────── */}
      <section className="section">
        <div className="textBlock">
          <h2 className="heading">
            <span className="yellow">About </span>
            <span className="indigo">FinLearn</span>
          </h2>
          <p className="lead">
            Finlearn is a premier education hub dedicated to transforming aspiring finance
            professionals into industry-ready experts. We offer specialized, integrated programs
            that blend theoretical knowledge with practical skills, focusing on critical areas such
            as equity research, wealth management, and the BFSI sector. Our courses are designed in
            collaboration with industry experts, ensuring students receive the most relevant and
            up-to-date training.
          </p>
        </div>

        <div className="imageBlock">
          <Image
            src={aboutImg}
            alt="About FinLearn"
            width={600}
            height={400}
            className="rounded"
            priority
          />
        </div>
      </section>

      {/* ────────  Why Choose  ──────── */}
      <section className="section alt">
        <div className="textBlock">
          <h2 className="heading">
            <span className="yellow">Why </span>
            <span className="indigo">Choose Finlearn</span>
          </h2>

          <ul className="whyList">
            {[
              'Comprehensive Curriculum',
              'Job Assistance',
              'Expert-Led Training',
              'Advanced Skill Development',
              'CISI Certification',
              'Career Support',
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
            alt="Why FinLearn"
            width={600}
            height={400}
            className="rounded"
          />
        </div>
      </section>

      {/* ────────  Courses  ──────── */}
      <section className="section">
        <div className="textBlock">
          <h2 className="heading">
            <span className="indigo">Our </span>
            <span className="yellow">Courses</span>
          </h2>

          <div className="courses">
            <article>
              <h3>Investment Banking Operations Program</h3>
              <p>
                Our premier industry-endorsed program, the Certified Investment Banking Operations
                Professional (IBOP), is ideally tailored for individuals with less than three years
                of experience.
              </p>
            </article>

            <article>
              <h3>
                3-Year Add-on Program in BFSI (Investment Banking Operations Specialization)
              </h3>
              <p>
                This 3-year add-on program in BFSI is ideal for B.Com &amp; BBA students and anyone
                interested in making a career in banking.
              </p>
            </article>
          </div>
        </div>

        <div className="imageBlock">
          <Image
            src={coursesImg}
            alt="Courses"
            width={600}
            height={400}
            className="rounded"
          />
        </div>
      </section>

      {/* ────────  Styles  ──────── */}
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

        /* ----------  Shared Section Layout  ---------- */
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
          /*  Alternate image/text order for nicer flow  */
          .section:nth-of-type(even) .textBlock {
            order: 2;
          }
          .section:nth-of-type(even) .imageBlock {
            order: 1;
          }
        }

        /* ----------  Headings & Typography  ---------- */
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
        }

        /* ----------  Rounded Images  ---------- */
        .rounded {
          border-radius: 1rem;
          box-shadow: var(--shadow);
        }

        /* ----------  Why Choose List  ---------- */
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

        /* ----------  Courses  ---------- */
        .courses article {
          margin-bottom: 2rem;
        }
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

export default Finlearn;
