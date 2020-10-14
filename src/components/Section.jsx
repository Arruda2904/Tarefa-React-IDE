import React from 'react';

import {SectionLayout} from '../styles'
/*export default class extends React.Component{
    render(){
        return(
            <h2>{this.props.nome}</h2>
        )
    }
}*/

export default props =>
    <SectionLayout>
        <h2>{props.nome}</h2>
    </SectionLayout>