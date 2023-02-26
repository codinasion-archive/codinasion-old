import UserSearch from "./UserSearch";

type LinkFreeOGProps = {
  username?: string;
};

export default function LinkFreeOG({ username="" }: LinkFreeOGProps) {
  return (
    <>
      <UserSearch defaultUsername={username} />
    </>
  );
}
