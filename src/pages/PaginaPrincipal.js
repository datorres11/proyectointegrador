import React, {Component} from 'react';
import '../css/MenuPrincipal.css';
import InfoPrincipal from './InfoPrincipal';
import MenuPrincipal from './MenuPrincipal';
class PaginaPrincipal extends Component{
    render(){
        return(
        <div>
            <MenuPrincipal/>
            <br/>
            <br/>
            <InfoPrincipal/>
        </div>
        );
    }
}
export default PaginaPrincipal;