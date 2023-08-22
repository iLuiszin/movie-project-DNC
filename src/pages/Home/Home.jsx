import { useEffect, useState } from 'react'
import { MovieService } from '../../api/MovieService'
import MovieCard from '../../components/MovieCard/MovieCard';

const Home = ({ searchValue }) => {
    const [movies, setMovies] = useState([])

    async function getMovies() {
        const { data: { results } } = await MovieService.getMovies();
        setMovies(results)
    }

    async function getMoviesSearch(movieName) {
        const { data: { results } } = await MovieService.searchMovies(movieName);
        setMovies(results)
    }

    useEffect(() => {
        getMovies();
    }, [])

    useEffect(() => {
        if (searchValue) {
            getMoviesSearch(searchValue)
        }

        if (searchValue === '') {
            getMovies()
        }
    }, [searchValue])

    return (
        <section className="Home">
            {
                movies.map(movie => (
                    <div key={movie.id}>
                        <MovieCard key={movie.id} movie={movie} />
                    </div>
                ))
            }
        </section>
    )
}

export default Home