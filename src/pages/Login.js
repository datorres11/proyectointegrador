import React, {Component} from 'react';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Login extends Component{
    state={
        form:{
            usuario:'',
            contraseña:''
            
        }

    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.usuario]:e.target.value,
                [e.target.contraseña]:e.target.value
            }
        })
        console.log(this.state.form)
    }

    iniciarSesion=async()=>{
        window.location.href="./principal";
    }

    registrar=async()=>{
        window.location.href="./registrar";
    }

    render(){
        return(
            <div className="containerPrincipal">
                <div className="containerSecundario">
                    <div className="form-group">
                        <label>Usuario: </label>
                        <br/>
                        <input type="text" className="form-control" name='usuario' onChange={this.handleChange}/>
                        <br/>
                        <label>Contraseña: </label>
                        <br/>
                        <input type="password" className="form-control" name='contraseña' onChange={this.handleChange}/>
                        <br/>
                        <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>{"  "}
                        <button className="btn btn-primary"onClick={()=> this.registrar()}>Registrese aqui</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;