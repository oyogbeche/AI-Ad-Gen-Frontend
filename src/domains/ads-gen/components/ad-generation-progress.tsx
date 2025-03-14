import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AdGenerationProgress = () => {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 5;
        } else {
          clearInterval(interval);
          router.push("/preview-ad");
          return 100;
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div className="max-w-[609px] w-full mx-auto flex items-center justify-center h-[70vh] bg-[#E9E9E9] rounded-sm">
      <div className="flex flex-col gap-6 items-center justify-center rounded-md">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-6 border-gray-300 rounded-full"></div>
          <div className="absolute inset-0 border-6 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <h2 className="text-2xl text-[#121316] leading-8 font-semibold max-md:max-w-[338px]">
          Generating Your Image Ad... {progress}%
        </h2>
      </div>
    </div>
  );
};

export default AdGenerationProgress;
