const metrics = [
  { label: "Active rooms", value: "18" },
  { label: "Reports", value: "26" },
  { label: "Bans", value: "4" },
  { label: "Members", value: "3,482" },
];

const tables = [
  ["Kevin Lee", "Suspended", "Spam"],
  ["Alicia Chen", "Active", "Harassment"],
  ["Marcus Silva", "Under review", "Scam"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0D10] text-[#F5F7FA]">
      <div className="mx-auto max-w-7xl p-6">
        <header className="mb-8 flex items-center justify-between rounded-2xl border border-[#252A32] bg-[#12151A] p-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#8B93A1]">Trader Zone</p>
            <h1 className="mt-2 text-2xl font-semibold">Admin Console</h1>
          </div>
          <button className="rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white">Owner actions</button>
        </header>

        <section className="mb-8 grid gap-4 md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-[#252A32] bg-[#12151A] p-5">
              <div className="text-xs uppercase tracking-[0.22em] text-[#8B93A1]">{metric.label}</div>
              <div className="mt-4 text-3xl font-semibold text-[#F5F7FA]">{metric.value}</div>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-2xl border border-[#252A32] bg-[#12151A] p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Moderation queue</h2>
              <span className="text-xs uppercase tracking-[0.2em] text-[#8B93A1]">Updated 2m ago</span>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#252A32]">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-[#181C22] text-[#8B93A1]">
                  <tr>
                    <th className="px-4 py-3 font-medium">User</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {tables.map(([name, status, reason]) => (
                    <tr key={name} className="border-t border-[#252A32] text-[#F5F7FA]">
                      <td className="px-4 py-3">{name}</td>
                      <td className="px-4 py-3"><span className="rounded-full bg-amber-500/20 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-amber-300">{status}</span></td>
                      <td className="px-4 py-3 text-[#D6DBE2]">{reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl border border-[#252A32] bg-[#12151A] p-5">
            <h2 className="mb-4 text-lg font-semibold">Quick actions</h2>
            <div className="space-y-3">
              {[
                "View active rooms",
                "Review reports",
                "Manage permissions",
                "Audit log",
              ].map((action) => (
                <button key={action} className="flex w-full items-center justify-between rounded-xl border border-[#252A32] bg-[#181C22] px-4 py-3 text-left text-[#F5F7FA] hover:border-red-500/40">
                  <span>{action}</span>
                  <span className="text-[#8B93A1]">→</span>
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
