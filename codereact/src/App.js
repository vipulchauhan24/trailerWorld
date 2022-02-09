import './App.css';
import 'bulma/css/bulma.min.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
function App() {
  return (
    <div>
      <header className="app_header"></header>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
