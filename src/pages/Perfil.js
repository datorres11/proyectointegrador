import React, {Component} from 'react';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import icono from '../images/icono_usuario.png';
import { Container } from 'reactstrap';
class Perfil extends Component{
    state={
        form:{
            usuario:'',
            email:'',
            contraseña:''
            
        }
    }

    IrAPaginaPrincipal=async()=>{
        window.location.href="./principal";
    }

    ActualizarInformacion=(dato)=>{
        this.setState({form: dato});
    }
render(){
    return(
        <Container>
                <div className="text-center">
                    <img className="img_usuario" src={icono} alt=""/>
                </div>
                <div className="form-group">
                    <label>Usuario: </label>
                    <br/>
                    <input type="text" className="form-control" name='usuario' onChange={this.handleChange}/>
                    <br/>
                    <label>correo electronico: </label>
                    <br/>
                    <input type="email" className="form-control" name='email' onChange={this.handleChange}/>
                    <br/>
                    <label>Contraseña: </label>
                    <br/>
                    <input type="password" className="form-control" name='contraseña' onChange={this.handleChange}/>
                    <br/>
                    <button className="btn btn-success" onClick={()=> this.ActualizarInformacion(this.state.form)}>Actualizar Datos</button>{"  "}
                    <button className="btn btn-primary" onClick={()=> this.IrAPaginaPrincipal()}>Pagina Principal</button>
                </div>
        </Container>
    );
}
}
export default Perfil;