import {
  createApi,
  fetchBaseQuery,
  ApiProvider,
} from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7777/api/favouritePosts/post/",
    baseUrl: "http://localhost:7777/api/favouritePosts/all_posts/",
  }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => `6213c510ff186a7dd45cf011/`,
    }),
    getPokemoneByName: builder.query({
       query: () => `6213c26202d9fe10c46dc498/`,
    }),
  }),

  // baseQuery: fetchBaseQuery({
  //   baseUrl: "http://localhost:7777/api/favouritePosts/all_posts/",
  // }),
  // endpoints: (builder) => ({
  //   getPokemoneByName: builder.query({
  //     query: () => `6213c26202d9fe10c46dc498/`,
  //   }),
  // }),
});

function Pokemon() {
  const { data,refetch, isFetching } =
    api.useGetPokemonByNameQuery("bulbasaur");
  console.log(data);
  return (
    <div>
      <button onClick={refetch}>Refetch</button>
      <div>
        <b>isFetching?</b>: {String(isFetching)}
      </div>
      <hr />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

function Pokemone() {
  const { data,  isFetching } =
    api.useGetPokemoneByNameQuery("bulbasaur");
    console.log(data);
  return (
    <div>
      {/* <button onClick={refetch}>Refetch</button> */}
      <div>
        <b>isFetching?</b>: {String(isFetching)}
      </div>
      <hr />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default function Run() {
  return (
    <ApiProvider api={api}>
      <Pokemon />
      {/* <br />
      <h1>************************************************************</h1>
      <br /> */}
      <Pokemone />
    </ApiProvider>
  );
}
