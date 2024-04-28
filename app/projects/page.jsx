import EachProject from "@/components/Eachprojects";

function Projects() {
  return (
    <>
      <section className="md:w-4/6 mx-auto p-8">
        <h1 className="text-xl md:text-5xl font-bold my-8">
          All past Projects
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          <EachProject />
          <EachProject />
          <EachProject />
          <EachProject />
          <EachProject />
          <EachProject />
          <EachProject />
          <EachProject />
          <EachProject />
          <EachProject />
          <EachProject />
        </div>
      </section>
    </>
  );
}

export default Projects;
