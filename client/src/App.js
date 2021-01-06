import './App.css';
import LoginPage from './components/LoginPage';
import MainMenu from './components/MainMenu';
import RegisterPage from './components/RegisterPage';

function App() {
  return (
    <div className="App">
      <div class="alert alert-success" role="alert">
      <MainMenu />
      <LoginPage />
      <RegisterPage />
      </div>
    </div>
  );
}

export default App;
