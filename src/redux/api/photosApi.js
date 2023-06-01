import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const photosApi = createApi({
    reducerPath: 'photosApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://vichi-project-meln.herokuapp.com/'}),
    endpoints: (build) => ({
        getPhotos: build.query({
            query: () => 'photos'
        })
    })
})

export const {useGetPhotosQuery} = photosApi