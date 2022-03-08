import {
  createApi,
  fetchBaseQuery,
  ApiProvider,
} from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7777/api/",
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => `favouritesFolder/`,
    }),
    getDataById: builder.query({
      query: (id) => `favouritesFolder/${id}`,
    }),
  }),
});

function AllData() {

  var { data, isLoading ,isFetching } = api.useGetDataQuery("")

  if(isLoading){console.log('Data is loding')}else if (isFetching){
    console.log("Data is being fetched")
  }else{
   console.log(data)
  }

  return (
   <>
      {!isLoading ? data.map((value)=>(<h1 key={value._id}>{value._id}</h1>)) : "nothing"}
   </>
  );
}

function SingleData() {

  var { data, isFetching , isLoading} = api.useGetDataByIdQuery("6213c26202d9fe10c46dc498")

  if(isLoading){console.log('Data is loding')}else if (isFetching){
    console.log("Data is being fetched")
  }else{
   console.log(data)
  }

  return (
   <>
      {
        !isLoading ?  <h2> {data._id} </h2> : "null"
      }
   </>
  );
}


export default function RtkQueryDataFetching() {
  return (
    <ApiProvider api={api}>
      <AllData />
      {/* <SingleData /> */}
    </ApiProvider>
  );
}