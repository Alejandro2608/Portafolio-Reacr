import React from 'react';
import H2Element from '../styled/H2Element';
import PElement from '../styled/PElement';
import H3Element from '../styled/H3Element';

const Certificate = ()=>(
    <div className="Certificate">
        <H2Element name="Mis certificaciones"/>
        <div className="Certificate__container">
            <div className="Certificate__item">
                <H3Element> Amazon web services</H3Element>
                <PElement name="Practicante de la nube"/>
            </div>
        </div>
    </div>

);
export default Certificate;