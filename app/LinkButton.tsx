import Link from "next/link"
import { usePathname } from "next/navigation";

type Props = {
  name: string;
  url: string;
  children: React.ReactNode;
}

export default function LinkButton({ name, url, children }: Props) {

  const pathName = usePathname().split('/').filter(segment => segment != '')[0];

  function processUrl(name: string): string | undefined {
    if (name === 'home') {
        return undefined;
    }
    return name;
  }

  return (
      <Link href={url} className="">
        <div className={`
          ${"flex items-center rounded-lg px-[10px] p-[6px] mb-[12px] hover:bg-[#C7FBEC]"}
          ${processUrl(name.toLowerCase()) == pathName ? "bg-[aquamarine]" : ""}
          `}
        >
          {children}
          <p className="pl-[12px] text-[14px] font-medium" >{name}</p>
        </div>
      </Link>
  )
}
