import Link from "next/link";
import Logo from "$/brand/logo.png";
import Image from "next/image";

export default function GlobalFooter() {
  return (
    <footer className="px-5 py-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image src={Logo} alt="logo" width={30} height={30} />
              Odinus UI
            </Link>
          </div>
          <div>
            <ul>
              <li>
                <h4>Team</h4>
                <ul>
                  <li>
                    <Link
                      className="text-sm text-white/40 hover:text-white/80"
                      href="/"
                    >
                      Gyuyeon Lee
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-sm dark:text-white/40">
          Copyright © {new Date().getFullYear()}{" "}
          <Link href="https://odinus.shop/">Odinus Project</Link>. Made with ♥︎
          by <Link href="https://damie.works">Gyuyeon Lee</Link>
        </p>
      </div>
    </footer>
  );
}
