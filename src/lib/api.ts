import { GraphQLClient } from "graphql-request";

const API_VALUES = {
  url: process.env.STORYBLOK_ENDPOINT,
  token: process.env.STORYBLOK_TOKEN,
};

export const graphQLClient = new GraphQLClient(API_VALUES.url, {
  headers: {
    "Content-Type": "application/json",
    Token: API_VALUES.token,
  },
});
