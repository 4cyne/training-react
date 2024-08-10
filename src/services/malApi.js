import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const mallApi = createApi({
	reducerPath: 'logo/id',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
	endpoints: builder => ({
		getLogo: builder.query({
			query: id => ({ url: `logo/${id}` }),
		}),
		getSvgicons: builder.query({
			query: () => ({
				url: `svgicons/`,
			}),
		}),
		getHeroImage: builder.query({
			query: id => ({
				url: `hero/${id}`,
			}),
		}),
		getBestSellers: builder.query({
			query: () => ({
				url: `best/`,
			}),
		}),
		getCollection: builder.query({
			query: () => ({
				url: 'collection/',
			}),
		}),
		getFollow: builder.query({
			query: () => ({
				url: 'follow/',
			}),
		}),
	}),
})
export const {
	useGetLogoQuery,
	useGetSvgiconsQuery,
	useGetHeroImageQuery,
	useGetBestSellersQuery,
	useGetCollectionQuery,
	useGetFollowQuery,
} = mallApi
