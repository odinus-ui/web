export const COMPONENTS: {
  [key: string]: {
    type: "registry:ui" | "registry:util" | "registry:data";
    files: string[];
    twConifg?: any;
  };
} = {
  accordian: {
    type: "registry:ui",
    files: ["/ui/accordian.tsx"],
  },
  button: {
    type: "registry:ui",
    files: ["/ui/button.tsx"],
  },
  "context-menu": {
    type: "registry:ui",
    files: ["/ui/context-menu.tsx"],
  },
  dialog: {
    type: "registry:ui",
    files: ["/ui/dialog.tsx"],
  },
  tabs: {
    type: "registry:ui",
    files: ["/ui/tabs.tsx"],
  },
};
