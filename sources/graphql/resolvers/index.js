// Query:
import qtest from './queries/test';
// Mutation:
import mtest from './mutations/test';

const resolvers = {
    Query: {
        qtest
    },
    Mutation: {
        mtest
    }
};
export default resolvers;