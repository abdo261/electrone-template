import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const notify = () => toast("Wow so easy!");
  return (
    <div className="App">
         <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer position='top-center' />
      </div>
    </div>
  );
}

export default App;
