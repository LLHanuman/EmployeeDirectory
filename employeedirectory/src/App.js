import './App.css';
import Header from './component/Main.Nav/Nav'
import Header2 from './component/Nav.v2/Nav.v2'
import Search from './component/Search/SearchBar'
import Card from './component/Employees/Card'

function App() {
  return (
    <div className="App">
      <div>
      <Header />
      <Header2 />
      <Search />
      <Card />
      </div>
    </div>
  );
}

export default App;
