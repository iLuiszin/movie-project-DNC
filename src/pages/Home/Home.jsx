import { useEffect, useState } from 'react'
import { MovieService } from '../../api/MovieService'

const Home = () => {
    const [movies, setMovies] = useState([])

    async function getMovies() {
        const { data: { results } } = await MovieService.getMovies();
        setMovies(results)
    }

    useEffect(() => {
        getMovies();
    }, [])

    useEffect(() => {
        console.log(movies)
    },)



    return (
        <section className="Home">
            <div className="Home__movie-list">
                {
                    movies.map(movie => (
                        <div key={movie.id} className="Home__card-movie">
                            <h1>{movie.title}</h1>
                            <h2>{movie.popularity}</h2>
                            <img src={movie.backdrop_path} alt="" />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Home