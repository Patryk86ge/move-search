import React, {useEffect, useState} from 'react';
import Footer from "./Footer";
import '../asets/home.css';
import MoveCard from "./MoveCard"
import axios from "axios";

const URL_API = "https://api.themoviedb.org/3";
const API_KEY = '87167d50b8a810b20afa0efe36f165d8';
const BACKDROP_PATH = "https://image.tmdb.org/t/p/original";

const Home = () => {

  const [moveImdb, setMoveImdb] = useState([]);
  const [bgMove,setBgMove] = useState([])
  const [searchKey, setSearchKey] = useState('');


  const move = async (searchKey) => {
    const type = searchKey ? 'search' : 'discover'
    const {data: {results}} = await axios.get(`${URL_API}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey
      }
    })
    const randomBg = Math.floor(Math.random() * (results.length - 0 + 1)) + 0;
    console.log(results);
    setMoveImdb(results)
    setBgMove(results[randomBg])
  }

  useEffect(() => {
    move()
  }, []);

  const renderMve = () => (
    moveImdb.map((movie) => (
      <MoveCard
        key={movie.id}
        movie={movie}
      />
    ))
  )

  const handleSubmit = (e) => {
    e.preventDefault();
    move(searchKey)

  }
  return (
    <>
      <header className='header'>
        <nav className='section__nav'>
          <form onSubmit={handleSubmit}>
            <h1>Movie Search</h1>
            <input
              type='text'
              placeholder='Search move'
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
            />
          </form>
        </nav>
      </header>
      <section className={"section__boxMove"} style={{backgroundImage: `url(${BACKDROP_PATH}${bgMove.backdrop_path})`}}>
        <h1>{bgMove.title}</h1>
        <p>{bgMove.release_date}</p>
      </section>
      <section className='container boxMove__move'>
        {renderMve()}
      </section>
      <Footer/>
    </>
  );
};

export default Home;
