import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge';
import 'bootstrap/dist/css/bootstrap.css';

const container = document.getElementById('app');
//const jsx = <h1> Hellowwwwwwwwwwww, fdg</h1>
//const sum = () => 3+3;
//const element = React.createElement('h1', {}, 'hellooiii')
//const name = 'antuCC';
//const element = React.createElement('h1', {}, `Hola, soy ${name}`)
//const jxs = <h1> Hola soy, {name}</h1>
const jxs = <div>
    Hellooooo hellooiii
    <p>
        im engine
    </p>
</div>
ReactDOM.render(
    <Badge/>, container
);
