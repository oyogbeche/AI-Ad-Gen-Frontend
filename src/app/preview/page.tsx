import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Preview() {
    return (
        <section className="flex flex-col items-center justify-center gap-8 w-full max-w-[879px] mx-auto px-4 py-6 bg-white rounded-[20px] mt-10">
            <Link className="self-start flex gap-2.5" href='/'>
                <ChevronLeft size={24} />
                Back
            </Link>
            <h1 className="text-[28px] font-[600] leading-9 mt-[12px]">Let’s set up your Ad</h1>
            <p className="text-[#667185] text-[18px] mt-[-32px]">Fill in the details below, then AI generates your ad instantly.</p>
            <div className="flex items-center justify-between gap-1 mt-8 w-full max-w-[879px] px-4">
                <div className="flex flex-col justify-center items-center text-center w-1/2 border-b-4 border-blue-600 pb-6">
                    <h4>STEP 1</h4>
                    <p className="font-[700] leading-5 text-[14px]">Set Ad goals</p>
                </div>
                <svg width="2" height="24" viewBox="0 0 2 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="1" y1="4.37114e-08" x2="0.999999" y2="24" stroke="#CFCFCF" strokeWidth="2"/>
</svg>

                <div className="flex flex-col justify-center items-center text-center w-1/2 border-b-4 border-[#1467C5] pb-6">
                    <h4>STEP 2</h4>
                    <p className="font-[700] leading-5 text-[14px]">Preview</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <Image className="rounded-[8px]" src='/images/man-holding-juice.jpg' height={374} width={404} alt="man-holding-juice" />
                <Image className="rounded-[8px]" src='/images/sdyc.jpg' height={374} width={404} alt="man-holding-juice" />
                <Image className="rounded-[8px]" src='/images/coca-cola.jpg' height={374} width={404} alt="man-holding-juice" />
                <Image className="rounded-[8px]" src='/images/orange-juice.jpg' height={374} width={404} alt="man-holding-juice" />
            </div>
        </section>
    )
}