// src/utils/endpoints.js

const API_KEY = import.meta.env.VITE_APP_KEY;
const BASE_URL = import.meta.env.VITE_URL_API;

export const ENDPOINTS = {
    POPULAR: `${BASE_URL}movie/popular?api_key=${API_KEY}`,
    NOWPLAY: `${BASE_URL}movie/now_playing?&api_key=${API_KEY}`,
    TOPRATED: `${BASE_URL}movie/top_rated?&api_key=${API_KEY}`,
    UPCOMING: (page) => `${BASE_URL}movie/upcoming?language=en-US&page=${page}&api_key=${API_KEY}`,
    TRENDING: `${BASE_URL}trending/movie/day?language=en-ID&api_key=${API_KEY}`,
    DETAIL: (id) => `${BASE_URL}movie/${id}?append_to_response=videos&language=en-ID&api_key=${API_KEY}`,
    RECOMENDED: (id) => `${BASE_URL}movie/${id}/recommendations?language=en-US&page=1&api_key=${API_KEY}`,
}
