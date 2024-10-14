"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { TabContainer, TabContents } from "@/components/ui/tabs";
import { Metadata } from "next";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
        <div className="my-14 text-center">
          <h1 className="text-4xl font-bold ">Build your website easily</h1>
          <p className="mt-2">
            Odinus Ui is an ui-development kit for react-based frameworks.
          </p>
          <div className="mt-3 flex gap-1 justify-center">
            <Link
              href={"/docs"}
              className={buttonVariants({ variants: "default", size: "sm" })}
            >
              Documents
            </Link>
            <Link
              href={"/docs"}
              className={buttonVariants({ variants: "outline", size: "sm" })}
            >
              Components
            </Link>
          </div>
        </div>
        <div className="w-[98%] mx-auto border border-white/10 rounded-md">
          <TabContainer>
            <TabContents title="Authenicate">2</TabContents>
            <TabContents title="Cart">2</TabContents>
            <TabContents title="Music">3</TabContents>
            <TabContents title="Pay">1</TabContents>
          </TabContainer>
        </div>
      </section>
    </main>
  );
}
