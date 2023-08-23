import { gql } from "graphql-request";

export const recommendationsQuery = gql`
  query getRecommendations($language: String) {
    RecommendationsItem(id: "359333747", language: $language) {
      content {
        title
        items
      }
    }
  }
`;
