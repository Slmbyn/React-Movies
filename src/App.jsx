import './App.css';
import { useState } from 'react';
import LoginPage from './LoginPage/LoginPage';
import { Routes, Route } from 'react-router-dom';
import MoviesListPage from './MoviesListPage/MoviesListPage';
import MovieDetailPage from './MovieDetailPage/MovieDetailPage';
import ActorListPage from './ActorListPage/ActorListPage';
import NavBar from './NavBar/NavBar';


export default function App() {
  // const [user, setUser] = useState([{username:''}])
  const [user, setUser] = useState(null)
  function addUser (u) {
    setUser(u);
  }
  return (
    <main className="App">
       { user ? 
          <>
            <NavBar user={user} />
            <Routes>
              <Route path='/' element={<MoviesListPage />} />
              <Route path='/movies/:movieName' element={<MovieDetailPage />} />
              <Route path='/actors' element={<ActorListPage />} />
            </Routes>
          </>
          : 
          <Routes>
            <Route path='/' element={<LoginPage addUser={addUser}/>} />
          </Routes>
        }
    </main>
  );
}