import EachProject from "@/components/Eachprojects";
import { PastProjects } from "@/data";
function Projects() {
  return (
    <>
      <section className="md:w-4/6 mx-auto px-8 md:pt-32 pt-10">
        <h1 className="text-xl md:text-5xl font-bold my-8">
          All past Projects
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {PastProjects.map((project) => (
            <EachProject key={project.id} {...project} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
