import Image from 'next/image';
import { 
  Code2, 
  Database, 
  Bot, 
  Globe, 
  Award, 
  GraduationCap, 
  MapPin, 
  ExternalLink, 
  Mail, 
  CheckCircle2, 
  Terminal,
  Layers,
  ArrowUpRight
} from 'lucide-react';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const SKILLS = [
  { name: 'JavaScript / TypeScript', category: 'Frontend & Backend', level: '90%' },
  { name: 'Next.js & React', category: 'Modern Web Framework', level: '88%' },
  { name: 'Python & Web Scraping', category: 'Automation & Data', level: '92%' },
  { name: 'Tailwind CSS & Modern UI', category: 'Styling & Design', level: '90%' },
  { name: 'Node.js & Express', category: 'Backend & REST API', level: '85%' },
  { name: 'SQL & Database Architecture', category: 'Data Management', level: '82%' },
];

const PROJECTS = [
  {
    title: 'Web Scraping & Data Extraction Suite',
    category: 'Python • Data Pipeline • OpenPyXL',
    description: 'Pipeline ekstraksi data berskala besar untuk e-commerce dan direktori bisnis dengan deduplikasi cerdas, rate-limiting, dan export Excel (.xlsx) dengan custom corporate styling.',
    repo: 'https://github.com/AuliaRadix/web-scraping-and-data-extraction-portfolio',
    badge: 'Production Ready',
    stars: 'Python Suite',
  },
  {
    title: 'Sistem Informasi & Admin RSUD Bendan',
    category: 'Full Stack • Public Health Service',
    description: 'Arsitektur web portal administrasi dan layanan publik RSUD Bendan dengan modul manajemen pengguna dan tampilan responsif.',
    repo: 'https://github.com/AuliaRadix/ADMIN-RSUD-BENDAN',
    badge: 'Enterprise Project',
    stars: 'Web Portal',
  },
  {
    title: 'Prototype Pengambilan Tiket Antrean BTN',
    category: 'Fintech • Multi-Role Architecture',
    description: 'Sistem alur antrean nasabah perbankan berbasis web dengan pembagian peran user, petugas counter, dan super admin secara real-time.',
    repo: 'https://github.com/AuliaRadix/Prototype-Pengambilan-Tiket-BTN-super-admin',
    badge: 'Banking System',
    stars: 'Multi-Role',
  },
  {
    title: 'Moblie Abasen (Sistem Presensi Kampus)',
    category: 'Mobile Development • Flutter / Dart',
    description: 'Aplikasi mobile presensi mahasiswa dengan validasi identitas, rekap kehadiran terstruktur, dan interface modern.',
    repo: 'https://github.com/AuliaRadix/Moblie_Abasen',
    badge: 'Mobile App',
    stars: 'Dart / Mobile',
  },
];

const CERTIFICATES = [
  { title: 'Seminar Teknologi Semikonduktor, AI & Transformasi Sosial', issuer: 'Akademik & Riset', year: '2026' },
  { title: 'Pengurus Himpunan Mahasiswa Informatika (HMIF)', issuer: 'Telkom University Kampus Purwokerto', year: '2025' },
  { title: 'FEST GOWORLD Asia Futurepreneur Selection Program', issuer: 'GoWorld International', year: '2023' },
  { title: 'Future Entrepreneur Summit', issuer: 'Global Entrepreneurship', year: '2023' },
  { title: 'Panitia Pelaksana INVFEST X ISF', issuer: 'HMIF Telkom University', year: '2024' },
  { title: 'Seminar Smart Vision & Generative AI Gen-Z', issuer: 'Teknologi AI & Komputasi', year: '2025' },
  { title: 'Webinar Persiapan Karir Alumni Bercerita', issuer: 'Career Development Center', year: '2025' },
  { title: 'Webinar Literasi Keuangan Digital', issuer: 'Edukasi Fintech & Keuangan', year: '2025' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090D16] text-[#F1F5F9] relative overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#090D16]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-sm tracking-wide text-white">Aulia Radix</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            <a href="#about" className="hover:text-white transition">Tentang</a>
            <a href="#projects" className="hover:text-white transition">Proyek</a>
            <a href="#services" className="hover:text-white transition">Layanan</a>
            <a href="#credentials" className="hover:text-white transition">Sertifikasi</a>
          </nav>

          <a
            href="https://fastwork.id/user/auliaradix"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition flex items-center gap-1.5"
          >
            <span>Hire on Fastwork</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Bio Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>Mahasiswa S1 Teknik Informatika (Semester 7)</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Aulia Radix <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Putra Winarko
              </span>
            </h1>

            <p className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed">
              Software Engineer & Automation Specialist berbasis di Purwokerto, Indonesia. Membangun aplikasi web performa tinggi, bot otomasi alur kerja, dan pipeline ekstraksi data berskala besar.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 pt-2">
              <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Telkom University Kampus Purwokerto</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Teknik Informatika (IF)</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="https://github.com/AuliaRadix"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-slate-200 transition flex items-center gap-2 shadow-lg shadow-white/10"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Kunjungi GitHub (@AuliaRadix)</span>
              </a>
              <a
                href="https://fastwork.id/user/auliaradix"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-sm hover:bg-emerald-500/20 transition flex items-center gap-2"
              >
                <span>Lihat Portofolio Fastwork</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Portrait Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-700" />
              <div className="relative rounded-2xl overflow-hidden bg-[#101726] border border-white/10 p-2 shadow-2xl">
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/radix-profile.jpg"
                    alt="Aulia Radix Putra Winarko"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center grayscale-[15%] hover:grayscale-0 transition duration-500"
                    priority
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold text-sm">Aulia Radix</h3>
                    <p className="text-xs text-slate-400">Telkom University Purwokerto</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-medium text-emerald-400">
                    Active Dev
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies & Skills */}
      <section className="border-y border-white/5 bg-[#0D121F]/60 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">Technical Mastery</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Tech Stack & Spesialisasi</h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Fokus pada kode yang bersih, arsitektur modular, efisiensi eksekusi, dan pengalaman antarmuka yang ramah pengguna.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SKILLS.map((skill, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-white">{skill.name}</span>
                  <span className="text-xs font-mono text-emerald-400">{skill.level}</span>
                </div>
                <p className="text-xs text-slate-400 mb-3">{skill.category}</p>
                <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" style={{ width: skill.level }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">Showcase & Repositories</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Karya & Proyek Terpilih</h2>
          </div>
          <a
            href="https://github.com/AuliaRadix"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-slate-400 hover:text-white transition flex items-center gap-1"
          >
            <span>Buka seluruh repositori di GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((proj, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-gradient-to-b from-[#111827]/80 to-[#0B0F19] border border-white/5 hover:border-emerald-500/40 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/5 text-slate-300 border border-white/5">
                    {proj.badge}
                  </span>
                  <span className="text-xs text-emerald-400 font-mono">{proj.stars}</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition mb-2">
                  {proj.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400/80 mb-3">{proj.category}</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <a
                  href={proj.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition flex items-center gap-1.5"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Lihat Source Code</span>
                </a>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section (Sync with Fastwork) */}
      <section id="services" className="bg-[#0B0F19] border-y border-white/5 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">Client Services</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Layanan Profesional</h2>
            <p className="text-sm text-slate-400">
              Layanan digital terverifikasi yang tersedia langsung untuk dipesan melalui platform Fastwork Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">Web Scraping & Ekstraksi Data</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Pengambilan data produk, direktori bisnis, Google Maps, dan pasar publik ke format Excel (.xlsx) / CSV rapi dan bergaransi.
                </p>
              </div>
              <a
                href="https://fastwork.id/user/auliaradix/data-scraping-81918687"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-400 flex items-center gap-1 hover:underline"
              >
                <span>Pesan Jasa di Fastwork</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-5">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">Bot Otomasi Telegram & WA</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Otomatisasi pesan notifikasi sistem, auto-reply chat interaktif, sinkronisasi webhook, dan integrasi Google Sheets 24/7.
                </p>
              </div>
              <a
                href="https://fastwork.id/user/auliaradix/chatbot-71531601"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-cyan-400 flex items-center gap-1 hover:underline"
              >
                <span>Pesan Jasa di Fastwork</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-5">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">Landing Page Modern & Cepat</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Desain halaman bisnis responsif, anti-AI slop, mobile-first, dan loading di bawah 1 detik dengan CTA terhubung langsung ke WhatsApp.
                </p>
              </div>
              <a
                href="https://fastwork.id/user/auliaradix/apps-design-13733451"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-amber-400 flex items-center gap-1 hover:underline"
              >
                <span>Pesan Jasa di Fastwork</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Organization */}
      <section id="credentials" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">Verified Experience</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Sertifikasi & Rekam Jejak</h2>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            Arsip resmi kegiatan akademik, kepanitiaan, kompetisi kewirausahaan, dan seminar teknologi terverifikasi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CERTIFICATES.map((cert, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white leading-snug">{cert.title}</h4>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                  <span>{cert.issuer}</span>
                  <span>•</span>
                  <span className="font-mono text-emerald-400">{cert.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#070A11] py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-sm">Aulia Radix Putra Winarko</h3>
            <p className="text-xs text-slate-400 mt-1">
              S1 Teknik Informatika • Telkom University Kampus Purwokerto
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="https://github.com/AuliaRadix" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-1.5">
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a href="https://fastwork.id/user/auliaradix" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-1.5">
              <ExternalLink className="w-4 h-4" />
              <span>Fastwork</span>
            </a>
          </div>

          <p className="text-xs text-slate-500 font-mono">
            © 2026 Aulia Radix. Crafted with Next.js & Tailwind.
          </p>
        </div>
      </footer>
    </main>
  );
}
