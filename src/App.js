import React from 'react';
import Home from './routes/home';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/about';
import Nav from './nav';
import Detail from './routes/detail';

function App() {
  return (
    <HashRouter>
      <Nav/>
      <Route path="/" exact={true} component={Home} ></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/movie-detail" component={Detail}></Route>
    </HashRouter>
  );
}

export default App;


// memo
/*
yts API : https://yts.mx/api/v2/list_movies.json
nicolas yts porxy github : https://github.com/serranoarevalo/yts-proxy/
nicolas yts Proxy API : https://yts-proxy.now.sh/list_movies.json

*/