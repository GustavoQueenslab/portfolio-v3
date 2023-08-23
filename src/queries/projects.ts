import { gql } from "graphql-request";

export const projectsQuery = gql`
  query getProjects($language: String) {
    ProjectsItem(id: "359333182", language: $language) {
      content {
        title
        items
      }
    }
  }
`;
