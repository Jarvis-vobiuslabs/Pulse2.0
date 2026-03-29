import { useState } from "react";

const Contact = () => {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-[560px] mx-auto">
        <a href="/" className="inline-flex items-center gap-2 text-[13px] text-black/40 no-underline mb-12 hover:text-black/60 transition-colors">
          ← Back to Pulse
        </a>

        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-7 h-7 rounded-full bg-indigo-500 flex items-center justify-center text-white text-[12px] font-bold">P</div>
          <span className="font-bold text-[15px]">Pulse</span>
        </div>

        <h1 className="text-[clamp(32px,6vw,48px)] font-bold tracking-[-0.04em] leading-[1.1] mb-3">
          Contact Us
        </h1>
        <p className="text-[15px] text-black/50 leading-relaxed mb-10">
          We&apos;re a small team and read every message. Whether you have a bug report,
          question, or just want to say hi — reach out.
        </p>

        {sent ? (
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50 px-6 py-5 text-indigo-600 font-medium text-[15px]">
            ✓ Message sent — we&apos;ll get back to you soon.
          </div>
        ) : (
          <form
            onSubmit={e => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const name    = (form.querySelector('[name="name"]') as HTMLInputElement).value;
              const email   = (form.querySelector('[name="email"]') as HTMLInputElement).value;
              const message = (form.querySelector('[name="message"]') as HTMLTextAreaElement).value;
              window.location.href = `mailto:labs@vobius.com?subject=Pulse - Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
              setSent(true);
            }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-medium text-black/60">Name</label>
              <input
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="rounded-xl border border-black/10 bg-[#fafafa] px-4 py-3 text-[15px] text-[#111] placeholder:text-black/30 outline-none focus:border-indigo-400 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-medium text-black/60">Email</label>
              <input
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="rounded-xl border border-black/10 bg-[#fafafa] px-4 py-3 text-[15px] text-[#111] placeholder:text-black/30 outline-none focus:border-indigo-400 transition-colors"
                style={{ fontSize: 16 }}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-medium text-black/60">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="What's on your mind?"
                className="rounded-xl border border-black/10 bg-[#fafafa] px-4 py-3 text-[15px] text-[#111] placeholder:text-black/30 outline-none focus:border-indigo-400 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="rounded-[32px] py-3 px-8 text-white text-[14px] font-semibold cursor-pointer transition-all hover:-translate-y-px mt-2"
              style={{
                background: "linear-gradient(135deg,#818cf8 0%,#6366f1 40%,#4f46e5 100%)",
                boxShadow: "0 4px 20px rgba(99,102,241,0.35)",
              }}
            >
              Send Message
            </button>
          </form>
        )}

        <div className="border-t border-black/8 mt-12 pt-8 flex gap-6 flex-wrap">
          <p className="text-[13px] text-black/40">Or email us directly: <a href="mailto:labs@vobius.com" className="text-indigo-500 no-underline">labs@vobius.com</a></p>
        </div>

        <div className="flex gap-6 flex-wrap mt-4">
          {[["Privacy", "/privacy"], ["Terms", "/terms"], ["Home", "/"]].map(([label, href]) => (
            <a key={label} href={href} className="text-[13px] text-black/35 no-underline hover:text-black/60 transition-colors">
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
