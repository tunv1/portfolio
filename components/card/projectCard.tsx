import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css"
import { FaArrowRight, FaCss3, FaGitAlt, FaHtml5, FaNpm, FaReact } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Link from "next/link";

interface IProjectCardProps {
}

const ProjectCard: React.FunctionComponent<IProjectCardProps> = (props) => {

    const [addAnimate, setAddAnimate] = useState(false)

    useEffect(() => {
        const handleAddAnimate = () => {
            if (window.scrollY > 1300) { setAddAnimate(true) }
        }
        window.addEventListener("scroll", handleAddAnimate)
        return () => {
            window.removeEventListener("scroll", handleAddAnimate)
        }
    }, [])

    return (
        <div className={`rounded-3xl w-[30%] bg-white bg-opacity-40 p-8 text-center flex flex-col gap-5 ${addAnimate && 'animate-top-down'}`}>
            <div className="relative w-full aspect-video"><Image src='/portfolio-ui.png' layout="fill" className="rounded-3xl" /></div>
            <div className="text-3xl">PORTFOLIO WEBSITE</div>
            <div className="text-2xl">Next Based Portfolio Website</div>
            <div className="text-left text-xl">Key Features</div>
            <div className="list-disc text-left pl-4 text-white">
                <li>Fully responsive front end, back end web page setup along with integrated database setup.</li>
                <li>Created all the components from scratch using react and java script.</li>
                <li>Hand coded custom amination using css and Jquery and making the website interactive.</li>
                <li>Worked on how to deploy a live website.</li>
            </div>
            <div className="text-left underline">Technology Used</div>
            <div className="flex gap-2 text-white">
                <FaHtml5 size='20' />
                <FaCss3 size='20' />
                <SiJavascript size='20' />
                <SiTailwindcss size='20' />
                <FaReact size='20' />
                <SiNextdotjs size='20' />
                <FaNpm size='20' />
                <FaGitAlt size='20' />
            </div>
            <div className="flex justify-between">
                <Link href='https://portfolio-bt8lyd6hs-tunv1.vercel.app' passHref>
                    <a
                        target="_blank"
                        className={`${styles.buttonEffect} p-2 border-2 border-blue-300 flex gap-2 w-36 cursor-pointer`}>
                        <div>Live Demo</div>
                        <FaArrowRight />
                    </a>
                </Link>
                <Link href='https://github.com/tunv1/portfolio' passHref>
                    <a
                        target="_blank"
                        className={`${styles.buttonEffect} p-2 border-2 border-blue-300 flex gap-2 w-36 cursor-pointer`}>
                        <div>Source Code</div>
                        <FaArrowRight />
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
