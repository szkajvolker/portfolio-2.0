import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Section from "./Section";
import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeamsWithCollision";

function Home() {
  const parallaxRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".anim-span", { opacity: 0 }, { opacity: 1, stagger: 1, delay: 1 });
  });

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPadding
      crossesSide
      id="home"
    >
      <div className="container mt-[5rem] mb-[15rem]" ref={parallaxRef}>
        <BackgroundBeamsWithCollision className="bg-n-8 h-full">
          <div className=" relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem] lg:mt-[6rem]">
            <h1 className="h1 mb-6">
              <span className="anim-span">Hi, my name is</span>
              <span className="anim-span text-purple-300"> Istvan Szabo</span>
              <br />
              <span className="text-purple-300 anim-span">Front End Developer</span>
              <br />
              <span className="anim-span">Check out my story below</span>
            </h1>
          </div>
        </BackgroundBeamsWithCollision>
      </div>
    </Section>
  );
}

export default Home;
