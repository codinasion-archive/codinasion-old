export async function GET(request: Request) {
  const humans_txt = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/humans.txt`
  ).then((res) => res.text());

  return new Response(humans_txt, {
    headers: {
      "Cache-Control": "s-maxage=60, stale-while-revalidate=60",
    },
  });
}
