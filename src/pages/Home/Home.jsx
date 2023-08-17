import { useEffect, useState } from 'react'
import { MovieService } from '../../api/MovieService'

const Home = () => {
    const [movies, setMovies] = useState([])

    async function getMovies() {
        const { data } = await MovieService.getMovies();
        console.log(data)
    }

    useEffect(() => {
        getMovies()
    })



    return (
        <section className="Home">
            <h1>oi</h1>
        </section>
    )
}

export default Home