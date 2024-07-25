// src/redux/api/apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
    }),
    updateUsers: builder.query({
      query: () => "update/users",
    }),
  }),
});

export const { useGetUsersQuery, useUpdateUsersQuery } = userApi;
export default userApi;
