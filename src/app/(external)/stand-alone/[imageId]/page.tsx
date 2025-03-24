import { Metadata } from "next";
import StandalonePage from "./standalone-page";

export async function generateMetadata({
  params,
}: {
  params: { imageId: string };
}): Promise<Metadata> {
  const imageId = params.imageId;

  const imageUrl = `https://genz.ad/stand-alone/${imageId}`;

  return {
    title: "Check out this creative ad!",
    description: "View this amazing advertisement created with our platform",
    openGraph: {
      title: "Check out this creative ad!",
      description: "View this amazing advertisement created with our platform",
      url: `https://genz.ad/stand-alone/${imageId}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "Generated ad preview",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Check out this creative ad!",
      description: "View this amazing advertisement created with our platform",
      images: [imageUrl],
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Page({ params }: { params: { imageId: string } }) {
  return <StandalonePage />;
}
