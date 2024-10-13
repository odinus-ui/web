"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
        <h1 className="text-4xl font-bold text-center">
          당신의 웹 개발을 더욱 쉽게 만듭니다.
        </h1>
        <div>
          <Link
            href="/docs"
            className={buttonVariants({ variants: "default" })}
          >
            Documents
          </Link>
          <Button variants="ghost" size="md">
            다운로드
          </Button>
        </div>
      </section>
    </main>
  );
}
