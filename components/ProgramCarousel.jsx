'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

import techlearnImg from '../pages/programs/images/abouttechlearn.webp';
import finlearnImg from '../pages/programs/images/about.webp';
import clinomicImg from '../pages/programs/images/about-clinomic.webp';
import IbmImg from '../pages/programs/images/ibm-about.webp';

const ProgramCarousel = () => {
  const programs = [
    {
      title: 'TechLearn',
      desc: 'Career-oriented training in Full-Stack, DevOps & Cloud.',
      image: techlearnImg,
      path: '/programs/techlearn',
    },
    {
      title: 'FinLearn',
      desc: 'Industry-ready programs in Banking, Finance & Accounting.',
      image: finlearnImg,
      path: '/programs/finlearn',
    },
    {
      title: 'Clinomic',
      desc: 'Clinical Research training aligned with global standards.',
      image: clinomicImg,
      path: '/programs/clinomic',
    },
    {
      title: 'IBM Ice',
      desc: 'International Certification in Software, Cloud & AI by IBM.',
      image: IbmImg,
      path: '/programs/ibm-ice',
    },
  ];

  return (
    <section className="carouselContainer">
      <h2 className="carouselTitle">
        <span className="blue">Programs </span>
        <span className="indigo">Offered</span>
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {programs.map((program, index) => (
          <SwiperSlide key={index}>
            <Link href={program.path} className="slideLink">
              <div className="slideCard">
                <Image
                  src={program.image}
                  alt={program.title}
                  width={600}
                  height={400}
                  className="slideImage"
                />
                <h3>{program.title}</h3>
                <p>{program.desc}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .carouselContainer {
          max-width: 900px;
          margin: 4rem auto;
          padding: 1rem;
        }

        .carouselTitle {
          font-size: 2rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 2rem;
        }

        .blue {
          color: #3b82f6;
        }

        .indigo {
          color: #1e1b4b;
        }

        .slideLink {
          text-decoration: none;
          color: inherit;
        }

        .slideLink:hover .slideCard {
          transform: scale(1.02);
          transition: transform 0.2s ease;
        }

        .slideCard {
          text-align: center;
          padding: 1rem;
          background: white;
          border-radius: 1rem;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          transition: transform 0.2s ease;
        }

        .slideImage {
          border-radius: 1rem;
          margin-bottom: 1rem;
        }

        h3 {
          margin: 0.5rem 0;
          font-size: 1.5rem;
          color: #1e1b4b;
        }

        p {
          color: #374151;
        }
      `}</style>
    </section>
  );
};

export default ProgramCarousel;
