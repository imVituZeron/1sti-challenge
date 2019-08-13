import React, {Component} from 'react';
import Styled from 'styled-components';
import Tables from './Tables';

import lupa from '../../img/lupa.png';


class InputAdd extends Component{
    render(){
        return(
            <Home className='home-input'>
                <h1>Previsão do tempo</h1>
                <form>
                    <input placeholder='Insira aqui o nome da cidade'></input>
                    <button onClick={ this.handleClick } type='submit'><img src={lupa} alt='pesquisa'/></button>
                </form>
                <hr/>
                <Tables />
            </Home>
        )
    }

    handleClick = (event) => {
        event.preventDefault();
        alert('Ainda não temos resultados da Api de previsão do tempo !')
    }

}

const Home = Styled.div`
    padding-top: 10px;

    h1{
        font-size: 60px;
        font-family: Arial;
        color: #FFF;
        margin-left: 400px;
    }
    form {
        margin-left: 450px;
        padding-bottom: 40px;
    }
    form input{
        width: 300px;
        padding: 10px;
        border: 1px solid #FFF;
        font-size: 20px;
        color: #636e72;
    }
    form button {
        border: 1px solid #FFF;
        background: #FFF;
        padding: 10px;
        font-size: 19px;
    }
    hr {
        width: 540px;
        color: #FFF;
        border: 1px solid #FFF;
    }
`;

export default InputAdd;