import gql from 'graphql-tag';
// Mutation Type:
import mutation from './mutation';
// Query Type:
import query from './query';
// Subsctiption Type:
import subscription from './subscription';
// Other Types:
import Test from './types/Test';
const typeDefs = gql`
    ${Test},
    ${query},
    ${mutation}
`;
export default typeDefs;