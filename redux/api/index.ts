import { createApi, fetchBaseQuery, FetchArgs } from '@reduxjs/toolkit/dist/query';
import { HYDRATE } from 'next-redux-wrapper';

export const consoleApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    track: builder.mutation<unknown, FetchArgs['body']>({
      query: (body) => ({
        url: '/telemetry',
        method: 'POST',
        body,
      }),
    }),
    readiness: builder.mutation<unknown, FetchArgs['body']>({
      query: (body) => ({
        url: '/readiness',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { endpoints } = consoleApi;

// redux toolkit react is not properly generating typed hooks. exposing track/readiness events for now.
export const sendTrackEvent = endpoints.track.initiate;
export const sendReadinessEvent = endpoints.readiness.initiate;
