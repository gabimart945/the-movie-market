

export const genres = [
    {
        "id": 28,
        "name": "Acción"
    },
    {
        "id": 12,
        "name": "Aventura"
    },
    {
        "id": 16,
        "name": "Animación"
    },
    {
        "id": 35,
        "name": "Comedia"
    },
    {
        "id": 80,
        "name": "Crimen"
    },
    {
        "id": 99,
        "name": "Documental"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Familia"
    },
    {
        "id": 14,
        "name": "Fantasía"
    },
    {
        "id": 36,
        "name": "Historia"
    },
    {
        "id": 27,
        "name": "Terror"
    },
    {
        "id": 10402,
        "name": "Música"
    },
    {
        "id": 9648,
        "name": "Misterio"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Ciencia ficción"
    },
    {
        "id": 10770,
        "name": "Película de TV"
    },
    {
        "id": 53,
        "name": "Suspense"
    },
    {
        "id": 10752,
        "name": "Bélica"
    },
    {
        "id": 37,
        "name": "Western"
    }
]

export const genreIdToName = (genreId) => {

    const genre = genres.find((item)=> item.id===genreId)

    return genre.name
}

export const responseToMovies = (response_data) => {
    let movieList = []
    response_data.results.forEach((result)=>{
        movieList.push(
            {
                id: result.id,
                title: result.title,
                synopsis: result.overview,
                rating: result.vote_average / 2,
                genres: result.genre_ids.map((genreId)=> (genreIdToName(genreId))),
                release: result.release_date,
                cover: `https://image.tmdb.org/t/p/w1280${result.poster_path}`
            }
        )
    })

    return movieList;
}

export const responseToDetails = (response) => {
    return {
        id: response.id,
        genres: response.genres.map((genre) => genre.name),
        title: response.title,
        cover: 'https://image.tmdb.org/t/p/w1280' + response.poster_path,
        release: response.release_date,
        runtime: response.runtime,
        synopsis: response.overview,
        rating: response.vote_average / 2,
        director: response.credits.crew.find((c) => c.job === 'Director').name,
        cast: response.credits.cast.map((c) => {
            return {
                name: c.name,
                character: c.character,
                image: 'https://image.tmdb.org/t/p/w1280' + c.profile_path
            }
        }),
        video: response.videos.results.find((video) => video.type === 'Trailer')
    }
}

export const responseToMovie = (response) => {
    return {
        id: response.id,
        genres: response.genres.map((genre) => genre.name),
        title: response.title,
        cover: 'https://image.tmdb.org/t/p/w1280' + response.poster_path,
        release: response.release_date,
        synopsis: response.overview,
        rating: response.vote_average / 2,
    }
}