type Props = {
  part: string;
  title: string;
  description: string;
};

export function PatientJourneySectionBridge({ part, title, description }: Props) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 md:px-8 md:py-10 lg:px-12">
      <div className="flex flex-col gap-2 border-l-4 border-medical-teal/80 py-1 pl-4 md:pl-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-medical-teal">
          {part}
        </p>
        <p className="text-sm font-semibold text-slate-800 md:text-base">{title}</p>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-gray md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
