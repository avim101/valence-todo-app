import './index.css';
import reportWebVitals from './reportWebVitals';
import {createRoot} from "react-dom/client";
import App from "./App";
import { StrictMode } from 'react';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as HTMLDivElement);


root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
