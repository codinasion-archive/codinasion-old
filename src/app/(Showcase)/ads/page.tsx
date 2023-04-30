import Image from "@/components/Image";
import Link from "@/components/Link";

import Ads_160x300 from "@/public/ads/ad_160x300.png";
import Ads_160x600 from "@/public/ads/ad_160x600.png";
import Ads_300x250 from "@/public/ads/ad_300x250.png";
import Ads_320x50 from "@/public/ads/ad_320x50.png";
import Ads_468x60 from "@/public/ads/ad_468x60.png";
import Ads_728x90 from "@/public/ads/ad_728x90.png";

import MarkdownPreview from "@/components/MarkdownPreview";

const ad_url =
  "https://turkstench.com/indmxqv6?key=69f5cb462e1c6c6f600012e254dc2861";

export default function AdsPage() {
  return (
    <>
      <MarkdownPreview>
        {`# Advertisement

We are currently showing ads on our website.

## Why?

We are currently showing ads on our website to help us continue the maintenance of our website and to help us pay for our backend server costs.

## How can I help?

You can help us by disabling your adblocker on our website. We promise that we will not show any malicious ads on our website.

## What kind of ads are you showing?

We are currently showing two types of ads on our website.

- **Popunder Ads** - This ad will open in a new tab when you click anywhere on our website. (Only once per day)
- **Banner Ads** - This ads will be shown on the sidebar of our website. (Only once per page)

## Ads Preview

### Ads 160x300

`}
      </MarkdownPreview>

      <Link href={ad_url} externalIcon={false}>
        <Image src={Ads_160x300} alt="Ads 160x300" width={160} height={300} />
      </Link>

      <MarkdownPreview>{`<br/>

### Ads 160x600

`}</MarkdownPreview>

      <Link href={ad_url} externalIcon={false}>
        <Image src={Ads_160x600} alt="Ads 160x600" width={160} height={600} />
      </Link>

      <MarkdownPreview>{`<br/>

### Ads 300x250

`}</MarkdownPreview>

      <Link href={ad_url} externalIcon={false}>
        <Image src={Ads_300x250} alt="Ads 300x250" width={300} height={250} />
      </Link>

      <MarkdownPreview>{`<br/>

### Ads 320x50

`}</MarkdownPreview>

      <Link href={ad_url} externalIcon={false}>
        <Image src={Ads_320x50} alt="Ads 320x50" width={320} height={50} />
      </Link>

      <MarkdownPreview>{`<br/>

### Ads 468x60

`}</MarkdownPreview>

      <Link href={ad_url} externalIcon={false}>
        <Image src={Ads_468x60} alt="Ads 468x60" width={468} height={60} />
      </Link>

      <MarkdownPreview>{`<br/>

### Ads 728x90

`}</MarkdownPreview>

      <Link href={ad_url} externalIcon={false}>
        <Image src={Ads_728x90} alt="Ads 728x90" width={728} height={90} />
      </Link>
    </>
  );
}
