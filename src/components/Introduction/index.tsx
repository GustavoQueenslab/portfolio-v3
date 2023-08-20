import { useTranslation } from "next-i18next";

import AvatarPicker from "../Avatar";

export default function Introduction() {
  const { t } = useTranslation();
  return (
    <section className="flex items-center justify-center gap-10 text-left lg:justify-between lg:px-40 my-14">
      <div className="hidden lg:block basis-1/3">
        <AvatarPicker />
      </div>
      <article className="flex flex-col gap-4 basis-2/3">
        <p className="flex items-center text-5xl font-semibold font-quicksand lg:text-6xl">
          {t(`home:aboutTitle`)}
          <span className="text-5xl text-tertiary">.</span>
        </p>
        <p className="text-2xl text-center lg:text-justify" id="competences">
          {t(`home:aboutBody`)}
        </p>
      </article>
    </section>
  );
}
