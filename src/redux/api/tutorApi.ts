import { IMeta, ITutor } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const TUTOR_URL = "/tutor";

export const TutorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all
    tutors: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: TUTOR_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: ITutor[], meta: IMeta) => {
        return {
          tutors: response,
          meta,
        };
      },
      providesTags: [tagTypes.tutor],
    }),
    // get single
    tutor: build.query({
      query: (id: string) => ({
        url: `${TUTOR_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.tutor],
    }),
    // create
    createTutor: build.mutation({
      query: (data) => ({
        url: TUTOR_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.tutor],
    }),
    // update
    updateTutor: build.mutation({
      query: (data) => ({
        url: `${TUTOR_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.tutor],
    }),
    // delete
    deleteTutor: build.mutation({
      query: (id) => ({
        url: `${TUTOR_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.tutor],
    }),
  }),
});

export const {
  useCreateTutorMutation,
  useDeleteTutorMutation,
  useTutorQuery,
  useTutorsQuery,
  useUpdateTutorMutation,
} = TutorApi;
