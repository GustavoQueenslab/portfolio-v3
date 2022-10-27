import Image from "next/image";
import Wrapper from "./Wrapper";
import React from "react";
import Tilt from "./Tilt";
export default function Certificates() {
  return (
    <Wrapper className="flex flex-col items-center justify-center">
      <h3 className="mb-32 text-2xl text-primary">Certificates</h3>
      <section className="flex flex-col gap-40 mt-16 lg:gap-12 lg:flex-row">
        <div className="relative flex flex-col px-5 pt-10 pb-5 text-center bg-black rounded-md w-80 text-primary">
          <div className="absolute flex items-center self-center text-center -top-32">
            <Tilt>
              <Image
                alt="FIAP"
                src="/images/certificates/fiap.png"
                width={120}
                height={120}
              />
            </Tilt>
          </div>
          <div>
            <p>MTA 98-364</p>
            <p className="mt-4 text-justify break-all">
              Microsoft certificate of database fundamentals using SQL Server.
              Click here
            </p>
          </div>
        </div>
        <div className="relative flex flex-col px-5 pt-10 pb-5 text-center bg-black rounded-md w-80 text-primary">
          <div className="absolute flex items-center self-center text-center -top-32">
            <Tilt>
              <Image
                alt="FIAP"
                src="/images/certificates/mta-1.png"
                width={120}
                height={120}
              />
            </Tilt>
          </div>
          <div>
            <p>MTA 98-364</p>
            <p className="mt-4 text-justify break-all">
              Microsoft certificate of database fundamentals using SQL Server.
              Click here
            </p>
          </div>
        </div>
        <div className="relative flex flex-col px-5 pt-10 pb-5 text-center bg-black rounded-md w-80 text-primary">
          <div className="absolute flex items-center self-center text-center -top-32">
            <Tilt>
              <Image
                alt="FIAP"
                src="/images/certificates/mta-1.png"
                width={120}
                height={120}
              />
            </Tilt>
          </div>
          <div>
            <p>MTA 98-364</p>
            <p className="mt-4 text-justify break-all">
              Microsoft certificate of database fundamentals using SQL Server.
              Click here
            </p>
          </div>
        </div>
        <div className="relative flex flex-col px-5 pt-10 pb-5 text-center bg-black rounded-md w-80 text-primary">
          <div className="absolute flex items-center self-center text-center -top-32">
            <Tilt>
              <Image
                alt="FIAP"
                src="/images/certificates/helsinki.jpg"
                width={120}
                height={120}
              />
            </Tilt>
          </div>
          <div>
            <p>MTA 98-364</p>
            <p className="mt-4 text-justify break-all">
              Microsoft certificate of database fundamentals using SQL Server.
              Click here
            </p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
