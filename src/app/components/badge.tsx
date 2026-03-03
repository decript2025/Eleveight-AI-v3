export function Badge({ text }: { text: React.ReactNode }) {
  return (
    <span className="shrink-0 text-xs font-semibold bg-primaryGreen text-foreground px-3 py-0.5 rounded-full border border-[#2e924f]">
      {text}
    </span>
  );
}
