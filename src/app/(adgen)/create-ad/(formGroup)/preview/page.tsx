import PreviewContent from "./_components/preview-content";

import BackButton from "@/components/back-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 w-full max-w-[879px] mx-auto rounded-[20px] pt-10 pb-[103px] px-6">
      <Card className="w-full max-w-[890px] border-none shadow-none py-0">
        <CardContent className="py-6 px-4 md:px-8">
          <BackButton className="mb-8" />

          <CardHeader className="mb-6 md:mb-8 text-left md:text-center px-0">
            <CardTitle className="text-[28px] leading-[36px] text-[#121316] font-semibold">
              Let&apos;s set up your Image Ad
            </CardTitle>
            <p className="text-[#667185] text-[18px] font-normal mt-1">
              Fill in the details below, then AI generates your ad instantly.
            </p>
          </CardHeader>

          <div className="mb-6 md:mb-8">
            <div className="flex justify-around items-center max-md:mr-4">
              <div className="text-center">
                <p className="text-xs font-semibold leading-4 text-[#121316]">
                  STEP 1
                </p>
                <p className="text-sm mt-[3px] font-bold leading-5 text-[#121316]">
                  Set Ad goals
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold leading-4 text-[#121316]">
                  STEP 2
                </p>
                <p className="text-sm mt-[3px] font-bold leading-5 text-[#121316]">
                  Preview
                </p>
              </div>
            </div>

            <div className="relative w-full h-2.5 bg-white-200 rounded-full mt-6">
              <div className="absolute left-0 h-2 bg-[#1467C5] rounded-full w-[47%] md:w-[49%]"></div>

              <div className="absolute right-0 h-2 bg-[#1467c5] rounded-full w-[47%] md:w-[49%]"></div>
            </div>
          </div>
          <PreviewContent />
        </CardContent>
      </Card>
    </section>
  );
}
