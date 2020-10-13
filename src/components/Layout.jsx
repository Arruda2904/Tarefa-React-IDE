import React from 'react';

import Section from './Section'

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <h1>Layout</h1>
                <Section nome="Section 1"></Section>
                <Section nome="Section 2"></Section>
                <Section nome="Section 3"></Section>
                <Section nome="Section 4"></Section>
            </div>
        )
    }
}