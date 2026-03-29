const sections = [
  {
    title: "Acceptance",
    body: "By using Pulse, you agree to these Terms of Service. If you don't agree, please don't use the app. These terms apply to the Pulse iOS app and website.",
  },
  {
    title: "The Service",
    body: "Pulse is a daily anonymous polling app. One question is published each day and users can cast one vote. Results are shown in aggregate. We reserve the right to change, pause, or discontinue the service at any time.",
  },
  {
    title: "Your Use",
    body: "You agree not to abuse the voting system, attempt to manipulate results, reverse-engineer the app, or use it in any way that violates applicable laws. One vote per device per question — that's it.",
  },
  {
    title: "Content",
    body: "Questions are selected and published by Vobius Labs. We aim to keep questions civil, thought-provoking, and appropriate for general audiences. We reserve the right to change any question at any time.",
  },
  {
    title: "Disclaimer",
    body: "Pulse is provided \"as is\" without warranties of any kind. We do not guarantee uptime, accuracy of results, or continuous availability. Use at your own risk.",
  },
  {
    title: "Limitation of Liability",
    body: "To the fullest extent permitted by law, Vobius Labs is not liable for any indirect, incidental, or consequential damages arising from your use of Pulse.",
  },
  {
    title: "Governing Law",
    body: "These terms are governed by the laws of Alberta, Canada. Any disputes will be resolved in the courts of Alberta.",
  },
  {
    title: "Changes",
    body: "We may update these terms. We'll post the updated version at pulse.vobiuslabs.com/terms with the new date. Continued use means acceptance.",
  },
  {
    title: "Contact",
    body: "Questions about these terms? Email labs@vobius.com.",
  },
];

const Terms = () => (
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
        Terms of Service
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
        {[["Privacy", "/privacy"], ["Contact", "/contact"], ["Home", "/"]].map(([label, href]) => (
          <a key={label} href={href} className="text-[13px] text-black/35 no-underline hover:text-black/60 transition-colors">
            {label}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Terms;
