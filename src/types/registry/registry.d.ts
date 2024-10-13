type registry = {
  title: string;
  type: "registry:ui" | "registry:util" | "registry:data";
  dependencies?: string[];
  files: ComponentFile[];
  tailwind?: any;
};
