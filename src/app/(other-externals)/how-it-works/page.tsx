import HowWorksHero from "../components/how-works-hero";
import StepEight from "../components/step-eight";
import StepOne from "../components/step-one";
import StepSeven from "../components/step-seven";
import StepSix from "../components/step-six";
import SignInSection from "../components/step-two";
import TryItNow from "../components/step-three";
import CustomizeSection from "../components/step-four";
import GenerateSec from "../components/step-five";
import CtaHowItWorks from "../components/how-it-works-cta";


const HowItWorksPage = () => {
  return (
    <div className="max-w-7xl w-full xl:mx-auto max-lg:px-4 pt-8 flex flex-col gap-14">
      <HowWorksHero />
      <StepOne />
      <SignInSection />
      < TryItNow />
      <CustomizeSection />
     <GenerateSec />
      <StepSix />
      <StepSeven />
      <StepEight />
      <CtaHowItWorks />
    </div>
  );
};

export default HowItWorksPage;