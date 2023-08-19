import { createContext, useEffect, useState } from "react";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ContentList from "../components/ContentList";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Tabs from "../components/Tabs";
import { getContent } from "../lib/content/getContent";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["content"])),
    },
  };
}
export var ContentContext = createContext(null);
function Content(props: any) {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [content, setContent] = useState(null);
  useEffect(() => {
    getContent(selectedCategory).then((res) => setContent(res));
  }, [selectedCategory]);
  return (
    <ContentContext.Provider value={content}>
      <Layout className="px-8 mt-8 lg:px-20">
        <Tabs
          actualCategory={selectedCategory}
          stateChanger={setSelectedCategory}
        />
        <ContentList category={selectedCategory} />
      </Layout>
    </ContentContext.Provider>
  );
}

export default Content;
