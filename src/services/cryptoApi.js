import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '6c167269f6msh20e78736417992bp1f4ef0jsn733701326066',
  };

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const options  = ({
  method: 'GET',
  url: baseUrl + "/coins",
  headers: cryptoApiHeaders
});

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery(baseUrl),

    endpoints: (builder) => ({
        getCryptos: builder.query({
          query: () => options,
        }),

        getCryptoDetails: builder.query({
          query: ({coinId}) => createRequest(`/coin/${coinId}`),
        }),

      }),
});



export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
  } = cryptoApi;