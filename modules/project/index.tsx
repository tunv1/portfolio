import ProjectCard from "../../components/card/projectCard";

interface IProjectProps {
}

export const Project: React.FunctionComponent<IProjectProps> = (props) => {

    return (
        <div className="w-full py-28 flex flex-col items-center gap-10 overflow-hidden min-h-[1000px]" id='project'>
            <div className="text-2xl">CASE STUDIES</div>
            <div className="text-4xl">Project Work</div>
            <div className="flex justify-center gap-8 flex-wrap w-full overflow-hidden p-12">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    );
};