// lib/graphql.js
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql.contentful.com/content/v1/spaces/462g3ualxm53',
  headers: {
    Authorization: 'Bearer cQwSYnVSVgPNjSSl1MwCkbDdIzNaSnAzsKD6c81A1Eo',
  },
  cache: new InMemoryCache(),
});

export async function loader(slug) {
  const { data } = await client.query({
    query: gql`
      query GetArticleBySlug($slug: String!) {
        realizacjaCollection(where: {slug: $slug}) {
          items {
            title
            description
            thumbnail {
              url
            }
          }
        }
      }
    `,
    variables: {
      slug,
    },
  });

  const article = data.realizacjaCollection.items[0];
  if (!article) {
    return { notFound: true };
  }

  return {
    props: {
      title: article.title,
      desc: article.description,
      photoLink: article.thumbnail.url,
    },
  };
}
