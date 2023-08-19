import { useTranslation } from "next-i18next";

import AvatarPicker from "./AvatarPicker";
export default function Introduction() {
  const { t } = useTranslation();
  return (
    <section className="flex items-center justify-center text-left lg:justify-between lg:px-40 my-14">
      <AvatarPicker />
      <article className="flex flex-col gap-4 basis-3/4">
        <p className="flex items-center text-5xl font-semibold font-quicksand lg:text-6xl">
          {t(`home:aboutTitle`)}
          <span className="text-5xl text-tertiary">.</span>
        </p>
        <p className="text-2xl text-justify" id="competences">
          {t(`home:aboutBody`)}
        </p>
      </article>
    </section>
  );
}
