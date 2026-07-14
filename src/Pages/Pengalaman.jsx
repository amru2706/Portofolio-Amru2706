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

const CAREER_DATA = [
  {
    year: "March 2026 - Present",
    title: "Quality Assurance Tester",
    institution: "PT. Infovesta Utama",
    location: "Work From Office",
    description: "Melakukan pengujian manual dan otomatis pada berbagai aplikasi web untuk memastikan kualitas produk sebelum dirilis ke pengguna.",
    icon: BriefcaseBusiness,
    color: "from-[#6366f1] to-[#a855f7]"
  },
  {
    year: "Sep 2024 - Nov 2024",
    title: "Web Developer",
    institution: "Pusat Data dan Informasi Kementerian Pertahanan RI",
    location: "Work From Office",
    description: "example",
    icon: BriefcaseBusiness,
    color: "from-[#a855f7] to-[#6366f1]"
  }
];

const Pengalaman = () => {
  return (
    <div className="text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-24" id="Pengalaman">
      <SectionHeader 
        title="Perjalanan Karir" 
        subtitle="My Professional Experience" 
        icon={BriefcaseBusiness} 
      />
      <div className="max-w-4xl mx-auto">
        {CAREER_DATA.map((item, index) => (
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

export default memo(Pengalaman);