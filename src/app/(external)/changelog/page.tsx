import Version from "@/domains/external/components/version";
import Image from "next/image";

interface Shape {
  positionSize: string;
  picture: [src: string, alt: string, height: number, width: number];
}

interface Versions {
  name: string;
  deadline: string;
  status: string;
  title: string;
  subtitle: string;
  content: {
    item1: string[];
    item2: string[];
    item3: string[];
  };
  picture: string;
}

const shapes: Shape[] = [
  {
    positionSize:
      "h-[70px] lg:h-[193px] absolute right-[-28px]  lg:right-[-39px] bottom-[-8px] lg:bottom-[-44px]",
    picture: ["/shapes/circle.svg", "circle", 193, 193],
  },
  {
    positionSize:
      "h-[53px] lg:h-[132px] absolute left-[-105px]  lg:left-[-160px] top-[85px] lg:top-[67px]",
    picture: ["/shapes/ellipse.svg", "ellipse", 132, 376],
  },
  {
    positionSize:
      "h-[88px] lg:h-[238px] absolute right-[-19px]  lg:right-[-39px] top-[-19px] lg:top-[-39px]",
    picture: ["/shapes/obj1.svg", "object 1", 238, 319],
  },
  {
    positionSize:
      "h-[127px] lg:h-[293px] absolute left-[-48px]  lg:left-[-57px] bottom-[-22px] lg:bottom-[-54px]",
    picture: ["/shapes/obj2.svg", "object 2", 293, 297],
  },
];

const versions: Versions[] = [
  {
    name: "1.O",
    deadline: "Mar 16, 2024",
    status: "Released",
    title: "AI-Powered Ad Generation",
    subtitle:
      "You can now generate AI-powered ads effortlessly, streamlining the ad creation process and making it easier than ever to produce high-quality marketing visuals.",
    content: {
      item1: ["Instantly generate professional AI-driven ads."],
      item2: ["Customize ad elements for a tailored look."],
      item3: ["Save your favourite designs for future use."],
    },
    picture: "version0.svg",
  },
  {
    name: "1.1",
    deadline: "Mar 16, 2024",
    status: "released",
    title: "Export and Download",
    subtitle:
      "Now, you have full control over your AI-generated ads! This update lets you download and export your ads so you can save and retrieve them anytime, making your experience more seamless.",
    content: {
      item1: ["Download ads in PNG or JPEG format."],
      item2: ["Save your ads for later use"],
      item3: ["Retrieve saved ads"],
    },
    picture: "version1.svg",
  },
  {
    name: "1.2",
    deadline: "Mar 16, 2024",
    status: "released",
    title: "LLimited Trials & Sign-up Prompt",
    subtitle:
      "We’ve introduced a fair usage limit to encourage sign-ups. You can generate up to 5 ads per day before needing to sign up or wait for a reset.",
    content: {
      item1: ["Generate 5 ads per day for free"],
      item2: ["Once you hit the limit, choose between:"],
      item3: [
        "Signing up via Google authentication for unlimited access.",
        "Waiting a few hours for your limit to reset.",
      ],
    },
    picture: "version2.svg",
  },
  {
    name: "1.3",
    deadline: "Mar 16, 2024",
    status: "released",
    title: "Google Authentication",
    subtitle:
      "Signing up is now effortless with Google Authentication. No emails, no passwords—just quick access to unlimited ad generation.",
    content: {
      item1: ["Sign up with Google for unlimited ads"],
      item2: ["No email/password required"],
      item3: ["No email verification—instant access"],
    },
    picture: "version3.svg",
  },
  {
    name: "1.4",
    deadline: "Mar 16, 2024",
    status: "released",
    title: "Standalone Ad Pages",
    subtitle:
      " Every AI-generated ad now gets a unique page, making sharing easy. Share your ads as independent web pages without requiring users to log in.",
    content: {
      item1: ["Sign up with Google for unlimited ads"],
      item2: ["No email/password required"],
      item3: ["No email verification—instant access"],
    },
    picture: "version4.svg",
  },
  {
    name: "1.5",
    deadline: "Mar 16, 2024",
    status: "released",
    title: "Limited Trials & Sign-up Prompt",
    subtitle:
      "We introduced usage limits to encourage user sign-ups. Users can generate only 5 ads per day before needing to sign up or wait for a reset.",
    content: {
      item1: ["Users can generate up to 5 ads daily."],
      item2: ["After reaching the limit, users can either:"],
      item3: ["Sign up via Google authentication for unlimited access."],
    },
    picture: "version5.svg",
  },
];

const ChangeLogPage = () => {
  return (
    <main className="flex  flex-col items-center">
      <section className="w-full px-10 py-[37.5px] md:py-[93px] flex flex-col items-center bg-[#520052] relative overflow-hidden gap-4 m-auto">
        {shapes.map((image) => (
          <picture key={image.picture[0]} className={image.positionSize}>
            <Image
              src={image.picture[0]}
              alt={image.picture[1]}
              height={image.picture[2]}
              width={image.picture[3]}
              className="object-cover h-full w-auto"
            />
          </picture>
        ))}

        <button className="py-2 px-2 md:px-3 bg-[#FBE6F8] rounded-3xl border border-[#F8E6F8] flex gap-2 items-center">
          <Image
            src="/star-fall.svg"
            alt="star icon"
            height={24}
            width={24}
            className="size-4 md:size-6"
          />
          <span className="text-[#520052] text-[12px] md:text-base">
            ChangeLog
          </span>
        </button>
        <div className="max-w-[756px] m-auto flex flex-col gap-6">
          <h1 className="text-[28px] lg:text-[64px] font-medium text-center text-white">
            What’s New? Changelog & Updates
          </h1>

          <p className="text-[12px] md:text-[20px] text-center text-[#ECECEC] font-normal md:font-medium">
            HCheck out everything we’ve been working on to make your ad creation
            smoother, faster, and better!
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-6 md:gap-14 lg:gap-20 max-w-[960px] lg:mt-[103px] pb-[54px] lg:pb-24 mx-[40px] md:mx-[60px] lg:mx-[80px]">
        {versions.map((version) => (
          <Version
            key={version.title}
            name={version.name}
            deadline={version.deadline}
            status={version.status}
            title={version.title}
            subtitle={version.subtitle}
            content={version.content}
            picture={version.picture}
          />
        ))}
      </section>
    </main>
  );
};
export default ChangeLogPage;
