import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";



const Hero = () => {
  const [showDeveloper, setShowDeveloper] = useState(true);
  const lettersRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    // First Animation: Fade in each letter of "Developer"
    tl.to(lettersRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.inOut"
    })
    // Second Animation: Fade out each letter of "Developer" in reverse order
    .to(lettersRef.current.reverse(), {
      opacity: 0,
      y: -20,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.inOut",
      onComplete: () => {
        setShowDeveloper(false);
      }
    })
    // Third Animation: Fade in each letter of "Swarnali"
    .to(lettersRef.current.reverse(), {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.inOut"
    });
  }, []);

  const developerLetters = Array.from("Developer", (char, index) => (
    <span key={index} ref={el => lettersRef.current[index] = el} style={{ opacity: 0, color:"#955EFF" }}>
      {char}
    </span>
  ));

  const swarnaliLetters = Array.from("Swarnali", (char, index) => (
    <span key={index} ref={el => lettersRef.current[index] = el} style={{ opacity: 0,color:"#955EFF" }}>
      {char}
    </span>
  ));

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span>
              {showDeveloper ? developerLetters : swarnaliLetters}
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <div className='w-3 h-3 rounded-full bg-secondary mb-1' />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
