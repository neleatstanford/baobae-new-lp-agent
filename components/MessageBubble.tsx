type MessageBubbleProps = {
  text: string;
};

export function MessageBubble({ text }: MessageBubbleProps) {
  return (
    <div className="w-[235px] rounded-[16px] rounded-bl-[6px] bg-[var(--color-bubble)] px-3.5 py-2.5 shadow-[var(--shadow-bubble)]">
      <p className="font-spec-message m-0 text-sm leading-[1.45] text-[var(--color-body)]">
        {text}
      </p>
    </div>
  );
}
