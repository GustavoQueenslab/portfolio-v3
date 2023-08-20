import { gql } from "graphql-request";

export const aboutMeQuery = gql`
  query getAboutMe($language: String) {
    AboutmeItem(id: "357039512", language: $language) {
      content {
        title
        description
      }
    }
  }
`;
