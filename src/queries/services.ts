import { gql } from "graphql-request";

export const servicesQuery = gql`
  query getServices($language: String) {
    ServicesItem(id: "358721091", language: $language) {
      content {
        title
        items
      }
    }
  }
`;
