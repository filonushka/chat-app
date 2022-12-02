import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//deifne a service user a base URL
const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001",
  }),
  endpoints: (builder) => ({
    //login the user
    loginUser: builder.mutation({
      query: (user) => ({
        url: "/api/user",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = appApi;

export default appApi;
