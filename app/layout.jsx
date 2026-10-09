import './globals.css';

export const metadata = {
  title: 'Aulia Radix Putra Winarko | Software Engineer & Data Specialist',
  description: 'Portofolio Resmi Aulia Radix Putra Winarko - Mahasiswa Teknik Informatika Telkom University Kampus Purwokerto (Semester 7). Full Stack Web Developer & Automation Specialist.',
  keywords: ['Aulia Radix', 'Aulia Radix Putra Winarko', 'Telkom University Purwokerto', 'Teknik Informatika', 'Web Developer', 'Web Scraping', 'Fastwork', 'Next.js'],
  authors: [{ name: 'Aulia Radix Putra Winarko' }],
  openGraph: {
    title: 'Aulia Radix Putra Winarko | Portfolio',
    description: 'Informatics Engineering Student at Telkom University Purwokerto. Web Development, Bot Automation & Data Extraction Specialist.',
    images: ['/images/radix-profile.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-[#090D16] text-[#F1F5F9] antialiased selection:bg-emerald-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
