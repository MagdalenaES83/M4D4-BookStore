import './App.css';
import MyJumbo from './components/MyJumbo';
import MyNavBar from './components/MyNavBar';
import MyFooter from './components/MyFooter';
import Home from './components/Home';

import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'
import SingleBook from './components/SingleBook'
import fantasy from './BOOKS/fantasy.json'
import BookList  from './components/BookList'
//import BookList from './components/BookList';

//const randomBook = books[Math.floor(Math.random()*10)]



function App() {
  return (
    <div>
      <div><MyNavBar title="Hello Bookstore!" /> </div>
      <div><MyJumbo title="Welcome" /></div>     
            <WarningSign alert="Alert!!" />
      <div><MyBadge color="info" ></MyBadge>  </div>
            
<hr>
</hr>
      <div> <h3 className="d-flex justify-content-center"> Find a book </h3></div>
      <div><BookList books={fantasy} /> </div>
      <div> <Home /></div>

      <div><MyFooter /></div>
    </div>
  );
}

export default App;

