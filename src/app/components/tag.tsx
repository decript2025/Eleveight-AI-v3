export function Tag({ tag }: { tag: React.ReactNode }) {
  return (
    <span className="text-xs text-ashen rounded-full px-2 py-0.5 shadow-[0_0_2px_0_#EA580C]">
      {tag}
    </span>
  );
}