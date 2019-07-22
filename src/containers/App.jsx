import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Main from '../components/Main';
import SideBar from '../components/SideBar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificate from '../components/Certificate';
import Skills from '../components/Skills';

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #F5F5F5;
    }
    
`;

const App = ( )=>{
    return(
        <Main>
            <GlobalStyle/>
            <SideBar>
                <About/>

                
            </SideBar>
            <Info>
                <Education/>
                <Experience/>
                <Certificate/>
                <Skills/>

            </Info>
        </Main>
    );
}

export default App;