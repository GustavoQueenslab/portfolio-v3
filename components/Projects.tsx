import ProjectCard from "./ProjectCard";
import ProjectsData from "../lib/projects";
export default function Projects() {
  return (
    <section className="py-20 text-center">
      <p>Projects</p>
      <section className="grid grid-cols-1 gap-4 mx-8 mt-10 lg:mx-56 lg:gap-20 justify-items-center lg:grid-cols-2 xl:grid-cols-3">
        {ProjectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            subtitle={project.subtitle}
            image={project.image}
            imageHeight={project.imageHeight}
            imageWidth={project.imageWidth}
          />
        ))}
      </section>
    </section>
  );
}
