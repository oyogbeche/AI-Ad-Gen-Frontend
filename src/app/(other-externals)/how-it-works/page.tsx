import HowWorksHero from "../components/how-works-hero";
import StepOne from "../components/step-one";
import SignInSection from "../components/step-two";
import TryItNow from "../components/step-three";
import CustomizeSection from "../components/step-four";
import GenerateSec from "../components/step-five";
import CtaHowItWorks from "../components/how-it-works-cta";
import PreviewAd from "../components/step-six";
import DownloadAd from "../components/step-seven";
import ShareAd from "../components/step-eight";

const HowItWorksPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#F9F9F9] to-white to-24.5 px-4 md:px-5">
      <HowWorksHero />
      <div className="max-w-7xl w-full xl:mx-auto max-lg:px-4 pt-8 flex flex-col gap-6 lg:gap-14">
        <StepOne />
        <SignInSection />
        <TryItNow />
        <CustomizeSection />
        <GenerateSec />
        <PreviewAd />
        <DownloadAd />
        <ShareAd />
        <CtaHowItWorks />
      </div>
    </div>
  );
};

export default HowItWorksPage;
