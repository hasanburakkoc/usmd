import { TEAM_PLACEHOLDERS } from "@/lib/constants/team";

export function TeamProfiles() {
  return (
    <section aria-labelledby="team-heading" className="mt-12">
      <h2
        id="team-heading"
        className="text-xl font-bold tracking-tight text-trust-green md:text-2xl"
      >
        Your coordination team
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-gray md:text-base">
        USMD is a bilingual, bicultural operation built for Americans traveling
        to Türkiye—not a solo broker or anonymous call center.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {TEAM_PLACEHOLDERS.map((member) => (
          <article
            key={member.role}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-medical-teal">
              {member.role}
            </p>
            <h3 className="mt-2 text-base font-semibold text-slate-800">
              {member.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-gray">
              {member.bio}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
