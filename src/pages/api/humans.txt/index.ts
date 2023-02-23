// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const humans_txt = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/humans.txt`
  ).then((res) => res.text());

  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=60");
  res.status(200).send(humans_txt);
}
