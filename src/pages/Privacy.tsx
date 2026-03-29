const sections = [
  {
    title: "The Short Version",
    body: "Pulse collects minimal data to make the app work — your anonymous vote on each day's question. There are no accounts, no personal profiles, and no way to identify you.",
  },
  {
    title: "What We Collect",
    body: "We store an anonymous device ID (a random identifier your phone generates) paired with your vote. This is the minimum required to prevent duplicate votes. We do not collect your name, email, location, or any personally identifiable information.",
  },
  {
    title: "How We Use It",
    body: "Your vote is used solely to calculate and display the community result for that day's question. We aggregate results — we never display individual votes.",
  },
  {
    title: "Analytics & Tracking",
    body: "Pulse contains no advertising SDKs or tracking pixels. We may use basic anonymous analytics (page views, crash reports) to improve the app — never tied to your identity.",
  },
  {
    title: "Third Parties",
    body: "We use Supabase to store vote data. Supabase is SOC 2 compliant. We do not sell or share your data with any other third parties.",
  },
  {
    title: "Data Retention",
    body: "Poll results are kept indefinitely so you can browse past questions. Your anonymous vote record is retained for as long as the app is live.",
  },
  {
    title: "Children",
    body: "Pulse is designed for general audiences. Because we collect no personal information, there is no risk to children's privacy.",
  },
  {
    title: "Changes",
    body: "If this policy changes, we'll update the date at the top of this page. Continued use of the app after changes means you accept the updated policy.",
  },
  {
    title: "Contact",
    body: "Questions? Email us at labs@vobius.com — we're a small team and read every message.",
  },
];

const Privacy = () => (
  <div className="min-h-screen bg-white px-6 py-16">
    <div className="max-w-[680px] mx-auto">
      <a href="/" className="inline-flex items-center gap-2 text-[13px] text-black/40 no-underline mb-12 hover:text-black/60 transition-colors">
        ← Back to Pulse
      </a>

      <div className="flex items-center gap-2.5 mb-2">
        <div className="w-7 h-7 rounded-full bg-indigo-500 flex items-center justify-center text-white text-[12px] font-bold">P</div>
        <span className="font-bold text-[15px]">Pulse</span>
      </div>

      <h1 className="text-[clamp(32px,6vw,52px)] font-bold tracking-[-0.04em] leading-[1.1] mb-2">
        Privacy Policy
      </h1>
      <p className="text-[13px] text-black/30 mb-14">Last updated: March 29, 2026</p>

      <div className="flex flex-col gap-10">
        {sections.map(s => (
          <div key={s.title}>
            <h2 className="text-[17px] font-semibold mb-2.5 text-[#111]">{s.title}</h2>
            <p className="text-[15px] text-black/55 leading-[1.75]">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-black/8 mt-12 pt-8 flex gap-6 flex-wrap">
        {[["Terms", "/terms"], ["Contact", "/contact"], ["Home", "/"]].map(([label, href]) => (
          <a key={label} href={href} className="text-[13px] text-black/35 no-underline hover:text-black/60 transition-colors">
            {label}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Privacy;
