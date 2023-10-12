import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const AUTH_URL = "/users";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (registrationData) => ({
        url: `${AUTH_URL}/create-user`,
        method: "POST",
        data: registrationData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useCreateUserMutation } = userApi;
