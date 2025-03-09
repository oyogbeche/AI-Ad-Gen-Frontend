import Image from "next/image";

interface Shape {
  positionSize: string;
  picture: [src: string, alt: string, height: number, width: number];
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

const ChangeLogPage = () => {
  return (
    <main>
      <section className="w-full px-10 py-[37.5px] md:py-[93px] flex flex-col items-center bg-[#520052] relative overflow-hidden gap-4">
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
            The Evolution of Genz.ad
          </h1>

          <p className="text-[12px] md:text-[20px] text-center text-[#ECECEC] font-normal md:font-medium">
            Here’s a look at what’s new! From exciting features to
            behind-the-scenes enhancements, we’re continuously improving your
            experience.
          </p>
        </div>
      </section>
    </main>
  );
};
export default ChangeLogPage;
