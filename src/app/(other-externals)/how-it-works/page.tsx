import HowWorksHero from "../components/how-works-hero";
import StepEight from "../components/step-eight";
import StepOne from "../components/step-one";
import StepSeven from "../components/step-seven";
import StepSix from "../components/step-six";

const HowItWorksPage = () => {
  return (
    <div className="max-w-7xl w-full xl:mx-auto max-lg:px-4 pt-8 flex flex-col gap-14">
      <HowWorksHero />
      <StepOne />
      <StepSix />
      <StepSeven />
      <StepEight />
    </div>
  );
};

export default HowItWorksPage;