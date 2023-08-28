import AvatarPicker from "@/components/Avatar/index";

export default function Introduction({ introduction }) {
  if (!introduction) return <></>;
  return (
    <section className="flex items-center justify-center gap-10 text-left lg:justify-between lg:px-40 my-14">
      <div className="hidden lg:block basis-1/3">
        <AvatarPicker />
      </div>
      <article className="flex flex-col gap-4 mt-6 basis-2/3">
        <p className="flex items-center justify-center text-5xl font-semibold lg:justify-start font-quicksand lg:text-6xl">
          {introduction.title}
          <span className="ml-3 text-6xl text-tertiary">.</span>
        </p>
        <div>
          <p className="text-2xl text-justify" id="competences">
            {introduction.description}
          </p>
        </div>
      </article>
    </section>
  );
}
