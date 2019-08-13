import React from 'react';
import InputAdd from './components/HomePage/InputAdd';
import Styled from 'styled-components';


const Page = Styled.div`
  width: 1350px;
  height: 600px;
  background: #f39c12;
`;

function App() {
  return (
    <Page className="Home">
      <InputAdd />
    </Page>
  );
}

export default App;
