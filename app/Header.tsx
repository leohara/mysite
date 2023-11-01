type Props = {
  hasScrolled: boolean;
}

export default function Header({ hasScrolled }: Props) {
  return (
    <div
      className={`
        ${"fixed w-[200px] h-[56px] bg-[#F6F6F6] z-10"}
        ${hasScrolled ? 'shadow' : 'shadow-none'}
        transition-shadow duration-300
        `}
      >
      <div className="pt-[20px] px-[28px] pb-[14px]" >
        <p className="font-bold font-[#363636]" >Leo Harada</p>
      </div>
    </div>
  )
}
