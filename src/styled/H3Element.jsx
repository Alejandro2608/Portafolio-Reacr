import React from 'react';
import styled from 'styled-components';

const StyledH3 = styled.h3`
font family: 'Roboto', sans serif;
font-weight: 300;
letter-spacing: 8px;
margin: 1em 0 0 0;
color: #212121;
`;

const H3Element = ({children}) => <StyledH3>{children}</StyledH3>;

export default H3Element;