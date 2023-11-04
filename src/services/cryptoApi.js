import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const cryptoApiHeaders={
    'X-RapidAPI-Key': 'b172630c6fmsh29373d3c0821856p12e4dcjsn2e401b4b3c55',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl='https://coinranking1.p.rapidapi.com';
const createRequest=(url)=>({url,headers: cryptoApiHeaders});
export const cryptoApi=createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos:builder.query({
            query: () => createRequest('/coins')
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
          }),
      
          // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
          }),
    })
});
export const{
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery
}=cryptoApi;