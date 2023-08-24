import React from "react";

import CertificateItem from "@/components/Certificated/CertificateItem";
import Wrapper from "@/components/Wrapper";

export default function Certificates({ certificates }) {
  if (!certificates) return <></>;

  return (
    <section className="flex flex-col items-center">
      <p className="text-3xl font-bold font-quicksand">{certificates.title}</p>
      <div className="w-8 h-1 mt-1 bg-tertiary" />
      <Wrapper
        className="flex flex-col items-center justify-center mt-12"
        id="certificates"
      >
        <section className="flex flex-col gap-40 mt-32 lg:gap-12 lg:flex-row">
          {certificates.items.map((certificate) => (
            <CertificateItem key={certificate._uid} certificate={certificate} />
          ))}
        </section>
      </Wrapper>
    </section>
  );
}
