import React, { Component } from 'react';
import api from '../../services/api';

import Styled from 'styled-components';


const Home = Styled.div`
    font-family: Arial;
    margin-left: 530px;

    h2{
        color: #FFF;
        font-size: 30px;
    }
`;

class Tables extends Component {
    render(){
        return (
            <Home className='home-tables'>
                <h2>Capitais</h2>
                <table>
                    <tr>
                        <th>Min</th>
                        <th>Máx</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td><strong>18º</strong></td>
                        <td><strong>27º</strong></td>
                        <td><strong>Rio de Janeiro</strong></td>
                    </tr>
                </table>
            </Home>
        )
    }
}

export default Tables;