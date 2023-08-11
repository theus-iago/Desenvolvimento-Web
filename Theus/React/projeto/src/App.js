import logo from './logo.svg';
import './App.css';
import Users from './components/Users';

function App() {
  const name = "Matheus";
  const newname = name.toUpperCase();
  const url = "https://via.placeholder.com/150";
  function sum(a,b){
   return a + b;
  }
  return (
    <div className="App">
      <h2>Alterando o JSX!</h2>
      <p>Olá, {newname}!</p>
      <p>Soma:{sum(3,5)}</p>
      <img src={url} alt="Minha imagem"/>
      <Users />
    </div>
  );
}

export default App;
