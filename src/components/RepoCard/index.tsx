import Image from "@/components/Image";
import Link from "@/components/Link";

type RepoCardProps = {
  repo: string;
};

export default function RepoCard({ repo }: RepoCardProps) {
  return (
    <>
      <Link href={`https://github.com/${repo}`} externalIcon={false}>
        <Image
          src={`https://gh-card.dev/repos/${repo}.svg`}
          alt={`Repo Card for ${repo}`}
          className="w-full rounded-lg shadow-lg hover:shadow-xl my-5"
        />
      </Link>
    </>
  );
}
