import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNpm, FaReact } from "react-icons/fa";
import { SiJavascript, SiMaterialui, SiNextdotjs, SiTailwindcss } from "react-icons/si";

interface ISkillProps {
}

const Skill: React.FunctionComponent<ISkillProps> = (props) => {
    return (
        <div className="w-2/3 bg-white bg-opacity-40 rounded-2xl flex justify-between flex-wrap gap-20 p-8 animate-zoom-in">
            <div className="max-w-[276px] border-b-8 rounded-lg border-orange-300 text-center">
                <div className="break-normal text-xl h-[60px">MARKUP / STYLING LANGUAGE</div>
                <div className="flex justify-around gap-8 p-4">
                    <div className="flex flex-col items-center gap-2">
                        <FaHtml5 size='50px' className="text-orange-500" />
                        <span>HTML</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <FaCss3Alt size='50px' className="text-blue-500" />
                        <span>CSS</span>
                    </div>
                </div>
            </div>
            <div className="max-w-[276px] border-b-8 rounded-lg border-orange-300 text-center">
                <div className="break-normal text-xl h-[60px]">CSS FRAMEWORK</div>
                <div className="flex justify-around gap-8 p-4">
                    <div className="flex flex-col items-center gap-2">
                        <SiTailwindcss size='50px' className="text-blue-500" />
                        <span>TAILWIND</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <SiMaterialui size='50px' className="text-blue-500" />
                        <span>MUI</span>
                    </div>
                </div>
            </div>
            <div className="max-w-[276px] border-b-8 rounded-lg border-orange-300 text-center">
                <div className="break-normal text-xl h-[60px]">PROGRAMMING LANGUAGE</div>
                <div className="flex justify-around gap-8 p-4">
                    <div className="flex flex-col items-center gap-2">
                        <SiJavascript size='50px' className="text-yellow-300 rounded-lg" />
                        <span>JAVA SCRIPT</span>
                    </div>
                </div>
            </div>
            <div className="max-w-[276px] border-b-8 rounded-lg border-orange-300 text-center">
                <div className="break-normal text-xl h-[60px]">JAVASCRIPT FRAMEWORK</div>
                <div className="flex justify-around gap-8 p-4">
                    <div className="flex flex-col items-center gap-2">
                        <FaReact size='50px' className="text-blue-500" />
                        <span>REACT JS</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <SiNextdotjs size='50px' className="text-black" />
                        <span>NEXT JS</span>
                    </div>
                </div>
            </div>
            <div className="max-w-[276px] border-b-8 rounded-lg border-orange-300 text-center">
                <div className="break-normal text-xl h-[60px]">PACKAGE MANAGEMENT</div>
                <div className="flex justify-around gap-8 p-4">
                    <div className="flex flex-col items-center gap-2">
                        <FaNpm size='50px' className="text-red-800 rounded-lg" />
                        <span>NPM</span>
                    </div>
                </div>
            </div>
            <div className="max-w-[276px] border-b-8 rounded-lg border-orange-300 text-center">
                <div className="break-normal text-xl h-[60px]">VERSION CONTROL</div>
                <div className="flex justify-around gap-8 p-4">
                    <div className="flex flex-col items-center gap-2">
                        <FaGithub size='50px' className="text-black" />
                        <span>GIT HUB</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <FaGitAlt size='50px' className="text-orange-600" />
                        <span>GIT</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
