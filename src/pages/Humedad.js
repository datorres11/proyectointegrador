import React, {Component} from 'react';
import MenuPrincipal from './MenuPrincipal';
import {Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
const humedades =[
    {id:1, ciudad:"Bogotá",humedad:"68%"},
    {id:2, ciudad:"Madrid",humedad:"80%"},
    {id:3, ciudad:"Toronto",humedad:"750%"},
    {id:4, ciudad:"Auckland",humedad:"25%"},
    {id:5, ciudad:"paris",humedad:"10%"},
];
class Humedad extends Component{
    state={
        humedades:humedades,
        form:{
            ciudad:'',
            humedad:''
            
        }
    }

    handleChange=e=>{
        this.state({
            form:{
                ...this.state.form,
                [e.target.ciudad]: e.target.value,
                [e.target.humedad]: e.target.value
            }
        });
    }

    abrirModalRegistro=()=>{
        this.setState({
            modalRegistro:true
        });
    }

    cerrarModalRegistro=()=>{
        this.setState({
            modalRegistro:false
        });
    }

    abrirModalEditar=(registro)=>{
        this.setState({
            modalEditar:true,
            form:registro
        });
    }

    cerrarModalEditar=()=>{
        this.setState({
            modalEditar:false
        });
    }

    insertarNuevoRegistro=()=>{
        var valorNuevo={...this.state.form};
        var lista=this.state.humedades;
        lista.push(valorNuevo);
        this.setState({ubicaciones: lista,modalRegistro: false});
    }

    editarRegistro=(dato)=>{
        var contador=0;
        var lista=this.state.humedades;
        lista.map((registro)=>{
            if(dato.ciudad===registro.ciudad){
                lista[contador].pais=registro.pais;
                lista[contador].ciudad=registro.ciudad;
            }
            contador++;
        });
        this.setState({data: lista, modalEditar:false});
    }

    render(){
        return(
            <>
            <container>
            <MenuPrincipal/>
            <br/>
            <br/>
            <div>
                <button type="button" className="btn btn-primary" onClick={()=> this.abrirModalRegistro()}>Registrar Humedad</button>
            </div>
            <br/>
            <div>  
                <table className="table table-striped">
                    <thead>
                          <tr>
                            <th>Ciudad</th>
                            <th>Humedad %</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.humedades.map((elemento)=>{
                            return(
                            <tr>
                                <td>{elemento.ciudad}</td>
                                <td>{elemento.humedad}</td>
                                <td><button className="btn btn-primary" onClick={()=> this.abrirModalEditar(elemento)}>Editar</button>{"  "}
                                    <button className="btn btn-danger" onClick={()=> this.eliminarRegistro(elemento)}>Eliminar</button>
                                </td>
                            </tr>
                            )
                        })}                        
                    </tbody>
                </table>
            </div>
            </container>
            <Modal isOpen={this.state.modalRegistro}>
            <ModalHeader>
            <div>
                <h3>Registrar Humedad</h3>
            </div>
            </ModalHeader>
            <ModalBody>
                <div className="form-group">
                    <label>Ciudad: </label>
                    <br/>
                    <input type="text" className="form-control" name='ciudad' onChange={this.handleChange}/>
                    <br/>
                    <label>Humedad: </label>
                    <br/>
                    <input type="text" className="form-control" name='humedad' onChange={this.handleChange}/>
                    <br/>
                </div>
            </ModalBody>
            <ModalFooter>
                <button type="button" className="btn btn-primary" onClick={()=> this.insertarNuevoRegistro()}>Registrar</button>
                <button type="button" className="btn btn-primary" onClick={()=> this.cerrarModalRegistro()}>Cancelar</button>
            </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalEditar}>
            <ModalHeader>
            <div>
                <h3>Editar Humedad</h3>
            </div>
            </ModalHeader>
            <ModalBody>
                <div className="form-group">
                    <label>Ciudad: </label>
                    <br/>
                    <input type="text" className="form-control" name='ciudad' onChange={this.handleChange} value={this.state.form.ciudad} readOnly/>
                    <br/>
                    <label>Humedad: </label>
                    <br/>
                    <input type="text" className="form-control" name='humedad' onChange={this.handleChange} value={this.state.form.humedad}/>
                    <br/>
                </div>
            </ModalBody>
            <ModalFooter>
            <button type="button" className="btn btn-success" onClick={()=> this.editarRegistro(this.state.form)}>Editar</button>
                <button type="button" className="btn btn-danger" onClick={()=> this.cerrarModalEditar()}>Cancelar</button>
            </ModalFooter>
        </Modal>
        </>
        );
    }
}
export default Humedad;