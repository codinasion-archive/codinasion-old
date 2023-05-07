import DefaultSponsor from "@/public/sponsor/sponsor.png";

import type { SponsorType } from "../types/Sponsor";

const defaultSponsorData = {
  default: true,
  logo: DefaultSponsor.src,
  name: "Sponsor Name",
  description:
    "A short description about the sponsor. Laromlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  link: "https://codinasion.org",
};

const sponsorData: SponsorType[] = [];

export function getSponsorData(): SponsorType {
  let data;
  if (sponsorData.length > 0) {
    data = sponsorData[0];
  } else {
    data = defaultSponsorData;
  }

  return data;
}
