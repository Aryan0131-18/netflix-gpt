import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import GPTSearch from './GptSearch';
import Header from './Header'
import MainConatainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header/>
      {
        showGptSearch?(<GPTSearch/>):(
          <>
          <MainConatainer/>
          <SecondaryContainer/>
          </>
        )
      }

      {/*
        MainContainer
        -VideoBackground
        -VideoTitle
        SecondaryConatiner
        -MovieList*n
          -Cards*n
      */}
    </div>
  )
}

export default Browse
