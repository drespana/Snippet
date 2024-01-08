import { gql } from "apollo-server-express";
const Snippet = gql`
  type Snippet {
    id: ID!
    language: String
    code: String
  }
  #handle user commands
  type Query {
    getAllSnippets: [Snippet] #will return multiple instances
    getSnippet(id: Int): Snippet
  }
  # Mutations
`;
export default Snippet; 