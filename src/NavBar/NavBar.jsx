import { Link } from 'react-router-dom'

export default function NavBar ({ user }) {
    return (
        <nav> 
            <Link to='/'>Movies List</Link>
            &nbsp; | &nbsp;
            <Link to='/actors'>Actors List</Link>
            &nbsp; | &nbsp;
            <span>Welcome, {user}!</span>
        </nav>
    )
}
