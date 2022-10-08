import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../components/Navbar";

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
  return (
    <>
      <Layout>
        <Languages />
      </Layout>
    </>
  );
}

export default Home;
