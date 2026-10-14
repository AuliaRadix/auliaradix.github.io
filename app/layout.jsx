import './globals.css';

export const metadata = {
  metadataBase: new URL('https://auliaradix.github.io'),
  title: 'Aulia Radix Putra Winarko — Full-Stack Developer & Creative Technologist',
  description: 'Portofolio resmi Aulia Radix Putra Winarko — Mahasiswa S1 Teknik Informatika Telkom University Kampus Purwokerto (Semester 7). Spesialis Full-Stack Web (Next.js & Laravel), Mobile (Flutter), Creative UI/UX Design, dan Applied Machine Learning (YOLO & MobileNet).',
  keywords: [
    'Aulia Radix Putra Winarko',
    'Aulia Radix',
    'Portofolio Aulia Radix',
    'Telkom University Purwokerto',
    'Teknik Informatika Telkom Purwokerto',
    'Magang Bank BTN Pekalongan',
    'Magang Diskominfo Pekalongan',
    'Web Developer Purwokerto',
    'Next.js Developer Indonesia',
    'Laravel Developer',
    'Flutter Developer',
    'Machine Learning YOLO'
  ],
  authors: [{ name: 'Aulia Radix Putra Winarko' }],
  openGraph: {
    title: 'Aulia Radix Putra Winarko — Full-Stack Developer & Creative Technologist',
    description: 'Mahasiswa Teknik Informatika Telkom University Kampus Purwokerto. Eks-Magang Bank BTN & Kominfo Pekalongan.',
    url: 'https://auliaradix.github.io',
    siteName: 'Aulia Radix Portfolio',
    images: [
      {
        url: '/images/radix-profile.jpg',
        width: 800,
        height: 1000,
        alt: 'Aulia Radix Putra Winarko',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F8FAFC] text-slate-900 antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
