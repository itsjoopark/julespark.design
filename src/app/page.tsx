import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f0efea]">
      <Header />
      
      {/* Main content area - clean empty space matching Figma */}
      <main className="pt-[89px] min-h-screen">
        {/* Empty for now - matches Figma landing page design */}
      </main>
    </div>
  );
}
