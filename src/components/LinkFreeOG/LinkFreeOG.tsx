import Image from "@/components/Image";

import MarkdownPreview from "@/components/MarkdownPreview";

import UserSearch from "./UserSearch";

type LinkFreeOGProps = {
  username?: string;
};

export default function LinkFreeOG({ username = "" }: LinkFreeOGProps) {
  return (
    <>
      <div className="flex place-items-center md:px-20 md:mx-20 lg:px-40 lg:mx-40 px-5">
        <UserSearch defaultUsername={username} />
      </div>
      <div className="mx-5 md:mx-auto max-w-screen-md text-center space-y-5 pt-5">
        <MarkdownPreview>
          {`\`\`\`txt
${process.env.NEXT_PUBLIC_API_URL}/linkfree-og${username ? `/${username}` : ""}
\`\`\``}
        </MarkdownPreview>
        <Image
          unoptimized={
            username === "" ||
            username === "eddiejaoude" ||
            username === "harshraj8843"
              ? false
              : true
          }
          src={`${process.env.NEXT_PUBLIC_API_URL}/linkfree-og/${username}`}
          alt="LinkFree OG Image"
          width={1020}
          className="mx-auto rounded-lg elevation-2 shadow-xl hover:shadow-2xl"
        />
      </div>
    </>
  );
}
