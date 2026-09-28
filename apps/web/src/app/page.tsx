const communities = [
  { name: "General", unread: 6, tone: "bg-slate-800" },
  { name: "Forex", unread: 18, tone: "bg-red-500/20" },
  { name: "Crypto", unread: 11, tone: "bg-amber-500/20" },
  { name: "Risk Mgmt", unread: 3, tone: "bg-indigo-500/20" },
];

const channels = [
  "announcements",
  "general-chat",
  "trade-ideas",
  "daily-bias",
  "news",
  "london-session",
];

const messages = [
  { user: "John", text: "London session breakout confirms the thesis. Watching 1.0950 for continuation.", time: "09:42", mine: false },
  { user: "You", text: "Nice setup. I’m holding the first position and waiting for the retest before adding.", time: "09:44", mine: true },
  { user: "Sarah", text: "CPI print is the key event. Risk remains tight around the current range.", time: "09:47", mine: false },
  { user: "Mike", text: "New trade idea: look for liquidity sweep into the Asian session before reversal.", time: "09:51", mine: false },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0D10] text-[#F5F7FA]">
      <div className="mx-auto flex max-w-[1600px] flex-col border-x border-[#252A32] bg-[#0B0D10] lg:min-h-screen lg:flex-row">
        <aside className="w-full border-b border-[#252A32] bg-[#12151A] lg:w-[280px] lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between border-b border-[#252A32] p-5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#8B93A1]">Trader Zone</p>
              <h1 className="mt-1 text-xl font-semibold">TRADING FLOOR</h1>
            </div>
            <button className="rounded-full border border-[#252A32] bg-[#181C22] px-3 py-1.5 text-xs text-[#F5F7FA]">
              + New
            </button>
          </div>

          <div className="p-4">
            <div className="mb-4 text-xs uppercase tracking-[0.22em] text-[#8B93A1]">Communities</div>
            <div className="space-y-2">
              {communities.map((community) => (
                <button
                  key={community.name}
                  className="flex w-full items-center justify-between rounded-xl border border-[#252A32] bg-[#181C22] px-3 py-3 text-left transition hover:border-red-500/40"
                >
                  <div className="flex items-center gap-3">
                    <span className={`h-2.5 w-2.5 rounded-full ${community.tone}`} />
                    <span className="font-medium text-[#F5F7FA]">{community.name}</span>
                  </div>
                  <span className="rounded-full bg-red-500/20 px-2 py-0.5 text-[10px] font-semibold text-red-300">
                    {community.unread}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-[#252A32] p-4">
            <div className="mb-3 text-xs uppercase tracking-[0.22em] text-[#8B93A1]">Channels</div>
            <ul className="space-y-2 text-sm text-[#D6DBE2]">
              {channels.map((channel) => (
                <li key={channel} className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-[#181C22]">
                  <span># {channel}</span>
                  <span className="text-[#8B93A1]">{channel.includes("session") ? "live" : "open"}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <section className="flex min-h-[640px] flex-1 flex-col border-b border-[#252A32] bg-[#0B0D10] lg:border-b-0 lg:border-r">
          <header className="flex items-center justify-between border-b border-[#252A32] bg-[#12151A] p-4">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#8B93A1]">Community</div>
              <h2 className="mt-1 text-xl font-semibold"># forex</h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-[#252A32] bg-[#181C22] px-2 py-1 text-xs text-[#8B93A1]">14 online</span>
              <button className="rounded-full bg-red-600 px-3 py-1.5 text-xs font-medium text-white">Live room</button>
            </div>
          </header>

          <div className="flex flex-1 flex-col gap-4 overflow-hidden p-4">
            <div className="rounded-2xl border border-[#252A32] bg-[#12151A] p-3 text-sm text-[#D6DBE2]">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-[#8B93A1]">Market briefing</span>
                <span className="text-red-400">LIVE</span>
              </div>
              <p className="leading-6">
                Bullish continuation remains favored above support. Keep entries disciplined around the session high and avoid forcing exposure into noise.
              </p>
            </div>

            <div className="flex-1 space-y-4 overflow-auto pr-2">
              {messages.map((message) => (
                <div
                  key={`${message.user}-${message.time}`}
                  className={`flex ${message.mine ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl border px-4 py-3 ${
                      message.mine
                        ? "border-red-500/30 bg-red-500/10 text-[#F5F7FA]"
                        : "border-[#252A32] bg-[#12151A] text-[#E8ECF1]"
                    }`}
                  >
                    <div className="mb-1 flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.18em] text-[#8B93A1]">
                      <span>{message.user}</span>
                      <span>{message.time}</span>
                    </div>
                    <p className="leading-6">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-[#252A32] bg-[#12151A] p-3">
              <div className="mb-3 flex items-center gap-2 text-sm text-[#8B93A1]">
                <button className="rounded-full border border-[#252A32] px-2 py-1">🎙</button>
                <button className="rounded-full border border-[#252A32] px-2 py-1">📎</button>
                <button className="rounded-full border border-[#252A32] px-2 py-1">😊</button>
              </div>
              <div className="flex items-center gap-3">
                <input
                  aria-label="Message input"
                  value="My reply..."
                  readOnly
                  className="flex-1 rounded-xl border border-[#252A32] bg-[#0B0D10] px-3 py-3 text-sm text-[#F5F7FA] outline-none"
                />
                <button className="rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white">Send</button>
              </div>
            </div>
          </div>
        </section>

        <aside className="w-full bg-[#12151A] lg:w-[320px]">
          <div className="border-b border-[#252A32] p-4">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-500/20 text-sm font-bold text-red-300">JD</div>
              <div>
                <div className="font-semibold text-[#F5F7FA]">John Doe</div>
                <div className="text-xs text-[#8B93A1]">@johnd</div>
              </div>
            </div>
            <div className="rounded-xl border border-[#252A32] bg-[#181C22] p-3 text-sm text-[#D6DBE2]">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[#8B93A1]">Status</span>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-300">ONLINE</span>
              </div>
              <p className="leading-6 text-[#F5F7FA]">Watching the London open. Favoring disciplined entries and tight risk.</p>
            </div>
          </div>

          <div className="p-4">
            <div className="mb-3 text-xs uppercase tracking-[0.22em] text-[#8B93A1]">Active members</div>
            <div className="space-y-3">
              {[
                ["John", "Trader"],
                ["Mike", "Swing"],
                ["Sarah", "Mentor"],
                ["Kevin", "Listener"],
              ].map(([name, role]) => (
                <div key={name} className="flex items-center justify-between rounded-xl border border-[#252A32] bg-[#181C22] px-3 py-2">
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <span className="text-[#F5F7FA]">{name}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#8B93A1]">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
