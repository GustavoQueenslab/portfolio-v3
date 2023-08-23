import React from "react";

import CertificateItem from "@/components/Certificated/CertificateItem";
import Wrapper from "@/components/Wrapper";

export default function Certificates({ certificates }) {
  if (!certificates) return <></>;

  return (
    <Wrapper
      className="flex flex-col items-center justify-center"
      id="certificates"
    >
      <h3 className="mb-32 text-3xl font-semibold text-primary font-quicksand">
        {certificates.title}
      </h3>
      <section className="flex flex-col gap-40 mt-16 lg:gap-12 lg:flex-row">
        {certificates.items.map((certificate) => (
          <CertificateItem key={certificate._uid} certificate={certificate} />
        ))}
      </section>
    </Wrapper>
  );
}
