import Image from "next/image";

type GlassPillProps = {
  label: string;
  iconUrl?: string;
  className?: string;
};

export function GlassPill({ label, iconUrl, className = "" }: GlassPillProps) {
  return (
    <button
      type="button"
      className={`flex h-[33px] items-center gap-2 rounded-full border border-[var(--color-glass-border)] bg-[var(--color-glass)] px-5 shadow-[var(--shadow-glass)] backdrop-blur-[25px] ${className}`}
      aria-label={label}
    >
      {iconUrl ? (
        <Image src={iconUrl} alt="" width={17} height={17} aria-hidden />
      ) : null}
      <span className="font-spec-body text-base tracking-[-0.1px] text-[var(--color-brand)]">
        {label}
      </span>
    </button>
  );
}
