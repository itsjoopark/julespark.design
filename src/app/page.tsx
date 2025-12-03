export default function Home() {
  return (
    <div className="min-h-screen bg-[#f0efea]">
      {/* Simple centered navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f0efea] pt-[30px] pb-[10px]">
        <div className="flex items-center justify-center gap-[86px] font-normal text-2xl text-black">
          <a href="#work" className="hover:opacity-70 transition-opacity">
            Work
          </a>
          <a href="#about" className="hover:opacity-70 transition-opacity">
            About
          </a>
          <a href="/resume" className="hover:opacity-70 transition-opacity">
            Resume
          </a>
        </div>
      </nav>

      {/* Main content area */}
      <main className="pt-[89px] min-h-screen">
        {/* Content will go here */}
      </main>
    </div>
  );
}
