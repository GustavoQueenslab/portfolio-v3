import Wrapper from "./Wrapper";
import React from "react";
import { useTranslation } from "next-i18next";
import TiltedCard from "./TiltedCard";

export interface TiltedCardProps {
  title: string;
  description: string;
  image: string;
}
export default function Certificates() {
  const { t } = useTranslation();
  const certificates: TiltedCardProps[] = t("home:certificatesCards", {
    returnObjects: true,
  });
  return (
    <Wrapper
      className="flex flex-col items-center justify-center"
      id="certificates"
    >
      <h3 className="mb-32 text-3xl font-semibold text-primary font-quicksand">
        Certificates
      </h3>
      <section className="flex flex-col gap-40 mt-16 lg:gap-12 lg:flex-row">
        {certificates.map((certificate, i) => (
          <TiltedCard
            key={i}
            title={certificate.title}
            description={certificate.description}
            image={certificate.image}
          />
        ))}
      </section>
    </Wrapper>
  );
}
