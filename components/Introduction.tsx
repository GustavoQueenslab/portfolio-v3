import AvatarPicker from "./AvatarPicker";
export default function Introduction() {
  return (
    <section className="flex items-center justify-center text-left lg:justify-between lg:px-40 my-14">
      <AvatarPicker />
      <article className="flex flex-col gap-4 basis-3/4">
        <p className="flex items-center text-5xl font-semibold font-quicksand lg:text-6xl">
          About me <span className="text-5xl text-tertiary">.</span>
        </p>
        <p className="text-2xl text-justify">
          Hey!!! I&apos;m Gustavo Ferreira, a 19 years Front-End developer and a
          technology student. I develop modern, responsive and high quality
          interfaces. I currently live in Lisbon. See more about my projects and
          and visit my social medias :)
        </p>
      </article>
    </section>
  );
}
