import { FaLaptopCode } from "react-icons/fa";

interface IExperienceProps {
}

const Experience: React.FunctionComponent<IExperienceProps> = (props) => {
    return (
        <div className="w-2/3 bg-white bg-opacity-40 rounded-2xl flex flex-col items-center gap-3 p-8 animate-zoom-in text-xl">
            <FaLaptopCode size='50px' />
            <div>March 2022 - now</div>
            <div>Industrial training (intership)</div>
            <div>Front End Developer</div>
            <div>VMO Holding, Ha Noi</div>
            <ul className="list-disc px-8 text-white">
                <li>Gained extensive training and experience in web designing and web development using latest technology.</li>
                <li>Learned how use open source platforms in an effective and quick way to resolve problems and bugs in code.</li>
                <li>Gained experience on working in a real life tech environment and working along side seasoned and experienced developers and professionals.</li>
                <li>Worked in Team along with other developers as well as in individual capacity on projects.</li>
                <li>Received extremely positive feedback and review from all the mentor.</li>
                <li>Designed a fully functional dynamic e-commerce webapp and 3 more major projects along with multiple minor projects from scratch as a part of training.</li>
            </ul>
        </div>
    );
};

export default Experience;
