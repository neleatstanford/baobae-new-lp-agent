import type { Recipient } from "@/lib/content";
import Image from "next/image";

type AvatarStackProps = {
  recipients: Recipient[];
  size?: "sm" | "lg";
};

export function AvatarStack({ recipients, size = "sm" }: AvatarStackProps) {
  const dimensions = size === "lg" ? "h-11 w-11" : "h-[18px] w-[18px]";
  const iconSize = size === "lg" ? 44 : 18;

  return (
    <div className="flex items-center">
      {recipients.map((recipient, index) => (
        <div
          key={`${recipient.id}-${index}`}
          className={`overflow-hidden rounded-full ${dimensions} ${index > 0 ? "-ml-0.5" : ""}`}
        >
          <Image
            src={recipient.imageUrl}
            alt={recipient.alt}
            width={iconSize}
            height={iconSize}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
