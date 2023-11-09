export default function ExperienceContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-7 flex-col text-[#000]">{children}</div>
  );
}
