import type { Channel, Recipient } from "@/lib/content";
import { AvatarStack } from "@/components/AvatarStack";

type RecipientRowProps = {
  timestamp: string;
  channel: Channel;
  recipients: Recipient[];
};

export function RecipientRow({ timestamp, channel, recipients }: RecipientRowProps) {
  return (
    <div className="mt-1 flex items-center gap-1.5">
      <span className="font-spec-message text-[9px] leading-normal text-[var(--color-meta)]">
        {timestamp}
      </span>
      <span className="font-spec-message text-[9px] leading-normal text-[var(--color-meta)]">
        sent to {channel}
      </span>
      <AvatarStack recipients={recipients} />
    </div>
  );
}
