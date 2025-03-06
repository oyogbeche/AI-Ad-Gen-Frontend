
import Image from "next/image";


import Link from "next/link";

const AuthNav = () => {
    return ( <div className="w-full flex  bg-[#F9FAFB] justify-center items-center px-3 py-4 border-b-[1px] border-[#E8E9E9] ">

        <Link href="/">
        <div className="w-full cursor-pointer flex items-center justify-center"> 
              <Image alt="Logo" src="Logo.svg" width={150} height={150}/> 
        </div>
        </Link>

      
    </div> );
}
 
export default AuthNav;