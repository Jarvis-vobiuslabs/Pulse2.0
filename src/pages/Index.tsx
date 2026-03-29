import { motion } from "framer-motion";
import { Star } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] },
});

const Index = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover [transform:scaleY(-1)]"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4"
            type="video/mp4"
          />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[26.416%] from-[rgba(255,255,255,0)] to-[66.943%] to-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-[290px] flex flex-col items-center gap-8">
        {/* Heading */}
        <motion.h1
          {...fadeUp(0)}
          className="font-['Geist',sans-serif] font-medium text-center tracking-[-0.04em] text-[40px] sm:text-[56px] md:text-[80px] leading-[1.05] text-[#1a1a2e]"
        >
          Simple{" "}
          <span className="font-['Instrument_Serif',serif] italic text-[50px] sm:text-[70px] md:text-[100px]">
            polling
          </span>
          <br />
          for your community
        </motion.h1>

        {/* Description */}
        <motion.p
          {...fadeUp(0.15)}
          className="font-['Geist',sans-serif] text-center text-[16px] md:text-[18px] text-[#373a46] opacity-80 max-w-[554px] leading-relaxed"
        >
          Create anonymous polls in seconds and get honest feedback from your
          audience. No sign-ups, no tracking — just real opinions.
        </motion.p>

        {/* Email Input Bar */}
        <motion.div
          {...fadeUp(0.3)}
          className="w-full max-w-[520px] flex flex-col items-center gap-5"
        >
          <div
            className="w-full flex items-center gap-2 rounded-[40px] border border-[#e8e8e8] bg-[#fcfcfc] px-2 py-1.5"
            style={{
              boxShadow: "0px 10px 40px 5px rgba(194,194,194,0.25)",
            }}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-transparent px-4 py-2.5 text-[15px] font-['Geist',sans-serif] text-[#373a46] placeholder:text-[#9ca3af] outline-none"
            />
            <button
              className="rounded-[32px] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] px-6 py-2.5 text-[14px] font-medium text-white font-['Geist',sans-serif] whitespace-nowrap transition-transform hover:scale-[1.02] active:scale-[0.98]"
              style={{
                boxShadow:
                  "inset -4px -6px 25px 0px rgba(201,201,201,0.08), inset 4px 4px 10px 0px rgba(29,29,29,0.24)",
              }}
            >
              Create Free Account
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-[#facc15] text-[#facc15]"
                />
              ))}
            </div>
            <span className="font-['Geist',sans-serif] text-[13px] text-[#373a46] opacity-70">
              1,020+ Reviews on the App Store
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Index;
