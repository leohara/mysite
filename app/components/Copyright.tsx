import { MdCopyright } from "react-icons/md";

export default function Copyright() {
  return (
    <div className="h-[48px] w-[200px] px-[20px] text-[10px]">
      <div className="relative flex">
        <div className="absolute top-[2.5px]">
          <MdCopyright size={10} />
        </div>
        <p className="pl-[14px]">
          Copyright {new Date().getFullYear()} Leo Harada.
        </p>
      </div>
    </div>
  );
}
