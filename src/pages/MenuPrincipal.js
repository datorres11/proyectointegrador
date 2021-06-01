import React, {Component} from 'react';
import '../css/MenuPrincipal.css';
import icono from '../images/icono_usuario.png';
import logo from '../images/logo.PNG';
class MenuPrincipal extends Component{
    IrATemperatura=async()=>{
        window.location.href="./temperatura";
    }
    IrAHumedad=async()=>{
        window.location.href="./humedad";
    }
    IrAUbicacion=async()=>{
        window.location.href="./ubicacion";
    }
    IrAPerfil=async()=>{
        window.location.href="./perfil";
    }

    render(){
        return(
        <header>
            <div className="logo">
                <img className="img_logo" src={logo} alt=""/>
            </div>
            <div className="menu">
                <div className="campo_menu">
                    <nav>
                        <ul className="nav">
                            <li>Temperatura
                                <ul>
                                    <li type="button" onClick={()=> this.IrATemperatura()}>Administrar Temperatura</li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="campo_menu">
                    <nav>
                        <ul className="nav">
                            <li>Humedad
                                <ul>
                                    <li  type="button" onClick={()=> this.IrAHumedad()}>Administrar Humedad</li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="campo_menu">
                    <nav>
                        <ul className="nav">
                            <li>Ubicaciones
                                <ul>
                                    <li type="button" onClick={()=> this.IrAUbicacion()}>Administrar Ubicación</li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="usuario">
                <div>
                    <img onClick={()=> this.IrAPerfil()} className="img_usuario" src={icono} alt=""/>
                </div>
                <div>
                    Administrador
                </div>
            </div>
        </header>
        );
    }
}
export default MenuPrincipal;