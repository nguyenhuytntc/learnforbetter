import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.accessToken;

        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }

        return headers;
    },
});

export const rootApi = createApi({
    reducerPath: "api",
    baseQuery,
    endpoints: (builder) => {
        return {
            register: builder.mutation({
                query: ({ name, email, password }) => {
                    return {
                        url: "/register",
                        body: { name, email, password },
                        method: "POST",
                    };
                },
            }),

            login: builder.mutation({
                query: ({ email, password }) => {
                    return {
                        url: "/login",
                        body: { email, password },
                        method: "POST",
                    };
                },
            }),

            getAuthUser: builder.query({
                query: () => "/auth-user",
            }),
        };
    },
});

export const { useRegisterMutation, useLoginMutation, useGetAuthUserQuery } =
    rootApi;
