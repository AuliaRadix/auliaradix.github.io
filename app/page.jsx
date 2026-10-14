'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Code,
  Layout,
  Smartphone,
  Database,
  Cpu,
  Brain,
  Palette,
  ExternalLink,
  Mail,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Building2,
  GraduationCap,
  Sparkles,
  Layers,
  Terminal,
  Send,
  ChevronRight,
  ShieldCheck,
  Star,
  Compass,
  FileCheck2,
  Workflow,
  Menu,
  X
} from 'lucide-react';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.176.2-.351.226-.652.075s-1.27-.468-2.42-1.493c-.894-.797-1.498-1.782-1.674-2.083-.175-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.151-.175.201-.301.301-.501.101-.2.051-.376-.025-.526-.075-.151-.678-1.633-.929-2.235-.244-.587-.492-.507-.678-.516-.176-.009-.376-.009-.577-.009-.201 0-.527.075-.803.376s-1.054 1.028-1.054 2.508c0 1.48 1.079 2.909 1.229 3.11.151.2 2.126 3.246 5.15 4.554.719.311 1.281.497 1.719.636.723.23 1.38.197 1.9-.12.577-.351 1.78-1.48 2.03-2.083.251-.602.251-1.129.176-1.229-.075-.1-.276-.151-.577-.301z"/>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.76.458 3.414 1.258 4.858L2 22l5.302-1.225C8.683 21.56 10.297 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.15c-1.542 0-3.04-.424-4.348-1.228l-.312-.191-3.232.747.76-3.149-.21-.326C3.784 14.633 3.35 13.344 3.35 12c0-4.77 3.88-8.65 8.65-8.65 4.77 0 8.65 3.88 8.65 8.65 0 4.77-3.88 8.65-8.65 8.65z"/>
    </svg>
  );
}

export default function PortfolioV2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryService, setInquiryService] = useState('Web Development');
  const [inquiryMessage, setInquiryMessage] = useState('');

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const text = `Halo Radix, saya ${inquiryName || 'rekan'}.\n\nTertarik mendiskusikan kebutuhan: *${inquiryService}*.\n\nPesan:\n${inquiryMessage || 'Bisa luangkan waktu untuk berdiskusi/meet?'}`;
    const url = `https://wa.me/6285869095921?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Metodologi', href: '#process' },
    { name: 'Sertifikasi', href: '#certifications' },
  ];

  const skillCards = [
    {
      category: 'UI/UX & Creative Suite',
      badge: 'Visual & Motion',
      icon: Palette,
      accent: 'from-purple-500/10 to-indigo-500/10 border-purple-200/60',
      tagColor: 'bg-purple-50 text-purple-700 border-purple-200/80',
      description: 'Perancangan antarmuka berstandar industri dengan estetika humanis, tipografi terukur, serta produksi aset visual, video, dan motion graphics tanpa AI-slop.',
      tools: ['Figma', 'Canva', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe Premiere Pro', 'Adobe After Effects'],
    },
    {
      category: 'Full-Stack Web Engineering',
      badge: 'Scalable Systems',
      icon: Code,
      accent: 'from-blue-500/10 to-cyan-500/10 border-blue-200/60',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200/80',
      description: 'Membangun aplikasi web berperforma tinggi, arsitektur modular, SSR/SSG, autentikasi aman, serta API terstruktur untuk kebutuhan komersial dan pemerintahan.',
      tools: ['Next.js', 'React', 'Laravel (PHP)', 'Tailwind CSS', 'TypeScript', 'RESTful API'],
    },
    {
      category: 'Mobile App Development',
      badge: 'Cross-Platform',
      icon: Smartphone,
      accent: 'from-emerald-500/10 to-teal-500/10 border-emerald-200/60',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
      description: 'Pengembangan aplikasi mobile native & cross-platform untuk Android dan iOS dengan integrasi sensor perangkat, geofencing lokasi, dan manajemen state yang rapi.',
      tools: ['Flutter', 'Dart', 'State Management', 'Geolocation GPS', 'Mobile UI/UX'],
    },
    {
      category: 'Database & Cloud Architecture',
      badge: 'Data Integrity',
      icon: Database,
      accent: 'from-amber-500/10 to-orange-500/10 border-amber-200/60',
      tagColor: 'bg-amber-50 text-amber-700 border-amber-200/80',
      description: 'Perancangan skema relasional, optimasi query berkecepatan tinggi, integrasi Row-Level Security (RLS), dan sinkronisasi real-time cloud database.',
      tools: ['MySQL', 'Supabase', 'PostgreSQL', 'Cloud Storage', 'Data Modeling'],
    },
    {
      category: 'Applied Machine Learning & Vision',
      badge: 'Edge Intelligence',
      icon: Brain,
      accent: 'from-rose-500/10 to-pink-500/10 border-rose-200/60',
      tagColor: 'bg-rose-50 text-rose-700 border-rose-200/80',
      description: 'Implementasi model deteksi objek berkecepatan tinggi dan klasifikasi citra berbobot ringan yang dioptimasi untuk komputasi tepi (edge computing) dan IoT.',
      tools: ['Python', 'YOLO (Object Detection)', 'MobileNetV2', 'OpenCV', 'Data Pipelines'],
    },
  ];

  const experiences = [
    {
      role: 'IT Support & Systems Development Intern',
      institution: 'Bank BTN (Bank Tabungan Negara) KC Pekalongan',
      period: 'Magang Industri',
      badge: 'Perbankan Nasional',
      icon: Building2,
      summary: 'Menganalisis alur pelayanan nasabah dan merancang ekosistem prototipe sistem pengambilan tiket antrean multi-portal (Kiosk Nasabah, Loket Petugas CS/Teller, dan Dashboard Super Admin).',
      points: [
        'Merancang arsitektur antrean 3 sisi untuk memangkas waktu tunggu nasabah di kantor cabang.',
        'Mengembangkan prototype dashboard pemantauan volume dan performa pelayanan petugas secara real-time.',
        'Membantu pemeliharaan dan troubleshooting perangkat keras serta jaringan internal operasional bank.',
      ],
      stack: ['System Architecture', 'Laravel / Web', 'Database Modeling', 'UI/UX Prototype'],
    },
    {
      role: 'Web Developer & IT Infrastructure Intern',
      institution: 'Dinas Komunikasi dan Informatika (Diskominfo) Kota Pekalongan',
      period: 'Magang Pemerintahan',
      badge: 'Pemerintahan Daerah',
      icon: ShieldCheck,
      summary: 'Berkontribusi pada pengembangan sistem informasi kesehatan publik RSUD Bendan Pekalongan serta pemeliharaan modul portal layanan e-government daerah.',
      points: [
        'Mengembangkan modul dashboard pelayanan dan integrasi portal rumah sakit daerah RSUD Bendan.',
        'Melakukan audit antarmuka dan optimasi query basis data MySQL untuk kelancaran akses publik.',
        'Berkoordinasi dengan tim teknis Diskominfo dalam penjaminan stabilitas server dan keamanan aplikasi.',
      ],
      stack: ['Web Development', 'RSUD Bendan System', 'MySQL', 'REST API', 'Public Services'],
    },
    {
      role: 'Mahasiswa S1 Teknik Informatika (Semester 7)',
      institution: 'Telkom University Kampus Purwokerto',
      period: '2023 — Sekarang',
      badge: 'Pendidikan Tinggi',
      icon: GraduationCap,
      summary: 'Fokus mendalami Rekayasa Perangkat Lunak, Arsitektur Sistem Terdistribusi, Internet of Things (IoT), dan Computer Vision untuk penerapan industri nyata.',
      points: [
        'Menjalankan proyek Computing Project: Sistem monitoring mikroklimat dan kontrol pencahayaan greenhouse buah.',
        'Aktif dalam riset perangkat lunak modern, automasi proses, dan rancang bangun web berbasis Next.js.',
        'Berpartisipasi aktif dalam organisasi himpunan mahasiswa dan kepanitiaan festival teknologi nasional.',
      ],
      stack: ['Software Engineering', 'Distributed Systems', 'IoT & Edge AI', 'Next.js'],
    },
  ];

  const projects = [
    {
      title: 'Bank BTN Ticketing Queue Ecosystem (Prototype)',
      category: 'Enterprise Banking Solution',
      repoUrl: 'https://github.com/AuliaRadix/Prototype-Pengambilan-Tiket-BTN-super-admin',
      description: 'Ekosistem antrean digital komprehensif yang dirancang khusus untuk operasional Bank BTN KC Pekalongan. Memisahkan 3 portal: Kiosk Nasabah pencetak tiket, Antarmuka Petugas untuk memanggil nasabah, dan Super Admin untuk analitik trafik.',
      stats: '3 Sub-Sistem Terintegrasi',
      stack: ['Web Architecture', 'PHP / Laravel', 'MySQL', 'Node.js', 'UI/UX Prototyping'],
      highlights: ['Kiosk Touchscreen User', 'Caller Display Petugas', 'Super Admin Analytics'],
    },
    {
      title: 'RSUD Bendan Healthcare & Admin Portal',
      category: 'Public Health & E-Government',
      repoUrl: 'https://github.com/AuliaRadix/RSUD-BENDAN',
      description: 'Platform sistem informasi manajemen rumah sakit RSUD Bendan Kota Pekalongan yang dikembangkan bersama tim Diskominfo Pekalongan. Memudahkan pendataan pelayanan, poliklinik, dan transparansi informasi publik.',
      stats: 'Implementasi Sektor Publik',
      stack: ['Web Enterprise', 'PHP / Laravel', 'MySQL', 'Bootstrap / Tailwind', 'REST API'],
      highlights: ['Manajemen Pasien & Poliklinik', 'Dashboard Petugas', 'Akses Data Publik'],
    },
    {
      title: 'Mobile Abasen — Smart Attendance Platform',
      category: 'Cross-Platform Mobile App',
      repoUrl: 'https://github.com/AuliaRadix/Moblie_Abasen',
      description: 'Aplikasi presensi mobile modern berbasis Flutter dengan pembatasan geolokasi GPS (geofencing) presisi dan validasi identitas instan, meminimalisir manipulasi absensi konvensional.',
      stats: 'Cross-Platform Android & iOS',
      stack: ['Flutter', 'Dart', 'Supabase Cloud', 'Geofencing GPS', 'REST API'],
      highlights: ['Validasi Radius Geofencing', 'Sinkronisasi Real-Time', 'Riwayat Absensi'],
    },
    {
      title: 'Edge Vision & Microclimate Greenhouse System',
      category: 'Applied AI & IoT Engineering',
      repoUrl: 'https://github.com/AuliaRadix',
      description: 'Rancang bangun sistem visi cerdas untuk monitoring intensitas cahaya dan kondisi tanaman greenhouse buah (Computing Project Telkom University). Menggunakan arsitektur MobileNetV2 dan YOLO yang dioptimasi untuk edge device.',
      stats: 'Real-time Edge Inference',
      stack: ['Python', 'YOLO', 'MobileNetV2', 'OpenCV', 'IoT Microcontroller'],
      highlights: ['Deteksi Citra Real-time', 'Monitoring DLI Cahaya', 'Edge Computing Low-power'],
    },
    {
      title: 'Enterprise Web Scraping & Data Pipeline Suite',
      category: 'Automation & Big Data Extraction',
      repoUrl: 'https://github.com/AuliaRadix/web-scraping-and-data-extraction-portfolio',
      description: 'Koleksi pipeline otomasi scraping data web skala besar untuk direktori bisnis dan platform e-commerce dengan proteksi anti-bot, deduplikasi data cerdas, dan format luaran Excel siap olah. Layanan aktif terverifikasi di Fastwork.',
      stats: 'Ribuan Data Terekstraksi Rapi',
      stack: ['Python', 'Asyncio', 'Playwright / Selenium', 'Pandas', 'OpenPyXL'],
      highlights: ['Bypass Cloudflare / Captcha', 'Ekspor Excel Terformat Rapi', 'Webhook Notification'],
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Requirements',
      category: 'Eksplorasi Masalah',
      desc: 'Membedah akar persoalan klien secara objektif. Mengidentifikasi kebutuhan fungsional, batasan infrastruktur, dan sasaran bisnis sebelum menulis kode.',
    },
    {
      step: '02',
      title: 'System Architecture & UX',
      category: 'Rancang Bangun',
      desc: 'Menyusun wireframe humanis di Figma, merancang relasi skema database (MySQL/Supabase), dan mendefinisikan kontrak endpoint REST API.',
    },
    {
      step: '03',
      title: 'Clean-Code Engineering',
      category: 'Pengembangan Tangkas',
      desc: 'Implementasi kode modular dan rapi (Next.js/Laravel/Flutter/Python) yang mematuhi prinsip Clean Code, mudah di-maintain, dan teruji keandalannya.',
    },
    {
      step: '04',
      title: 'Edge-Cases & Optimization',
      category: 'Pengujian Mutu',
      desc: 'Verifikasi skenario ekstrem (edge cases), audit keamanan, optimasi waktu respon query basis data, serta pengujian responsivitas lintas resolusi.',
    },
    {
      step: '05',
      title: 'Deployment & Continuity',
      category: 'Rilis & Pemeliharaan',
      desc: 'Peluncuran ke lingkungan produksi (CI/CD, Cloud/Edge hosting, SSL), penyusunan dokumentasi teknis yang jelas, serta dukungan purna-jual.',
    },
  ];

  const certifications = [
    {
      title: 'Seminar Smart Vision & Generative AI Gen-Z',
      issuer: 'Telkom University & Tech Community',
      type: 'Kecerdasan Buatan & Computer Vision',
      desc: 'Eksplorasi implementasi model visi cerdas, transformer arsitektur, dan deep learning untuk pemrosesan citra generasi baru.',
    },
    {
      title: 'Seminar Teknologi Semikonduktor, AI & Transformasi Sosial',
      issuer: 'Akademik & Asosiasi Industri',
      type: 'Advanced Computing & Hardware AI',
      desc: 'Pemahaman mendalam mengenai arsitektur silikon, efisiensi komputasi hardware, serta implikasi kecerdasan buatan pada industri modern.',
    },
    {
      title: 'Pengurus Himpunan Mahasiswa Informatika (HMIF)',
      issuer: 'Telkom University Purwokerto',
      type: 'Organisasi & Manajemen Proyek',
      desc: 'Kepengurusan aktif dalam tata kelola program kerja mahasiswa, koordinasi teknis tim, dan kepemimpinan kegiatan komputasi kampus.',
    },
    {
      title: 'Panitia Pelaksana INVFEST X ISF (Informatics Festival)',
      issuer: 'Informatics Festival Nasional',
      type: 'Event Management & Tech Exhibition',
      desc: 'Manajemen penyelenggaraan kompetisi teknologi, hackathon mahasiswa, dan pameran inovasi perangkat lunak berskala nasional.',
    },
    {
      title: 'FEST GOWORLD Asia Futurepreneur Program',
      issuer: 'Asia Youth & Futurepreneur Network',
      type: 'Inovasi Digital & Startup',
      desc: 'Program seleksi dan akselerasi ide inovasi berbasis teknologi digital untuk memecahkan problem sosial-ekonomi di kawasan Asia.',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-900">
      {/* Ambient background glows (Glassmorphism backdrop) */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full ambient-glow-1 blur-3xl opacity-70" />
        <div className="absolute top-[30%] -right-40 w-[550px] h-[550px] rounded-full ambient-glow-2 blur-3xl opacity-60" />
        <div className="absolute bottom-10 left-[20%] w-[500px] h-[500px] rounded-full ambient-glow-3 blur-3xl opacity-40" />
      </div>

      {/* Floating Glass Navbar */}
      <header className="fixed top-4 inset-x-0 mx-auto w-[92%] max-w-5xl z-50">
        <nav className="glass-pill px-4 sm:px-6 py-3 rounded-full flex items-center justify-between shadow-glass">
          {/* Logo & Status */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs tracking-wider shadow-sm group-hover:scale-105 transition-transform">
              AR
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                Aulia Radix
              </span>
              <span className="text-[10px] text-slate-500 font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Semester 7 IF • Telkom Univ
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-indigo-600 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTA */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition shadow-sm hover:shadow"
            >
              <span>Hubungi Radix</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-slate-700 hover:bg-slate-100 transition"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="mt-2 glass-panel rounded-2xl p-4 shadow-glass-hover md:hidden flex flex-col gap-2 border border-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-lg transition"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-200/80">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition"
              >
                <span>Mulai Konsultasi</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 pt-28 sm:pt-36 pb-20">
        {/* HERO SECTION */}
        <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50/90 border border-indigo-200/80 text-indigo-700 text-xs font-semibold mb-6 shadow-sm">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Teknik Informatika • Telkom University Purwokerto</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-5">
                Membangun Solusi Digital dengan{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600">
                  Kode Presisi, Desain Humanis, & Kecerdasan Buatan.
                </span>
              </h1>

              {/* Bio Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
                Halo, saya <strong className="text-slate-900 font-semibold">Aulia Radix Putra Winarko</strong>. Mahasiswa semester 7 yang menggabungkan keahlian <em>Full-Stack Web (Next.js & Laravel)</em>, <em>Mobile (Flutter)</em>, estetika desain visual kreatif, serta penerapan <em>Machine Learning (YOLO & MobileNet)</em>. Berpengalaman magang di <strong className="text-slate-900 font-semibold">Bank BTN KC Pekalongan</strong> dan <strong className="text-slate-900 font-semibold">Diskominfo Kota Pekalongan</strong>.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition shadow-glass hover:shadow-glass-hover"
                >
                  <span>Jelajahi Proyek</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/6285869095921?text=Halo%20Radix,%20saya%20tertarik%20berdiskusi%20mengenai%20proyek%20atau%20kerja%20sama"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/80 border border-slate-300/80 text-slate-700 font-semibold text-sm hover:bg-white hover:text-emerald-700 hover:border-emerald-300 transition shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Diskusi WhatsApp</span>
                </a>

                <a
                  href="https://github.com/AuliaRadix"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white/80 border border-slate-300/80 text-slate-700 font-medium text-sm hover:bg-white hover:text-slate-900 transition shadow-sm"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/90 w-full max-w-xl">
                <div>
                  <div className="text-2xl font-bold text-slate-900">2x</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Magang Industri & Pemerintahan</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-600">15+</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Repositori & Prototipe Sistem</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">Top-Rated</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Layanan Terverifikasi Fastwork</div>
                </div>
              </div>
            </div>

            {/* Right Hero Card with Glass Chips */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Main Glass Photo Container */}
                <div className="glass-panel rounded-3xl p-3 sm:p-4 shadow-glass border border-slate-200/90 relative z-10">
                  <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
                    <Image
                      src="/images/radix-profile.jpg"
                      alt="Aulia Radix Putra Winarko"
                      fill
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-3 left-3 right-3 glass-pill p-3 rounded-xl border border-white/40 shadow-sm text-slate-900">
                      <div className="font-semibold text-xs tracking-tight">Aulia Radix Putra Winarko</div>
                      <div className="text-[11px] text-slate-600">Full-Stack Developer & Creative Technologist</div>
                    </div>
                  </div>
                </div>

                {/* Floating Chip 1: Bank BTN */}
                <div className="absolute -top-4 -left-4 sm:-left-6 z-20 glass-pill px-3.5 py-2.5 rounded-2xl shadow-glass flex items-center gap-3 border border-white/80">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Eks-Magang</div>
                    <div className="text-xs font-semibold text-slate-800">Bank BTN KC Pekalongan</div>
                  </div>
                </div>

                {/* Floating Chip 2: Diskominfo */}
                <div className="absolute -bottom-5 -right-3 sm:-right-5 z-20 glass-pill px-3.5 py-2.5 rounded-2xl shadow-glass flex items-center gap-3 border border-white/80">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Eks-Magang</div>
                    <div className="text-xs font-semibold text-slate-800">Diskominfo Pekalongan</div>
                  </div>
                </div>

                {/* Floating Chip 3: ML Vision */}
                <div className="hidden sm:flex absolute top-[48%] -left-8 z-20 glass-pill px-3 py-2 rounded-xl shadow-glass items-center gap-2 border border-white/80">
                  <div className="w-6 h-6 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                    <Brain className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[11px] font-semibold text-slate-800">YOLO & MobileNet AI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST & INSTITUTION BAR */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="glass-panel rounded-2xl px-6 py-5 shadow-sm border border-slate-200/80">
            <div className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              Lembaga, Industri & Platform Kolaborasi
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center justify-items-center text-center">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 py-1">
                <Building2 className="w-4 h-4 text-blue-600" />
                <span>Bank BTN Pekalongan</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 py-1">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                <span>Diskominfo Pekalongan</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 py-1">
                <GraduationCap className="w-4 h-4 text-red-600" />
                <span>Telkom University</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 py-1">
                <Star className="w-4 h-4 text-amber-500" />
                <span>Fastwork Indonesia</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 py-1">
                <GithubIcon className="w-4 h-4 text-slate-900" />
                <span>GitHub Open Source</span>
              </div>
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE & INTERNSHIPS */}
        <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Rekam Jejak Profesional</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Pengalaman Kerja & Studi
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Kombinasi pengalaman riil di lingkungan perbankan nasional, tata kelola sistem pemerintahan, dan pendidikan tinggi informatika.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((exp, idx) => {
              const IconComp = exp.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between shadow-glass relative border border-slate-200/90"
                >
                  <div>
                    {/* Header Card */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
                        <IconComp className="w-5 h-5 text-indigo-300" />
                      </div>
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="font-bold text-lg text-slate-900 leading-snug mb-1">
                      {exp.role}
                    </h3>
                    <div className="text-xs font-semibold text-indigo-600 mb-4">
                      {exp.institution}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {exp.summary}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-2 mb-6">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="text-[11px] text-slate-600 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack Badges */}
                  <div className="pt-4 border-t border-slate-200/80 flex flex-wrap gap-1.5">
                    {exp.stack.map((stk, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200/60"
                      >
                        {stk}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SKILLS ARSENAL (BENTO GRID) */}
        <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Kompetensi Teknis</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Keahlian & Toolset Teruji
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Penguasaan perkakas desain, kerangka kerja rekayasa web/mobile modern, database relasional, dan applied machine learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCards.map((skill, idx) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={idx}
                  className={`glass-panel glass-panel-hover rounded-2xl p-6 shadow-glass flex flex-col justify-between border ${idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
                        <IconComponent className="w-5 h-5 text-indigo-300" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                        {skill.badge}
                      </span>
                    </div>

                    <h3 className="font-bold text-base text-slate-900 mb-2">
                      {skill.category}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-5">
                      {skill.description}
                    </p>
                  </div>

                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                      Alat & Teknologi
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className={`text-xs font-medium px-2.5 py-1 rounded-lg border ${skill.tagColor}`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FEATURED PROJECTS SHOWCASE */}
        <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Karya Nyata & Portofolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Proyek Pilihan & Sistem Riil
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Arsitektur aplikasi dan sistem perangkat lunak yang dibangun untuk menjawab tantangan operasional perbankan, instansi publik, dan kebutuhan komersial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 shadow-glass flex flex-col justify-between border border-slate-200/90 relative group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                      {proj.category}
                    </span>
                    <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {proj.stats}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {proj.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6 space-y-1.5">
                    {proj.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="text-xs text-slate-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.stack.map((item, iIdx) => (
                      <span
                        key={iIdx}
                        className="text-[10px] font-medium px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href={proj.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Buka Repositori Proyek di GitHub</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5-STEP PROCESS SECTION */}
        <section id="process" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-3">
              <Workflow className="w-3.5 h-3.5" />
              <span>Metodologi Kerja</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              5 Tahap Rekayasa & Desain
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Pendekatan terstruktur dari penemuan masalah, arsitektur sistem, eksekusi kode bersih, hingga peluncuran produksi yang aman.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((stepItem, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-5 shadow-glass flex flex-col justify-between border border-slate-200/90 relative"
              >
                <div>
                  <div className="text-2xl font-extrabold text-indigo-600/40 mb-3 font-mono">
                    {stepItem.step}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    {stepItem.category}
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 mb-2 leading-snug">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {stepItem.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATES & MILESTONES */}
        <section id="certifications" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold mb-3">
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Sertifikasi & Kredensial</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Sertifikat & Rekam Prestasi
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Sertifikasi seminar teknologi, kecerdasan buatan, rekam jejak kepengurusan organisasi, dan kepanitiaan festival teknologi informasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-6 shadow-glass flex flex-col justify-between border border-slate-200/90"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      {cert.type}
                    </span>
                    <FileCheck2 className="w-4 h-4 text-amber-500" />
                  </div>

                  <h3 className="font-bold text-base text-slate-900 mb-1.5 leading-snug">
                    {cert.title}
                  </h3>

                  <div className="text-xs font-semibold text-slate-500 mb-3">
                    {cert.issuer}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Kredensial Terverifikasi</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INTERACTIVE INQUIRY & CONTACT SECTION */}
        <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 scroll-mt-24">
          <div className="glass-panel rounded-3xl p-6 sm:p-10 shadow-glass border border-slate-200/90 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Direct channels */}
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-4">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Mari Terhubung & Berdiskusi</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                  Siap Membantu Proyek Perangkat Lunak & Desain Anda
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Terbuka untuk peluang kerja sama magang lanjutan, *freelance* pengembangan aplikasi web/mobile, sistem data pipeline, maupun proyek riset machine learning.
                </p>

                <div className="space-y-3 mb-8">
                  <a
                    href="https://wa.me/6285869095921?text=Halo%20Radix,%20saya%20tertarik%20berdiskusi%20mengenai%20proyek..."
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/80 border border-slate-200/80 hover:border-emerald-300 hover:bg-white transition text-slate-800 shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">WhatsApp Langsung</div>
                      <div className="text-xs font-bold text-slate-800">+62 858-6909-5921</div>
                    </div>
                  </a>

                  <a
                    href="mailto:auliaradix10@gmail.com"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/80 border border-slate-200/80 hover:border-indigo-300 hover:bg-white transition text-slate-800 shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Email Korespondensi</div>
                      <div className="text-xs font-bold text-slate-800">auliaradix10@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="https://fastwork.id/user/auliaradix"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/80 border border-slate-200/80 hover:border-amber-300 hover:bg-white transition text-slate-800 shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                      <Star className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Layanan Terverifikasi</div>
                      <div className="text-xs font-bold text-slate-800">Fastwork Indonesia (Profil Aulia Radix)</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Column: Instant WhatsApp Pre-filler */}
              <div className="lg:col-span-6">
                <form
                  onSubmit={handleWhatsAppSend}
                  className="bg-white/95 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm"
                >
                  <h3 className="font-bold text-base text-slate-900 mb-1">
                    Kirim Pesan WhatsApp Cepat
                  </h3>
                  <p className="text-xs text-slate-500 mb-5">
                    Isi form singkat ini untuk otomatis memformat pesan WhatsApp Anda ke Radix.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Nama / Instansi Anda
                      </label>
                      <input
                        type="text"
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="Contoh: Danang (PT Solusi Teknologi)"
                        required
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Kebutuhan Layanan
                      </label>
                      <select
                        value={inquiryService}
                        onChange={(e) => setInquiryService(e.target.value)}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                      >
                        <option value="Full-Stack Web Development (Next.js / Laravel)">Full-Stack Web (Next.js / Laravel)</option>
                        <option value="Mobile App Development (Flutter)">Mobile App (Flutter)</option>
                        <option value="Data Scraping & Pipeline Automation">Data Scraping & Automasi</option>
                        <option value="Applied Machine Learning & Edge Vision">Machine Learning & Computer Vision</option>
                        <option value="UI/UX & Creative Digital Asset">UI/UX & Desain Kreatif</option>
                        <option value="Diskusi Kolaborasi Lainnya">Diskusi Kolaborasi Lainnya</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Ringkasan Pesan / Kebutuhan
                      </label>
                      <textarea
                        rows={3}
                        value={inquiryMessage}
                        onChange={(e) => setInquiryMessage(e.target.value)}
                        placeholder="Jelaskan kebutuhan ringkas atau ajakan jadwal diskusi..."
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition shadow-sm hover:shadow"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Kirim Langsung ke WhatsApp</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200/80 bg-white/60 backdrop-blur-md py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900">Aulia Radix Putra Winarko</span>
            <span>•</span>
            <span>Telkom University Kampus Purwokerto</span>
          </div>
          <div>
            Portofolio v2 • Didesain dengan estetika modern glassmorphism (Anti-AI Slop).
          </div>
        </div>
      </footer>
    </div>
  );
}
