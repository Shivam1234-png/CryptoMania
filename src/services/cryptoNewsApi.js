import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const cryptoNewsHeaders={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'b172630c6fmsh29373d3c0821856p12e4dcjsn2e401b4b3c55',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}
const baseUrl='https://bing-news-search1.p.rapidapi.com'
const createRequest=(url)=>({url,headers: cryptoNewsHeaders});
export const cryptoNewsApi=createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews:builder.query({
            query: ({newsCategory}) => createRequest('/news/search')
        })
    })
});
export const{
    useGetCryptoNewsQuery,
}=cryptoNewsApi;