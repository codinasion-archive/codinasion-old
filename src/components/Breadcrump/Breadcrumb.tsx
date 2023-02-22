import Link from "next/link";

import { BreadcrumbType } from "@/types";

type Props = {
  links: BreadcrumbType[];
};

export default function Breadcrumb({
  links = [
    {
      title: "Home",
      url: "/",
    },
  ],
}: Props) {
  return (
    <>
      <aside className="py-5 text-sm">
        <ul className="flex justify-start">
          {links.map((link, index) => (
            <>
              {index !== 0 && <li className="px-2">/</li>}
              <li key={index}>
                {link.url ? (
                  <Link href={link.url}>{link.title}</Link>
                ) : (
                  <>
                    <b>{link.title}</b>
                  </>
                )}
              </li>
            </>
          ))}
        </ul>
      </aside>
    </>
  );
}
