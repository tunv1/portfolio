import Image from "next/image";

interface IHomeProps {
}

export const Home: React.FunctionComponent<IHomeProps> = (props) => {
    return (
        <div className="flex justify-around items-center h-screen w-full text-center relative overflow-hidden">
            <div className="flex flex-col gap-5 w-1/4 text-2xl animate-right-to-left">
                <span>Hi,</span>
                <span>I&apos;m Tu Nguyen</span>
                <div className="relative h-8">
                    <div className="absolute w-full text-orange-300 animate-scale [animation-delay:-6s]">Front End Developer</div>
                    <div className="absolute w-full text-orange-300 animate-scale [animation-delay:-3s]">Web Designer</div>
                </div>
                <span>I build interactive websites that run
                    across platforms & devices.</span>
            </div>
            <span className="w-1/3 font-dancing-script text-[200px] font-black [text-shadow:3px_4px_40px] animate-left-to-right">TN.</span>
            <div className="bg-wave bg-repeat-x w-[5000px] h-[200px] absolute bottom-0 left-0 right-0 animate-wave [animation-delay:-10]" />
            <div className="bg-wave bg-repeat-x w-[5000px] h-[200px] absolute bottom-0 left-0 right-0 animate-wave [animation-delay:-8]" />
            <div className="bg-wave bg-repeat-x w-[5000px] h-[200px] absolute bottom-0 left-0 right-0 animate-wave [animation-delay:-6s]" />
            <div className="bg-wave bg-repeat-x w-[5000px] h-[200px] absolute bottom-0 left-0 right-0 animate-wave [animation-delay:-4s]" />
            <div className="bg-wave bg-repeat-x w-[5000px] h-[200px] absolute bottom-0 left-0 right-0 animate-wave [animation-delay:-2s]" />
        </div>
    );
};