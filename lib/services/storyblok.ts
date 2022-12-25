import axios from "axios";
import { storyblok } from "../constants/api";
export const storyblokQuery = async (query: string) => {
  const headers = {
    Token: storyblok.token,
    Version: "draft",
    "content-type": "application/json",
  };
  const graphqlQuery = {
    operationName: "fetchAuthor",
    query: query,
    variables: {},
  };
  let res = await axios({
    url: storyblok.endpoint,
    headers: headers,
    method: "post",
    data: graphqlQuery,
  });
  return res.data.data ?? "There was en error";
};
