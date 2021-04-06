import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Header } from './components/header';
import { PageHome } from './page/home';

function App() {
  return (
    <div className="App">
      <Header />
      <PageHome />
    </div>
  );
}

export default App;
