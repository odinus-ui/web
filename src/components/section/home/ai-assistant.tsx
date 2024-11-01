import Avatar from "@/components/ui/avatar";
import lightLogo from "$/example/ai-assistant/logo.png";
import { Button } from "@/components/ui/button";
import Seperator from "@/components/ui/seperator";
import Input from "@/components/ui/Input";

export default function AiAssistant() {
  return (
    <div className="flex h-[600px]">
      <div className="w-[300px] hidden md:block border-r border-border h-full">
        <div className="flex items-center justify-between p-3">
          <Button variants="ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 mx-[-7px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Button>
          <Button variants="ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 mx-[-7px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </Button>
        </div>
        <div className="p-3 flex flex-col gap-3">
          <Button variants="ghost" className="w-full text-left">
            Information of Odinus UI
          </Button>
          <Seperator displayText="Today" textPosition="left" />
          <Button variants="ghost" className="w-full text-left">
            New web platform idea
          </Button>
          <Button variants="ghost" className="w-full text-left">
            How to create a new project
          </Button>
          <Seperator displayText="Last 30 Days" textPosition="left" />
          <Button variants="ghost" className="w-full text-left">
            Best practices for UI design
          </Button>
          <Button variants="ghost" className="w-full text-left">
            How to improve seo
          </Button>
          <Button variants="ghost" className="w-full text-left">
            How to implement authentication
          </Button>
          <Button variants="ghost" className="w-full text-left">
            Integrating third-party APIs
          </Button>
          <Button variants="ghost" className="w-full text-left">
            Future trends in web development
          </Button>
          <Button variants="outline" className="mt-7">
            More
          </Button>
        </div>
      </div>
      <div className="relative flex-1">
        <div className="p-5 flex flex-col gap-5">
          <div className="bg-foreground text-background p-3 rounded-lg text-sm w-fit ml-auto">
            <p>Could you please provide some information about Odinus UI?</p>
          </div>
          <div className="flex gap-3">
            <Avatar displayName="AI" />
            <div className="border border-white/30 p-3 rounded-lg text-sm w-fit mt-1">
              <p>
                Odinus UI is a React-based UI component library
                <br /> designed to help developers build modern and responsive
                web applications with ease.
              </p>
            </div>
          </div>
          <div className="bg-foreground text-background p-3 rounded-lg text-sm w-fit ml-auto">
            <p>Can you tell me more about the features?</p>
          </div>
          <div className="flex gap-3">
            <Avatar displayName="AI" />
            <div className="border border-white/30 p-3 rounded-lg text-sm w-fit mt-1">
              <p>
                Sure! Odinus UI offers a wide range of customizable components
                <br /> that are easy to integrate and use in your projects.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full border-t p-3 flex items-center gap-3">
          <Input placeholder="Ask anything..." />
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
