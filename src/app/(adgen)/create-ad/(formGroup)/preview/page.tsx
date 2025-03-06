import Link from "next/link";
import PreviewContent from "./_components/preview-content";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
      <section className="flex flex-col items-center justify-center gap-8 w-full max-w-[879px] mx-auto bg-white rounded-[20px] py-18">
        <Card className="w-full max-w-[890px]">
                <CardContent className="p-14">
                  <div className="mb-8">
                    <Link
                      href="/create-ad"
                      className="flex items-center text-gray-600 hover:text-gray-800 cursor-pointer p-0"
                    >
                      <Image
                        src="/arrow-left.svg"
                        alt="Back"
                        className="w-5 h-5 mr-2"
                        width={10}
                        height={10}
                      />
                      <span>Back</span>
                    </Link>
                  </div>

                      <CardHeader className="p-0 mb-6 text-center">
                              <CardTitle className="text-2xl font-bold">
                                Let&apos;s set up your Image Ad
                              </CardTitle>
                              <p className="text-gray-500 mt-2">
                                Fill in the details below, then AI generates your ad instantly.
                              </p>
                            </CardHeader>
                  
                            <div className="mb-8">
                              <div className="flex justify-around items-center">
                                <div className="text-center">
                                  <p className="text-sm text-black font-medium">STEP 1</p>
                                  <p className="text-xs mt-1 text-gray-700">Set Ad goals</p>
                                </div>
                  
                                <div className="text-center">
                                  <p className="text-sm text-gray-400 font-medium">STEP 2</p>
                                  <p className="text-xs mt-1 text-gray-400">Preview</p>
                                </div>
                              </div>
                  
                              <div className="relative w-full h-2 bg-white-200 rounded-full mt-4 mb-4">
                                <div className="absolute left-0 h-2 bg-[#1467C5] rounded-l-full w-[48%]"></div>
                  
                                <div className="absolute right-0 h-2 bg-[#1467c5] rounded-r-full w-[48%]"></div>
                              </div>
                            </div>
        <PreviewContent />

        </CardContent>
        </Card>
      </section>
  );
}
