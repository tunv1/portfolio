import { FaBook, FaSchool, FaUserGraduate } from "react-icons/fa";

interface IEducationProps {
}

const Education: React.FunctionComponent<IEducationProps> = (props) => {
    return (
        <div className="flex gap-4 w-2/3 animate-zoom-in text-xl">
            <div className="w-1/2 bg-white bg-opacity-40 rounded-xl p-8 flex flex-col gap-4">
                <FaUserGraduate size='50px' />
                <div>2017 - 2022</div>
                <div>UNDER-GRADUATION</div>
                <div className="text-white">Computer Science Engineeing</div>
                <div className="text-white">GPA - 2.9/4</div>
                <div>HANOI UNIVERSITY OF INDUSTRY</div>
                <ul className="list-disc pl-8 text-white">
                    <li>Graduated in Computer Science Engineeing</li>
                    <li>studied concepts of computers and computing systems, processes and how computers work, improve and enhance the performance of axlorithms, new technologies, computer-human communication.</li>
                    <li>Part of multiple technical and non-technical society and hosted and lead multiple events for the same showcasing exemplary leadership and team skills</li>
                </ul>
            </div>
            <div className="w-1/2 bg-white bg-opacity-40 rounded-xl p-8 flex flex-col gap-4">
                <FaSchool size='50px' />
                <div>2017</div>
                <div className="text-white">Class 12</div>
                <div>Lien Ha highschool, Ha Noi</div>
                <ul className="list-disc pl-8 text-white">
                    <li>Had exemplary academic track record with multiple academic excellence award.</li>
                    <li>Represented school on multiple platforms including on national level.</li>
                </ul>
            </div>
        </div>
    );
};

export default Education;
