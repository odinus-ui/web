import { GetComponents } from "@/util/ui/get-components";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { target, name } = req.query;

  try {
    const components = await GetComponents(
      name as string,
      target as "react" | "next"
    );

    return res.status(200).json({ ...components });
  } catch (error) {
    const err = error as Error;
    return res
      .status(500)
      .json({ error: "Internal Server Error", description: err.message });
  }
}
