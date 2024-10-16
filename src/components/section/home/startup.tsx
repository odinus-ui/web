import Badge from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import logo from "$/brand/odinus/logo.png";
import screenshot from "$/assets/example/odin-screenshot.png";

export default function Startup() {
  return (
    <div className="h-[600px] overflow-hidden relative">
      <div className="relative z-10">
        <div className="flex items-center justify-between p-5 mb-10">
          <Image src={logo} alt="startup" width={100} />
          <div className="flex items-center gap-4 uppercase text-sm opacity-70">
            <p className="cursor-pointer">about</p>
            <p className="cursor-pointer">document</p>
            <p className="cursor-pointer">github</p>
          </div>
        </div>
        <div className="flex items-center mb-3 justify-center gap-1">
          <Badge text="Odinus UI" />
          <Badge text="UI Components Example" variant="outline" />
        </div>
        <h3 className="text-5xl font-black uppercase text-center">
          Create, Build, Deploy
        </h3>
        <h3 className="text-5xl font-black uppercase text-center">
          Simply make it happen
        </h3>
        <p className="text-center mt-8 opacity-50">
          Odinus is a project aimed at creating gaming platforms.
          <br /> You can find all the source codes on Github.
        </p>
        <div className="flex gap-1 mt-5 justify-center">
          <Button>Get Started</Button>
          <Button variants="outline">Learn More</Button>
        </div>
      </div>
      <div className="flex justify-center mt-[-40px] relative z-0">
        <Image
          className="absolute"
          src={screenshot}
          alt="screenshot"
          width={1000}
        />
      </div>
    </div>
  );
}
