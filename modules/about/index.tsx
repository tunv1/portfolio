import React, { useEffect, useState } from "react";
import AdditionalSkill from "./additional";
import Education from "./education";
import Experience from "./experience";
import Skill from "./skill";

interface IAboutProps {
}

export const About: React.FunctionComponent<IAboutProps> = (props) => {

  const [index, setIndex] = useState('1')
  const [showAbout, setShowAbout] = useState(false)

  useEffect(() => {
    const handleScrool = () => {
      if (window.scrollY > 500) setShowAbout(true)
    }
    window.addEventListener('scroll', handleScrool)
    return () => {
      window.removeEventListener('scroll', handleScrool)
    }
  }, [])

  const handleChangeIndex = (event: React.MouseEvent<HTMLDivElement>) => {
    setIndex(event.currentTarget.id)
  }

  return (
    <div className="w-full py-28 flex flex-col items-center gap-10 overflow-hidden min-h-[1000px]" id='about'>
      <div className="text-center pt-10 font-sans font-bold text-9xl animate-text-shadow">ABOUT ME</div>
      <div className="flex justify-around items-center w-1/2 h-20 rounded-full bg-white bg-opacity-40">
        <div
          id='1'
          onClick={handleChangeIndex}
          className={`rounded-full p-2 cursor-pointer underline-offset-2 decoration-orange-300 hover:underline hover:scale-110 rounded-full ${index == '1' && 'bg-orange-900'}`}>MY SKILLS
        </div>
        <div
          id='2'
          onClick={handleChangeIndex}
          className={`rounded-full p-2 cursor-pointer underline-offset-2 decoration-orange-300 hover:underline hover:scale-110 rounded-full ${index == '2' && 'bg-orange-900'}`}>EDUCATION
        </div>
        <div
          id='3'
          onClick={handleChangeIndex}
          className={`rounded-full p-2 cursor-pointer underline-offset-2 decoration-orange-300 hover:underline hover:scale-110 rounded-full ${index == '3' && 'bg-orange-900'}`}>EXPERENCE
        </div>
        <div
          id='4'
          onClick={handleChangeIndex}
          className={`rounded-full p-2 cursor-pointer underline-offset-2 decoration-orange-300 hover:underline hover:scale-110 rounded-full ${index == '4' && 'bg-orange-900'}`}>ADDITIONAL SKILLS
        </div>
      </div>
      {index === '1' && showAbout && <Skill />}
      {index === '2' && <Education />}
      {index === '3' && <Experience />}
      {index === '4' && <AdditionalSkill />}
    </div>
  );
};