import ParticlesBackground from "@/components/ParticlesBackground";
import Countdown from "@/components/Countdown";

export default function Home() {
  // Set your event date here (YYYY-MM-DD)
  const TARGET_DATE = "2026-01-31T00:00:00"; 

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black selection:bg-red-500 selection:text-white">
      
      {/* 1. Background Layers */}
      
      {/* The Dreamy Gradient Spot - Center Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/40 rounded-full blur-[120px] z-0 animate-pulse duration-700" />
      
      {/* Particle Effect Overlay */}
      <ParticlesBackground />
      <div className="absolute top-0 left-0 w-full h-screen"><img className="w-full h-full object-cover" src="/Texture.png" alt="" /></div>
      {/* 2. Top Navigation / Logo */}
      <div className="absolute top-20 justify-center z-20">
        <img className="w-64" src="/logo-white.png" alt=""/>
      </div>

      {/* 3. Main Content Center */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 px-4">
        
        {/* The Massive 'X' Background Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] md:text-[30rem] font-extrabold text-red-700 opacity-20 select-none pointer-events-none font-montserrat leading-none">
          X
        </div>
    
       
        {/* 'COMING SOON' Text */}
        <h2 className="text-6xl md:text-9xl font-rubik-glitch text-white uppercase tracking-tighter drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] relative">
          Coming <br className="md:hidden" /> Soon
        </h2>

        {/* '6TH EDITION' Subtexsxt */}
        <h6 className="text-xs md:text-sm font-orbitron text-red-500 tracking-[0.5em] font-bold uppercase drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]">
          BEYOND FIVE:<br className="md:hidden" /> THE SIXTH CHAPTER
        </h6>

        {/* Tagline */}
       
      </div>

      {/* 4. Bottom Countdown Timer */}
      <div className="absolute bottom-12 z-20">
        <Countdown targetDate={TARGET_DATE} />
      </div>

    </main>
  );
}