import React, { memo, useEffect } from "react";
import {
  Calendar,
  MapPin,
  BriefcaseBusiness,
  Sparkles,
  CircleDot,
} from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

const BackgroundDecoration = () => (
  <>
    <div className="absolute -top-40 -left-40 w-[350px] h-[350px] bg-indigo-500/20 blur-[150px] rounded-full" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[170px] rounded-full" />
  </>
);

const TimelineItem = memo(
  ({
    year,
    title,
    institution,
    description,
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
      } gap-6 mb-16 relative`}
      data-aos="fade-up"
      data-aos-duration="900"
    >
      {/* Left */}
      <div className="flex-1"></div>

      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div
          className={`
          group
          w-14
          h-14
          rounded-full
          flex
          items-center
          justify-center
          bg-gradient-to-br
          ${color}
          shadow-xl
          transition-all
          duration-500
          hover:scale-110
          hover:rotate-6
        `}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>

        <div className="relative w-[3px] flex-1 bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent mt-3 overflow-hidden">
          <div className="absolute inset-0 animate-pulse bg-white/30 blur-md"></div>
        </div>
      </div>

      {/* Card */}
      <div className="flex-1 group relative">

        {/* Animated Border */}
       

        <div
className="
relative
overflow-hidden
rounded-3xl
border
border-white/10
bg-[#111827]/70
backdrop-blur-md
p-7
transition-all
duration-300
hover:-translate-y-2
hover:border-indigo-500/40
hover:shadow-xl
"
>
          {/* Shine */}
          <span
            className="
            absolute
            inset-0
            -translate-x-full
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
            group-hover:translate-x-full
            transition-transform
            duration-1000
          "
          ></span>

          {/* Number */}
          <div className="absolute top-4 right-5 text-6xl font-black text-white/5 select-none">
            {year.slice(-2)}
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
            <Calendar size={16} />
            {year}

            <span
              className={`ml-auto px-3 py-1 rounded-full text-xs font-semibold ${
                status === "Current"
                  ? "bg-green-500/20 text-green-400 border border-green-400/20"
                  : "bg-slate-700/20 text-slate-300 border border-slate-500/20"
              }`}
            >
              {status}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-white">{title}</h2>

          <p className="text-indigo-300 mt-1">{institution}</p>

          <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
            <MapPin size={15} />
            {location}
          </div>

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
                bg-white/5
                border
                border-white/10
                text-xs
                text-gray-300
                transition-all
                duration-300
                hover:bg-indigo-500/20
                hover:border-indigo-400
                hover:text-white
                hover:scale-105
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
      <span className="uppercase tracking-[6px] text-sm text-gray-400">
        {subtitle}
      </span>
      <CircleDot className="text-violet-400 w-4 h-4" />
    </div>

    <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent flex justify-center items-center gap-4">
      <Icon className="text-indigo-400 w-12 h-12" />
      {title}
    </h1>
  </div>
));

const CAREER_DATA = [
  {
    year: "March 2026 - Present",
    title: "Quality Assurance Tester",
    institution: "PT. Infovesta Utama",
    location: "Jakarta • Work From Office",
    status: "Current",
    description:
      "Melakukan pengujian manual dan otomatis pada aplikasi web, menyusun test case, melakukan API Testing, Regression Testing, Smoke Testing, serta berkolaborasi dengan Developer dan Business Analyst untuk memastikan kualitas aplikasi sebelum dirilis kepada pengguna.",
    tags: [
      "Manual Testing",
      "Automation",
      "Playwright",
      "Postman",
      "API Testing",
      "SQL",
      "Git",
      "Regression",
      "Smoke Testing",
    ],
    icon: BriefcaseBusiness,
    color: "from-indigo-500 to-violet-500",
  },

  {
    year: "Sep 2024 - Nov 2024",
    title: "Web Developer",
    institution: "Pusat Data dan Informasi Kementerian Pertahanan RI",
    location: "Jakarta • Work From Office",
    status: "Completed",
    description:
      "Mengembangkan sistem pelaporan kinerja pegawai berbasis web menggunakan PHP, Bootstrap, JavaScript dan MySQL. Bertanggung jawab pada implementasi fitur, perbaikan bug, optimasi database serta integrasi sistem sesuai kebutuhan pengguna.",
    tags: [
      "PHP",
      "Bootstrap",
      "JavaScript",
      "MySQL",
      "Git",
      "REST API",
      "CRUD",
      "Responsive UI",
    ],
    icon: BriefcaseBusiness,
    color: "from-violet-500 to-indigo-500",
  },
];

const Pengalaman = () => {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      id="Pengalaman"
      className="
        relative
        overflow-hidden
        py-28
        px-[5%]
        lg:px-[10%]
        text-white
      "
    >

      {/* Background */}
      <BackgroundDecoration />

      {/* Grid Background */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          pointer-events-none
        "
        style={{
          backgroundImage: `
            linear-gradient(to right,#ffffff 1px,transparent 1px),
            linear-gradient(to bottom,#ffffff 1px,transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Floating Blur */}
      <div className="absolute top-20 right-10 w-52 h-52 rounded-full bg-indigo-500/10 blur-[120px] animate-pulse"></div>

      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-violet-500/10 blur-[160px] animate-pulse"></div>

      {/* Sparkle */}
      <div
        className="
          absolute
          top-28
          left-[12%]
          animate-bounce
          text-indigo-400/30
        "
      >
        <Sparkles size={34} />
      </div>

      <div
        className="
          absolute
          bottom-40
          right-[15%]
          animate-pulse
          text-violet-400/30
        "
      >
        <Sparkles size={28} />
      </div>

      {/* Header */}
      <SectionHeader
        title="Perjalanan Karir"
        subtitle="My Professional Experience"
        icon={BriefcaseBusiness}
      />

      {/* Intro */}
      <div
        className="max-w-3xl mx-auto text-center mb-20"
        data-aos="fade-up"
      >
        <p className="text-gray-400 leading-8 text-lg">
          Perjalanan profesional saya dimulai dari dunia pengembangan
          aplikasi web hingga saat ini berfokus pada bidang
          <span className="text-indigo-400 font-semibold">
            {" "}
            Quality Assurance
          </span>
          . Setiap pengalaman memberikan wawasan baru mengenai software
          development lifecycle, kolaborasi tim, serta pentingnya menjaga
          kualitas produk sebelum sampai kepada pengguna.
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
        ></div>

        {CAREER_DATA.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>

      {/* Bottom Quote */}
      <div
        className="mt-24 text-center"
        data-aos="zoom-in"
      >

        <div
          className="
            inline-flex
            items-center
            gap-3
            px-7
            py-4
            rounded-full
            border
            border-indigo-500/20
            bg-white/5
            backdrop-blur-xl
            hover:scale-105
            transition-all
            duration-500
            hover:border-indigo-400
          "
        >

          <Sparkles className="text-indigo-400 w-5 h-5" />

          <span className="text-gray-300 text-sm md:text-base">
            Always Learning • Always Improving • Delivering Quality Software
          </span>

        </div>

      </div>

    </section>
  );
};

export default memo(Pengalaman);