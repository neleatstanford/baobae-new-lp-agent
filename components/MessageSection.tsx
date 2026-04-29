import type { MessageSectionData } from "@/lib/content";
import { MessageBubble } from "@/components/MessageBubble";
import { RecipientRow } from "@/components/RecipientRow";

type MessageSectionProps = {
  section: MessageSectionData;
  beatOneClassName: string;
  beatTwoClassName: string;
  index: number;
};

export function MessageSection({
  section,
  beatOneClassName,
  beatTwoClassName,
  index,
}: MessageSectionProps) {
  return (
    <section data-reveal-section={index} className="flex flex-col gap-3">
      <div className={beatOneClassName}>
        <MessageBubble text={section.text} />
        <RecipientRow
          timestamp={section.timestamp}
          channel={section.channel}
          recipients={section.recipients}
        />
      </div>
      <p
        data-reveal={`section-${index}-beat-2`}
        className={`${beatTwoClassName} font-spec-body m-0 text-right text-[11px] leading-relaxed tracking-[0.1px] text-[var(--color-muted)]`}
      >
        {section.caption}
      </p>
    </section>
  );
}
