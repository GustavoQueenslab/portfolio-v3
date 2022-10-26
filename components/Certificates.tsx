import Wrapper from "./Wrapper";

export default function Certificates() {
  return (
    <Wrapper className="flex flex-col items-center justify-center">
      <h3 className="mb-32 text-2xl text-primary">Certificates</h3>
      <section className="flex flex-col mt-16 lg:flex-row">
        <div className="relative flex flex-col px-5 pt-10 pb-5 text-center bg-black w-80 text-primary">
          <div className="absolute self-center w-40 h-40 text-center bg-white -top-32 text-primary">
            <p>s</p>
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
