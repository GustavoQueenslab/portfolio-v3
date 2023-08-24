import ProjectCard from "@/components/Projects/ProjectItem";

export default function Projects({ projects }) {
  if (!projects) return <></>;
  return (
    <section className="flex flex-col items-center py-16">
      <p className="text-3xl font-bold font-quicksand">{projects.title}</p>
      <div className="w-8 h-1 mt-1 bg-tertiary" />
      <section className="grid grid-cols-1 gap-4 mx-8 mt-16 lg:gap-16 justify-items-center lg:grid-cols-2 xl:grid-cols-3">
        {projects.items.map((project) => (
          <ProjectCard key={project._uid} project={project} />
        ))}
      </section>
    </section>
  );
}
