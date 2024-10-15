"use client";
import AiAssistant from "@/components/section/home/ai-assistant";
import Authenticate from "@/components/section/home/authenicate";
import Startup from "@/components/section/home/startup";
import { buttonVariants } from "@/components/ui/button";
import { TabContainer, TabContents } from "@/components/ui/tabs";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="mt-28">
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
        <div className="w-[98%] max-w-[1200px] mx-auto border border-white/10 rounded-md">
          <TabContainer>
            <TabContents title="AI Assistant">
              <AiAssistant />
            </TabContents>
            <TabContents title="Authenicate">
              <Authenticate />
            </TabContents>
            <TabContents title="Cart">2</TabContents>
            <TabContents title="Dashboard">2</TabContents>
            <TabContents title="Music">3</TabContents>
            <TabContents title="Pay">1</TabContents>
            <TabContents title="Startup">
              <Startup />
            </TabContents>
          </TabContainer>
        </div>
      </section>
    </main>
  );
}