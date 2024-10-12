import axios, { AxiosInstance } from 'axios';
import { setupCache, buildWebStorage } from 'axios-cache-interceptor';
import { Episode, OmdbEpisode } from '../types/episode';

class OMDBService {
    private httpUri = process.env.REACT_APP_OMDB_API;
    private apiKey = process.env.REACT_APP_OMDB_KEY;
    private instance: AxiosInstance;

    constructor() {
        this.instance = setupCache(
            axios.create({
                baseURL: this.httpUri,
                timeout: 5000,
            }),
            {
                storage: buildWebStorage(localStorage, 'axios-cache:'),
                cacheTakeover: false,
            }
        );
    }

    private isValidUrl = (url: string) => {
        try {
            return Boolean(new URL(url));
        } catch (e) {
            return false;
        }
    };

    async getImage(imdbID: string) {
        try {
            const response = await this.instance.get('', {
                params: {
                    i: imdbID,
                    apikey: this.apiKey,
                },
            });

            const url = response?.data?.Poster;

            return this.isValidUrl(url) ? url : '';
        } catch (error) {
            console.log(error);
        }
    }

    async getEpisode(imdbID: string) {
        try {
            const response = await this.instance.get('', {
                params: {
                    i: imdbID,
                    apikey: this.apiKey,
                    plot: 'full'
                },
            });

            const data = response?.data as OmdbEpisode;

            return {
                title: data.Title,
                series: data.Series,
                description: data.Plot,
                seasonNumber: data.Season,
                episodeNumber: data.Episode,
                releaseDate: data.Released,
                imdbId: data.imdbID,
            } as Episode;
        } catch (error) {
            console.log(error);
        }
    }
}

export default OMDBService;
