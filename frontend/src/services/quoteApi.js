import { rootApi } from "./rootApi";

const quoteApi = rootApi.injectEndpoints({
    endpoints: (build) => ({
        getQuote: build.query({
            query: () => "/quote",
        }),
        createQuote: build.mutation({
            query: (body) => ({
                url: "/quote",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useGetQuoteQuery, useCreateQuoteMutation } = quoteApi;
