import React, { useEffect, useState, memo, useMemo } from "react";
import {
  FileText,
  Code,
  Award,
  Globe,
  ArrowUpRight,
  Sparkles,
  UserCheck,
  GraduationCap,
  BriefcaseBusiness,
  Calendar,
  MapPin,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const TimelineItem = memo(({ year, title, institution, description, score, location, isLeft, icon: Icon, color }) => (
  <div className={`flex flex-col md:flex-row ${isLeft ? 'md:flex-row-reverse' : ''} gap-4 mb-12`} data-aos="fade-up">
    <div className="flex-1" />
    <div className="flex flex-col items-center">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 bg-gradient-to-br ${color} shadow-lg`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="w-1 h-full bg-gradient-to-b from-[#6366f1] via-[#a855f7] to-transparent mt-2" />
    </div>
    <div className="flex-1">
      <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
        <div className="flex items-center gap-2 mb-2 text-gray-300 text-sm">
          <Calendar className="w-4 h-4" />
          <span>{year}</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
        <p className="text-lg text-[#818cf8] mb-2">{institution}</p>
        {score && (
          <div className="mb-4">
            <span className="px-3 py-1 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-full">
              {score}
            </span>
          </div>
        )}
        {location && (
          <div className="flex items-center gap-1 text-gray-400 text-sm mb-3">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        )}
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
));

const SectionHeader = memo(({ title, subtitle, icon: Icon }) => (
  <div className="text-center mb-12 px-[5%]" data-aos="zoom-in">
    <div className="inline-flex items-center gap-2 mb-4">
      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7]" />
      <span className="text-sm text-gray-400 uppercase tracking-widest">{subtitle}</span>
      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#a855f7] to-[#6366f1]" />
    </div>
    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] flex items-center justify-center gap-3">
      <Icon className="w-10 h-10 text-[#818cf8]" />
      {title}
    </h2>
  </div>
));

const EDUCATION_DATA = [
  {
    year: "2021 - 2026",
    title: "S1 Teknologi Informasi",
    institution: "Universitas Darma Persada",
    location: "Jakarta, Indonesia",
    score: "IPK : 3.62",
    description: "Menekuni bidang Teknik Informatika dengan fokus pada pengembangan web, khususnya Front-End Developer. Aktif mengikuti berbagai workshop dan course untuk meningkatkan keterampilan.",
    icon: GraduationCap,
    color: "from-[#6366f1] to-[#818cf8]"
  },
  {
    year: "2018 - 2021",
    title: "Madrasah Aliyah Negeri 21 Jakarta",
    institution: "Jurusan IPS",
    location: "Jakarta, Indonesia",
    score: "Nilai Rata-rata: 87.5",
    description: "Semasa sekolah saya fokus mengikuti kegiatan berkaitan dengan teknologi diantaranya saya mengikuti sebuah ekstrakurikuler Computer Club dan Aktif di kegiatan tersebut.",
    icon: GraduationCap,
    color: "from-[#a855f7] to-[#818cf8]"
  }
];

const Pendidikan = () => {
  return (
    <div className="text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-24" id="Pendidikan">
      <SectionHeader 
        title="Riwayat Pendidikan" 
        subtitle="My Academic Journey" 
        icon={GraduationCap} 
      />
      <div className="max-w-4xl mx-auto">
        {EDUCATION_DATA.map((item, index) => (
          <TimelineItem 
            key={index} 
            {...item} 
            isLeft={index % 2 === 0} 
          />
        ))}
      </div>
    </div>
  );
};

export default memo(Pendidikan);