import Image from "next/image";
import Link from "next/link";

export default function Container() {
  return (
    <div className="scale-100 flex-col transition-all duration-500 hover:scale-105 lg:w-[80%]">
      <Link href="https://github.com/leohara/StorageRack_Maker">
        <div className="relative flex h-[150px] w-full rounded-[30px] border border-[#d3d3d3] bg-[#f6f6f6]">
          <div className="flex-col pl-[30px] pt-[10px]">
            <div className="w-[55%] items-center lg:w-full">
              <h1 className="font-bold">Pythonを用いたCadの自動作図</h1>
            </div>
            <div className="absolute left-[5%] top-[95px] flex gap-[8px]">
              <div className="z-10 h-[40px] w-[40px] overflow-hidden rounded-[10px] border-[0.5px] border-[#000] bg-[#f6f6f6]">
                <Image
                  src="/stack/python.svg"
                  alt="python_icon"
                  width={500}
                  height={500}
                />
              </div>
              <div className="z-10 h-[40px] w-[40px] overflow-hidden rounded-[10px] border-[0.5px] border-[#000] bg-[#f6f6f6]">
                <Image
                  src="/stack/autocad.svg"
                  alt="autocad_icon"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
          <div className="absolute right-[5%] top-[5%] h-[90%] w-[40%] overflow-hidden rounded-[20px] border border-[#000]">
            <Image
              src="/project/cad.png"
              alt={"autocad"}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
