import React from 'react';
import ReactDOM from 'react-dom';
import Badges from './pages/Badges';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
const container = document.getElementById('app');
//const jsx = <h1> Hellowwwwwwwwwwww, fdg</h1>
//const sum = () => 3+3;
//const element = React.createElement('h1', {}, 'hellooiii')
//const name = 'antuCC';
//const element = React.createElement('h1', {}, `Hola, soy ${name}`)
//const jxs = <h1> Hola soy, {name}</h1>
// const jxs = <div>
//     Hellooooo hellooiii
//     <p>
//         im engine
//     </p>
// </div>
ReactDOM.render(
    <Badges/>, container
);
