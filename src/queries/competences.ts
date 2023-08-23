import { gql } from "graphql-request";

export const competencesQuery = gql`
  query getCompetences($language: String) {
    CompetencesItem(id: "358720922", language: $language) {
      content {
        _uid
        title
        items
      }
    }
  }
`;
