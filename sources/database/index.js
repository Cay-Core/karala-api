import { PubSub, withFilter as filter } from 'graphql-subscriptions';

const RETHINKDB_ADDRESS = "localhost";
const RETHINKDB_PORT = 28015;

export var r = require('rethinkdbdash')({
    servers: [{
        host: RETHINKDB_ADDRESS,
        port: RETHINKDB_PORT
    }]
});

// PubSub creators;
export const pubsub = new PubSub();
export const withFilter = filter;

export const CHANGED_TODO_LİST = "CHANGED_TODO_LİST";