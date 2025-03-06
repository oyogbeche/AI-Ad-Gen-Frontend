interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {

  return (
    <>
        <div className="flex flex-col gap-4 text-center mb-4">
          <h1 className="text-[28px] font-[600] leading-9 mt-[12px]">
            Let&apos;s set up your Ad
          </h1>
          <p className="text-[#667185] text-[18px]">
            Fill in the details below, then AI generates your ad instantly.
          </p>
          <div className="flex items-center justify-between gap-2 mt-8 w-full ">
            <div className="relative flex flex-col justify-center items-center text-center w-1/2 pb-6">
              <h4>STEP 1</h4>
              <p className="font-[700] leading-5 text-[14px]">Set Ad goals</p>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1.5 bg-[#1467C5] rounded-full"></div>
            </div>
            
            <svg
              width="2"
              height="24"
              viewBox="0 0 2 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1"
                y1="4.37114e-08"
                x2="0.999999"
                y2="24"
                stroke="#CFCFCF"
                strokeWidth="2"
              />
            </svg>

            <div className="relative flex flex-col justify-center items-center text-center w-1/2 pb-6">
              <h4>STEP 2</h4>
              <p className="font-[700] leading-5 text-[14px]">Preview</p>
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1.5 ${'bg-[#1467C5]'} rounded-full`}></div>
            </div>
          </div>
        </div>
        {children}
      </>
  );
};

export default Page;
