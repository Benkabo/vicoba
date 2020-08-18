import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";

const makeApolloClient = () => {
  const link = new HttpLink({
    uri: "https://relieved-mallard-18.hasura.app/v1/graphql",
    headers: {
      "x-hasura-admin-secret": "kabo1171997",
      "content-type": "application/json",
    },
  });
  const cache = new InMemoryCache();

  const client = new ApolloClient({
    link,
    cache,
  });
  return client;
};

export default makeApolloClient;
