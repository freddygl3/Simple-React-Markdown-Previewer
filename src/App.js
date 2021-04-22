import Editor from './components/Editor';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Editor></Editor>
        <button className="btn btn-primary">hola</button>
      </div>
    </Provider>
  );
}

export default App;
