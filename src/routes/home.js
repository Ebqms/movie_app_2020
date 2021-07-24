import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Movie from '../movie';

const Wrapper = styled.section`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  height: 100%;
  background: #eff3f7;
    display: flex;
    justify-content: center;


  .loader{
      width: 100px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 300;
  }

  .movies{
      display: grid;
      grid-template-columns: repeat(2, minmax(400px, 1fr));
      grid-gap: 180px;
      padding: 50px;
      width: 80%;
      padding-top: 70px;
  }

  @media screen and (max-width:1080px){
      .movies{
          grid-template-columns: 1fr;
          width: 100%;
      }
  }

`;

class Home extends React.Component {
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

export default Home;