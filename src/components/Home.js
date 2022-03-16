import React, {useEffect, useState} from 'react';
import Footer from "./Footer";
import '../asets/home.css';
import MoveCard from "./MoveCard"

const Home = () => {
  const [moveImdb, setMoveImdb] = useState([]);
  const [search, setSearch] = useState('');

  const move  = (search) => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=aaf92fe5&s=${search}`)
      .then(response => response.json())
      .then(data => {
        const results = data.Search;
        setMoveImdb(results);
        console.log(results);
      })
      .catch(err => {
        console.error(err);
      });
  }

  useEffect(() => {
    move()
  }, []);

  const renderMve = () => (
    moveImdb.map((movie) => (
      <MoveCard
        key={movie.imdbID}
        movie={movie}
      />
    ))
  )

  const handleSubmit = (e) => {
    e.preventDefault();
    move(search)

  }
  return (
    <>
      <header className='section__boxMove'>
        <nav className='section__nav'>
          <form onSubmit={handleSubmit}>
            <h1>Movie Search</h1>
            <input
              type='text'
              placeholder='Search move'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </nav>
        <section className='container boxMove__move'>
          {renderMve()}
        </section>
      </header>
      <Footer/>
    </>
  );
};

export default Home;


// fetch('api/Sessions', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(callData)
// })
//   .then(response => response.text())
//   .then((response) => updateResponse(response))
//   .catch(error => console.error(error));
// }