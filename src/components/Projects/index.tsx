import ProjectCard from "@/components/Projects/ProjectItem";

export default function Projects({ projects }) {
  if (!projects) return <></>;
  return (
    <section className="py-20 text-center" id="projects">
      <p className="text-3xl font-bold font-quicksand">{projects?.title}</p>
      <section className="grid grid-cols-1 gap-4 mx-8 mt-10 lg:mx-56 lg:gap-20 justify-items-center lg:grid-cols-2 xl:grid-cols-3">
        {projects.items.map((project) => (
          <ProjectCard key={project._uid} project={project} />
        ))}
      </section>
    </section>
  );
}
