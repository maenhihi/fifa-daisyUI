import Link from "next/link";

export default function Home() {
  return (
  
<section id="landing" className="h-screen ">
<div className="hero  min-h-screen bg-indigo-300">
  <div className="hero-content flex-col lg:flex-row h-screen">
    <img
      src="images/messi.png"
      id="lolmessi"
      className=" max-w-screen rounded-lg h-100 overflow-hidden" 
      alt="messi"/>
    <div>
      <h1 className="text-5xl font-bold text-white">FIFA World Cup!</h1>
      <p className="py-6 text-indigo-100">
      {/* Get ready to experience the thrill of the world's biggest football tournament like never before. Our app brings you closer to the action with real-time scores, live updates, exclusive content, and interactive features designed for true football fans. */}
      Get ready to experience the thrill of the world&apos;s biggest football tournament like never before. Our app brings you closer to the action with real-time scores, live updates, exclusive content, and interactive features designed for true football fans.
      </p>
      <button className="btn btn-primary bg-indigo-400 border-none text-indigo-100">
        <Link
        href="/teams"
        >
        
        Get Started
        </Link>
        </button>
    </div>
  </div>
</div>
</section>
  
  );
}
