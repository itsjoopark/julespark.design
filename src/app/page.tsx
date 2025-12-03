import { Header, Footer, Section } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Section className="pt-16 sm:pt-20 lg:pt-32 pb-16 sm:pb-20 lg:pb-32">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6">
              Product Designer
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl text-foreground/70 leading-relaxed max-w-2xl">
              Crafting digital experiences that blend form and function. 
              Currently designing products that make a difference.
            </p>
          </div>
        </Section>

        {/* Work Grid Section */}
        <Section id="work">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold mb-8 sm:mb-12 lg:mb-16">
            Selected Work
          </h2>
          
          {/* Responsive grid: 1 col mobile, 2 cols tablet & desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* Project Card 1 */}
            <article className="group">
              <div className="aspect-[4/3] bg-foreground/5 rounded-lg sm:rounded-xl lg:rounded-2xl mb-4 sm:mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-foreground/30">
                  <span className="text-sm">Project Image</span>
                </div>
              </div>
              <h3 className="text-base sm:text-xl lg:text-2xl font-medium mb-2 group-hover:opacity-70 transition-opacity">
                Project Title
              </h3>
              <p className="text-sm sm:text-base text-foreground/60">
                Product Design · 2024
              </p>
            </article>

            {/* Project Card 2 */}
            <article className="group">
              <div className="aspect-[4/3] bg-foreground/5 rounded-lg sm:rounded-xl lg:rounded-2xl mb-4 sm:mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-foreground/30">
                  <span className="text-sm">Project Image</span>
                </div>
              </div>
              <h3 className="text-base sm:text-xl lg:text-2xl font-medium mb-2 group-hover:opacity-70 transition-opacity">
                Project Title
              </h3>
              <p className="text-sm sm:text-base text-foreground/60">
                UX Design · 2024
              </p>
            </article>

            {/* Project Card 3 */}
            <article className="group">
              <div className="aspect-[4/3] bg-foreground/5 rounded-lg sm:rounded-xl lg:rounded-2xl mb-4 sm:mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-foreground/30">
                  <span className="text-sm">Project Image</span>
                </div>
              </div>
              <h3 className="text-base sm:text-xl lg:text-2xl font-medium mb-2 group-hover:opacity-70 transition-opacity">
                Project Title
              </h3>
              <p className="text-sm sm:text-base text-foreground/60">
                Brand Design · 2024
              </p>
            </article>

            {/* Project Card 4 */}
            <article className="group">
              <div className="aspect-[4/3] bg-foreground/5 rounded-lg sm:rounded-xl lg:rounded-2xl mb-4 sm:mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-foreground/30">
                  <span className="text-sm">Project Image</span>
                </div>
              </div>
              <h3 className="text-base sm:text-xl lg:text-2xl font-medium mb-2 group-hover:opacity-70 transition-opacity">
                Project Title
              </h3>
              <p className="text-sm sm:text-base text-foreground/60">
                Visual Design · 2024
              </p>
            </article>
          </div>
        </Section>

        {/* About Section */}
        <Section id="about" className="bg-foreground/[0.02]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
            <div>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8">
                About
              </h2>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-lg text-foreground/70 leading-relaxed">
                <p>
                  I&apos;m a product designer passionate about creating meaningful 
                  digital experiences. With a focus on user-centered design, 
                  I help teams build products that people love to use.
                </p>
                <p>
                  My approach combines strategic thinking with meticulous 
                  attention to detail, ensuring every design decision serves 
                  both user needs and business goals.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-full aspect-square bg-foreground/5 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center text-foreground/30">
                <span className="text-sm">Profile Image</span>
              </div>
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact">
          <div className="max-w-2xl">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8">
              Let&apos;s Connect
            </h2>
            <p className="text-sm sm:text-lg lg:text-xl text-foreground/70 leading-relaxed mb-8 sm:mb-10">
              I&apos;m always interested in hearing about new projects and opportunities. 
              Feel free to reach out if you&apos;d like to collaborate.
            </p>
            <a
              href="mailto:hello@julespark.design"
              className="inline-flex items-center gap-2 text-base sm:text-xl font-medium hover:opacity-70 transition-opacity"
            >
              hello@julespark.design
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 sm:w-6 sm:h-6"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        </Section>
      </main>

      <Footer />

      {/* Responsive Breakpoint Indicator - Development Only */}
      <div className="fixed bottom-4 left-4 z-50 px-3 py-1.5 bg-foreground text-background text-xs font-mono rounded-full">
        <span className="sm:hidden">Mobile (&lt;640px)</span>
        <span className="hidden sm:inline lg:hidden">Tablet (640-989px)</span>
        <span className="hidden lg:inline">Desktop (≥990px)</span>
      </div>
    </div>
  );
}
