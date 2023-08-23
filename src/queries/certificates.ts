import { gql } from "graphql-request";

export const certificatesQuery = gql`
  query getCertificates($language: String) {
    CertificatesItem(id: "358741695", language: $language) {
      content {
        title
        items
      }
    }
  }
`;
