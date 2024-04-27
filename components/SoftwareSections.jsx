import {
  FaAngular,
  FaAws,
  FaCss3,
  FaFigma,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaWordpress,
} from "react-icons/fa";

import {
  FaLaravel,
  FaVuejs,
  FaDatabase,
  FaStripe,
  FaFirebase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
  SiFirebase,
  SiDotnet,
  SiPrisma,
  SiWebgl,
  SiWebflow,
  SiFramer,
} from "react-icons/si";

function SoftwareSections() {
  return (
    <>
      <section className="p-6 md:p-20 rounded-3xl bg-black">
        <h1 className="text-xl md:text-3xl text-white">
          {" "}
          Frameworks and Softwares we work with
        </h1>
        <div className="flex gap-6 md:gap-10 items-center flex-wrap py-8">
          <FaPython className="text-white md:text-4xl" />
          <FaPhp className="text-white text-4xl" />
          <FaJava className="text-white text-4xl" />
          <FaJs className="text-white text-4xl" />
          <FaReact className="text-white text-4xl" />
          <FaNodeJs className="text-white text-4xl" />
          <FaHtml5 className="text-white text-4xl" />
          <FaCss3 className="text-white text-4xl" />
          <FaLaravel className="text-white text-4xl" />
          <FaVuejs className="text-white text-4xl" />
          <FaDatabase className="text-white text-4xl" />
          <FaStripe className="text-white text-4xl" />
          <SiTailwindcss className="text-white text-4xl" />
          <SiTypescript className="text-white text-4xl" />
          <SiMongodb className="text-white text-4xl" />
          <SiNextdotjs className="text-white text-4xl" />
          <SiFirebase className="text-white text-4xl" />
          <FaFigma className="text-white text-4xl" />
          <FaWordpress className="text-white text-4xl" />
          <FaAngular className="text-white text-4xl" />
          <SiDotnet className="text-white text-4xl" />
          <SiPrisma className="text-white text-4xl" />
          <FaGit className="text-white text-4xl" />
          <FaGithub className="text-white text-4xl" />
          <SiWebgl className="text-white text-4xl" />
          <SiWebflow className="text-white text-4xl" />
          <SiFramer className="text-white text-4xl" />
          <FaAws className="text-white text-4xl" />
        </div>
      </section>
    </>
  );
}

export default SoftwareSections;
