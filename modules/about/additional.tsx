
interface IAdditionalSkillProps {
}

const AdditionalSkill: React.FunctionComponent<IAdditionalSkillProps> = (props) => {
    return (
        <div className="w-2/3 bg-white bg-opacity-40 rounded-2xl flex flex-col gap-3 p-8 animate-zoom-in text-xl">
            <div className="text-3xl text-center">SOFT SKILLS</div>
            <li className="list-disc text-2xl">Communication & Interpersonal skills</li>
            <div className="pl-12">Have the ability to communicate the desired message effectively while keeping the listener engaged.</div>
            <li className="list-disc text-2xl">Public speaking skills</li>
            <div className="pl-12">Have extensive experience of public speaking in the form of event hosting and delivering presentation in front of large audience. Also participated in in multiple debate and MUN competetions which further helped in developing these skills.</div>
            <li className="list-disc text-2xl">Quick & Visual Learner</li>
            <div className="pl-12">I am a very strong visual learner and am determined to solve problems and quickly find an effective solution.</div>
            <li className="list-disc text-2xl">Effective Problem Solver</li>
            <div className="pl-12">I have the capability to solve problems and determining the cause of the problem. Identifying, prioritizing, and selecting alternatives for a solution; and implementing a solution.</div>
        </div>
    );
};

export default AdditionalSkill;
