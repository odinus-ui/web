"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "$/brand/logo.png";
import DropdownMenu from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function GlobalHeader() {
  const { setTheme } = useTheme();

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
          <DropdownMenu>
            <DropdownMenu.Trigger>
              <Button variants="outline" className="w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 mb-[-2px] scale-100 dark:scale-0 dark:hidden transition-transform duration-300 ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 mb-[-2px] scale-0 hidden dark:scale-100 dark:block transition-transform duration-300 ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content position="right">
              <DropdownMenu.Item
                onClick={() => {
                  setTheme("light");
                }}
              >
                Light
              </DropdownMenu.Item>
              <DropdownMenu.Item
                onClick={() => {
                  setTheme("dark");
                }}
              >
                Dark
              </DropdownMenu.Item>
              <DropdownMenu.Item
                onClick={() => {
                  setTheme("system");
                }}
              >
                System
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
