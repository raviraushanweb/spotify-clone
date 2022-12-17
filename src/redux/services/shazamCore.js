import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
	reducerPath: "shazamCoreApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://shazam-core.p.rapidapi.com/v1",
		prepareHeaders: (headers) => {
			headers.set(
				"X-RapidAPI-Key",
				"5159ac706bmsh2b10961c7134bb9p115f1ajsn3ab9d5569d3b"
			);
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getTopCharts: builder.query({ query: () => "/charts/world" }),
	}),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
