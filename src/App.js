import './App.css';
import MyPage from './components/withouth_context/MyPage';
import MyPageContext from './components/with_context/MyPageContext';

function App() {
  return (
    <div className="App">
      <h1>React Context API</h1>
      <hr/>

      <a href='https://es.reactjs.org/docs/context.html' target='blank'>Documentación</a>
      <div><MyPage/></div>
      <div><MyPageContext/></div>
      <hr/>
    </div>
  );
}

export default App;


/*
  Cambiar de tema de claro a oscuro
  Cambiar el idioma
  Simular un inicio de sesión
*/