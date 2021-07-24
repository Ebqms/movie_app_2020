import React from 'react';
import axios from 'axios';
import Movie from './movie';
import styled from 'styled-components';

const Wrapper = styled.section`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  height: 100%;
  background: #eff3f7;
  
`;

class Loading extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false })
  }


  componentDidMount() {
    //데이터 로딩
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <Wrapper className="container">

        {isLoading ?
          <div className="loader">
            <span className="loader__text"> Loading </span>
          </div>
          : (
            <div className="movies">
              {movies.map(m => (
                <Movie key={m.id} id={m.id} year={m.year} title={m.title} summary={m.summary} poster={m.medium_cover_image} genres={m.genres} />
              ))}
            </div>
          )}
      </Wrapper>
    )
  }
}

function App() {
  return (
    <>
      <Loading />
    </>
  );
}

export default App;


// memo
/*
yts API : https://yts.mx/api/v2/list_movies.json
nicolas yts porxy github : https://github.com/serranoarevalo/yts-proxy/
nicolas yts Proxy API : https://yts-proxy.now.sh/list_movies.json

*/