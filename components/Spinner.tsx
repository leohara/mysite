export default function Spinner() {
  return (
    <div
      className="z-30 flex justify-center pt-[200px]"
      aria-label="読み込み中"
    >
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#909090] border-t-transparent"></div>
    </div>
  );
}
