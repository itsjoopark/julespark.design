import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f0efea]">
      <Header />
      
      {/* Main content area - adjust padding to account for larger header */}
      <main className="pt-[89px]">
        {/* Content will go here */}
      </main>
    </div>
  );
}
