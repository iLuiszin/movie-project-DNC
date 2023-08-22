import { Link } from 'react-router-dom'
const Header = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const searchValue = e.target[0].value
        props.onSubmit(searchValue)
        e.target[0].value = ""
    }

    return (
        <header className="Header">
            <Link to={'/'}>
                <h1>DNC Movie List</h1>
            </Link>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Pesquise por filmes" />
            </form>
        </header>
    )
}

export default Header