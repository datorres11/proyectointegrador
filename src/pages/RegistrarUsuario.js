import React, {Component} from 'react';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
class RegistrarUsuario extends Component{
    state={
        form:{
            foto:'',
            usuario:'',
            email:'',
            contraseña:'',
            repetircontraseña:''
            
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.foto]:e.target.value,
                [e.target.usuario]:e.target.value,
                [e.target.email]:e.target.value,
                [e.target.contraseña]:e.target.value
            }
        })
        console.log(this.state.form)
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
                <div className="form-group">

                    <br/>
                    <br/>
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
                    <button className="btn btn-success" onClick={()=> this.IrAPaginaPrincipal()}>Registrar</button>
                </div>
        </Container>
    );
}
}
export default RegistrarUsuario;