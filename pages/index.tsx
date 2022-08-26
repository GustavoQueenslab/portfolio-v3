import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../components/navbar";

import Layout from "../components/Layout";
import Languages from "../components/Languages";

// import Languages from "../components/Languages";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}

function Home(props: any) {
  const { t } = useTranslation();
  const [data, setData] = useState();
  return (
    <>
      <Layout>
        <p>a</p>
        <Languages />
      </Layout>
    </>
  );
}

export default Home;
