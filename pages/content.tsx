import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Tabs from "../components/Tabs";
import { useEffect, useState } from "react";
import ContentList from "../components/ContentList";
import { getContent } from "../lib/services/getContent";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["content"])),
    },
  };
}
function Content(props: any) {
  const [selectedCategory, setSelectedCategory] = useState(0);
  useEffect(() => {
    getContent(selectedCategory);
  }, [selectedCategory]);

  return (
    <Layout className="px-8 mt-8 lg:px-20">
          <Tabs
        actualCategory={selectedCategory}
        stateChanger={setSelectedCategory}
      />
      <ContentList category={selectedCategory} />
    </Layout>
  );
}

export default Content;
