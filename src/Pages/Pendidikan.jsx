import React, { memo, useEffect } from "react";
import {
  Calendar,
  MapPin,
  GraduationCap,
  Sparkles,
  CircleDot,
  ArrowUpRight,
} from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

const BackgroundDecoration = () => (
  <>
    <div className="absolute -top-40 -left-40 w-[320px] h-[320px] bg-indigo-500/10 blur-[120px] rounded-full"></div>

    <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-violet-500/10 blur-[140px] rounded-full"></div>
  </>
);

const TimelineItem = memo(
  ({
    year,
    title,
    institution,
    description,
    score,
    location,
    tags,
    status,
    isLeft,
    icon: Icon,
    color,
  }) => (
    <div
      className={`flex flex-col md:flex-row ${
        isLeft ? "md:flex-row-reverse" : ""
      } gap-6 mb-16`}
      data-aos="fade-up"
    >
      {/* Left */}
      <div className="flex-1"></div>

      {/* Timeline */}
      <div className="flex flex-col items-center">

        <div
          className={`
          w-14
          h-14
          rounded-full
          flex
          items-center
          justify-center
          bg-gradient-to-br
          ${color}
          shadow-lg
          transition-all
          duration-300
          hover:scale-110
        `}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>

        <div className="w-[2px] flex-1 bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent mt-3"></div>
      </div>

      {/* Card */}
      <div className="flex-1 group">

        <div
          className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-slate-900/70
          backdrop-blur-md
          p-7
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-indigo-500/40
          hover:shadow-xl
        "
        >

          {/* Top Border Animation */}

          <div
            className="
            absolute
            top-0
            left-0
            h-[3px]
            w-0
            bg-gradient-to-r
            from-indigo-500
            via-violet-500
            to-indigo-500
            group-hover:w-full
            transition-all
            duration-500
          "
          />

          {/* Shine */}

          <span
            className="
            absolute
            inset-0
            pointer-events-none
            bg-gradient-to-r
            from-transparent
            via-white/5
            to-transparent
            -translate-x-full
            group-hover:translate-x-full
            transition-transform
            duration-700
          "
          />

          {/* Arrow */}

          <ArrowUpRight
            className="
            absolute
            right-5
            top-5
            w-5
            h-5
            text-gray-500
            transition-all
            duration-300
            group-hover:text-indigo-400
            group-hover:-translate-y-1
            group-hover:translate-x-1
          "
          />

          {/* Date */}

          <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">

            <Calendar size={15} />

            <span>{year}</span>

            <span
              className="
              ml-auto
              px-3
              py-1
              rounded-full
              text-xs
              font-semibold
              bg-green-500/10
              text-green-400
              border
              border-green-500/20
            "
            >
              {status}
            </span>

          </div>

          <h2 className="text-2xl font-bold text-white">
            {title}
          </h2>

          <p className="text-indigo-300 mt-1">
            {institution}
          </p>

          <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">

            <MapPin size={15} />

            {location}

          </div>

          {/* GPA */}

          <div className="mt-5">

            <span
              className="
              px-3
              py-1
              rounded-full
              text-sm
              border
              border-indigo-500/20
              bg-indigo-500/10
              text-indigo-300
            "
            >
              {score}
            </span>

          </div>

          {/* Description */}

          <p className="text-gray-300 leading-8 mt-5">
            {description}
          </p>

          {/* Tags */}

          <div className="flex flex-wrap gap-2 mt-6">

            {tags.map((tag, index) => (

              <span
                key={index}
                className="
                px-3
                py-1
                rounded-full
                border
                border-white/10
                bg-white/5
                text-xs
                text-gray-300
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-indigo-400
                hover:bg-indigo-500/10
                hover:text-indigo-300
              "
              >
                {tag}
              </span>

            ))}

          </div>

        </div>

      </div>
    </div>
  )
);

const SectionHeader = memo(({ title, subtitle, icon: Icon }) => (

  <div className="text-center mb-20" data-aos="zoom-in">

    <div className="inline-flex items-center gap-3 mb-5">

      <CircleDot className="text-indigo-400 w-4 h-4" />

      <span className="uppercase tracking-[5px] text-sm text-gray-400">
        {subtitle}
      </span>

      <CircleDot className="text-violet-400 w-4 h-4" />

    </div>

    <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent flex justify-center items-center gap-4">

      <Icon className="w-11 h-11 text-indigo-400" />

      {title}

    </h1>

  </div>

));

const EDUCATION_DATA = [

  {
    year: "2021 - 2026",

    title: "Bachelor of Information Technology",

    institution: "Universitas Darma Persada",

    location: "Jakarta, Indonesia",

    score: "GPA : 3.62 / 4.00",

    status: "Graduated",

    description:
      "Mempelajari pengembangan perangkat lunak, web development, basis data, UI/UX, machine learning, dan software engineering. Selama masa perkuliahan aktif mengikuti workshop, bootcamp, serta mengembangkan berbagai project berbasis web.",

    tags: [
      "Web Development",
      "Software Engineering",
      "Machine Learning",
      "UI / UX",
      "Database",
      "JavaScript",
      "PHP",
      "React",
      "Laravel",
    ],

    icon: GraduationCap,

    color: "from-indigo-500 to-violet-500",
  },

  {
    year: "2018 - 2021",

    title: "Senior High School",

    institution: "MAN 21 Jakarta",

    location: "Jakarta, Indonesia",

    score: "Average Score : 87.5",

    status: "Graduated",

    description:
      "Aktif mengikuti kegiatan Computer Club dan mulai mengenal dunia pemrograman, desain website, serta teknologi informasi yang menjadi dasar ketertarikan saya pada bidang software development.",

    tags: [
      "Computer Club",
      "Microsoft Office",
      "HTML",
      "CSS",
      "Teamwork",
      "Leadership",
    ],

    icon: GraduationCap,

    color: "from-violet-500 to-indigo-500",
  },
];
const pendidikan = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      id="pendidikan"
      className="
        relative
        overflow-hidden
        py-28
        px-[5%]
        lg:px-[10%]
        text-white
      "
    >
      {/* Background Blur */}
      <BackgroundDecoration />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right,#ffffff 1px,transparent 1px),
            linear-gradient(to bottom,#ffffff 1px,transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Floating Decoration */}
      <div className="absolute top-24 left-16 text-indigo-400/30 animate-pulse">
        <Sparkles size={30} />
      </div>

      <div className="absolute bottom-28 right-16 text-violet-400/30 animate-pulse">
        <Sparkles size={26} />
      </div>

      {/* Header */}
      <SectionHeader
        title="Riwayat Pendidikan"
        subtitle="My Academic Journey"
        icon={GraduationCap}
      />

      {/* Intro */}
      <div
        className="max-w-3xl mx-auto text-center mb-20"
        data-aos="fade-up"
      >
        <p className="text-gray-400 leading-8 text-lg">
          Pendidikan menjadi fondasi utama dalam perjalanan saya sebagai
          seorang profesional di bidang teknologi. Selain memperoleh
          pengetahuan akademik, saya juga aktif mengembangkan keterampilan
          melalui berbagai proyek, workshop, bootcamp, dan pembelajaran
          mandiri.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Line Desktop */}
        <div
          className="
            hidden
            md:block
            absolute
            left-1/2
            -translate-x-1/2
            top-0
            bottom-0
            w-[2px]
            bg-gradient-to-b
            from-indigo-500/40
            via-violet-500/50
            to-transparent
          "
        />

        {EDUCATION_DATA.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>

      {/* Statistics */}
      <div
        className="grid md:grid-cols-3 gap-6 mt-24"
        data-aos="fade-up"
      >
        <div className="rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-md p-6 text-center transition hover:border-indigo-500/40 hover:-translate-y-2 duration-300">
          <h3 className="text-4xl font-bold text-indigo-400">4+</h3>
          <p className="text-gray-400 mt-2">Years Learning Technology</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-md p-6 text-center transition hover:border-indigo-500/40 hover:-translate-y-2 duration-300">
          <h3 className="text-4xl font-bold text-indigo-400">3.62</h3>
          <p className="text-gray-400 mt-2">Final GPA</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-md p-6 text-center transition hover:border-indigo-500/40 hover:-translate-y-2 duration-300">
          <h3 className="text-4xl font-bold text-indigo-400">15+</h3>
          <p className="text-gray-400 mt-2">Academic Projects</p>
        </div>
      </div>

      {/* Quote */}
      <div
        className="mt-24 flex justify-center"
        data-aos="zoom-in"
      >
        <div
          className="
            rounded-full
            border
            border-indigo-500/20
            bg-slate-900/70
            backdrop-blur-md
            px-8
            py-4
            transition-all
            duration-300
            hover:border-indigo-500/50
            hover:-translate-y-1
          "
        >
          <div className="flex items-center gap-3">
            <Sparkles className="text-indigo-400 w-5 h-5" />

            <span className="text-gray-300">
              Learning Never Stops • Keep Growing • Build Better Solutions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(pendidikan);