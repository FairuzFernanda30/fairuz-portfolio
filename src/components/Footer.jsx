import { heroData } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#10172A] py-7">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p>
          &copy; {new Date().getFullYear()} {heroData.name}. All rights reserved.
        </p>
        <a
          href="#home"
          className="font-medium text-slate-300 hover:text-[#4361EE] transition-colors"
        >
          Back to top &uarr;
        </a>
      </div>
    </footer>
  );
}
