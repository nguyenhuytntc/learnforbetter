import { rootApi } from "./rootApi";

const uploadApi = rootApi.injectEndpoints({
    endpoints: (build) => ({
        uploadImage: build.mutation({
            query: (body) => ({
                url: "/upload-image",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useUploadImageMutation } = uploadApi;
