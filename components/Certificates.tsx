import Image from "next/image";
import Wrapper from "./Wrapper";
import React from "react";
import Tilt from "./Tilt";
import { useTranslation } from "next-i18next";
import i18next from "i18next";

interface CertificatesProps {
  title: string;
  description: string;
}

export default function Certificates() {
  const { t } = useTranslation();
  const certificates: CertificatesProps[] = t("home:certificatesCards", {
    returnObjects: true,
  });
  console.log(certificates);
  return (
    <Wrapper className="flex flex-col items-center justify-center">
      <h3 className="mb-32 text-2xl text-primary">s</h3>
      <section className="flex flex-col gap-40 mt-16 lg:gap-12 lg:flex-row">
        {certificates.map((certificate, i) => (
          <div
            key={i}
            className="relative flex flex-col px-5 pt-10 pb-5 text-center bg-black rounded-md w-80 text-primary"
          >
            <div className="absolute flex items-center self-center text-center -top-32">
              <Tilt>
                <Image
                  alt={certificate.title}
                  src="/images/certificates/fiap.png"
                  width={120}
                  height={120}
                />
              </Tilt>
            </div>
            <div>
              <p>{certificate.title}</p>
              <p className="mt-4 text-justify break-all">
                {certificate.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </Wrapper>
  );
}
