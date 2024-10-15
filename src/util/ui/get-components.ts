import { COMPONENTS } from "@/consts/components";
import { promises as fs } from "fs";
import path from "path";

/**
 * Retrieves component information based on the given title and target platform.
 * @param {string} title - The title of the component.
 * @param {"next" | "react"} target - The target platform ("next" or "react").
 * @returns {Promise<registry>} - A promise that resolves to the component registry information.
 * @throws {Error} - Throws an error if the component is not found.
 */
export async function GetComponents(
  title: string,
  target: "next" | "react"
): Promise<registry> {
  if (!Object.keys(COMPONENTS).includes(title)) {
    throw new Error(`Component ${title} not found`);
  }

  const component = COMPONENTS[title];
  const componentFiles: ComponentFile[] = [];

  await Promise.all(
    component.files.map(async (file) => {
      const filePath = path.join(process.cwd(), "src", "components", file);
      let fileContent = "";

      try {
        fileContent = await fs.readFile(filePath, "utf-8");
      } catch (error) {
        console.error(`Error reading file: ${filePath}`, error);
        throw error;
      }

      const needClient = fileContent.startsWith('"use client";');

      // Remove "use client" directive if the target is not "next"
      if (target !== "next") {
        fileContent = fileContent.replace(/^"use client";\s*/, "");
      }

      componentFiles.push({
        needClient,
        path: file,
        content: fileContent,
      });
    })
  );

  return {
    title: title,
    type: component.type,
    files: componentFiles,
    tailwind: component.twConifg ?? {},
  };
}
