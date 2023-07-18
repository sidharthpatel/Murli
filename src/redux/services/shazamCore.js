/** Main File for making API Calls */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
	reducerPath: "shazamCoreApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://shazam-core7.p.rapidapi.com/",
		prepareHeaders: (headers) => {
			headers.set(
				"X-RapidAPI-Key",
				"fc6c0d1124mshccfd87840c62139p1a00a3jsnf0b04d353752"
			);
			// headers.set("X-RapidAPI-Host", "shazam-core7.p.rapidapi.com");

			return headers;
		},
	}),
	endpoints: (builder) => ({
		getTopCharts: builder.query({ query: () => "charts/get-top-songs-in-world" }),
	}),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
