import Popunder from "@/components/Ads/Popunder";

export default function ProgramLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Popunder />
      {children}
    </>
  );
}
