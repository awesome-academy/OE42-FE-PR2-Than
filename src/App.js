import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header'
import Loading from './components/loading/loading';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Home from './components/homepage/home';
import MoviePage from './components/moviepage/movie';
import MovieDetail from './components/moviepage/moviedetail/moviedetail';

function App() {
  return (
    <div className="App">
      <Loading></Loading>
        <Router>
          <Header></Header>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route exact path="/movie">
                    <MoviePage></MoviePage>
                </Route>
                <Route exact path="/movie/:slug">
                    <MovieDetail></MovieDetail>
                </Route>
            </Switch>
          <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
