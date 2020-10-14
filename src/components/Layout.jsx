import React from 'react';

import Section from './Section'
import {BackgroundLayout} from '../styles'

export default class Layout extends React.Component {
    render() {            //React.Fragment funciona como a div para retornar tudo,porém não afeta o layout como a div faz
        return (
            <BackgroundLayout>  
                <h1>Layout</h1>
                <Section nome="Section 1"></Section>
                <Section nome="Section 2"></Section>
                <Section nome="Section 3"></Section>
                <Section nome="Section 4"></Section>
            </BackgroundLayout>
        )
    }
}