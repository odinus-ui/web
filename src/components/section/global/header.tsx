import Image from "next/image";
import Link from "next/link";
import logo from "$/brand/logo.png";

export default function GlobalHeader() {
  return (
    <header className="fixed z-50 top-0 h-fit w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 ">
      <div className="max-w-[1200px]  mx-auto flex items-center justify-between select-none px-8 py-6 ">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={30} height={30} />
          <p>Odinus UI</p>
        </Link>
        <div className="flex items-center gap-2">
          <p>Github</p>
          <p>Docs</p>
        </div>
      </div>
    </header>
  );
}
