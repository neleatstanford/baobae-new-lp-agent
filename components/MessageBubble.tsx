type MessageBubbleProps = {
  text: string;
};

export function MessageBubble({ text }: MessageBubbleProps) {
  return (
    <div className="w-[195px] rounded-[16px] rounded-bl-[6px] bg-[var(--color-bubble)] px-3 py-2 shadow-[var(--shadow-bubble)]">
      <p className="font-spec-message m-0 text-[11px] leading-[1.4] text-[var(--color-body)]">
        {text}
      </p>
    </div>
  );
}
