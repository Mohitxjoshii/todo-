import { createRoot } from 'react-dom/client'
import App from './App';
import './index.css'
import { ToastContainer } from 'react-toastify';
import Wrapper from './Wrapper';

createRoot(document.getElementById('root')).render(
    <Wrapper>
        <ToastContainer position='top-center' />
        <App />
    </Wrapper>);
//     <>
//     <ToastCont ainer position='top-center'/>
//     <App />
// </>