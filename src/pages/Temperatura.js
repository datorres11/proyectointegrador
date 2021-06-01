import React, {Component} from 'react';
import {Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
import MenuPrincipal from './MenuPrincipal';
const temperaturas =[
    {id:1, ciudad:"Bogotá",temperatura:"15º"},
    {id:2, ciudad:"Madrid",temperatura:"26º"},
    {id:3, ciudad:"Toronto",temperatura:"13º"},
    {id:4, ciudad:"Auckland",temperatura:"30º"},
    {id:5, ciudad:"paris",temperatura:"20º"},
];


class Temperatura extends Component{
    state={
        temperaturas:temperaturas,
        form:{
            ciudad:'',
            temperatura:''
            
        }
    }

    handleChange=e=>{
        this.state({
            form:{
                ...this.state.form,
                [e.target.ciudad]: e.target.value,
                [e.target.temperatura]: e.target.value
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
        var lista=this.state.temperaturas;
        lista.push(valorNuevo);
        this.setState({ubicaciones: lista,modalRegistro: false});
    }

    editarRegistro=(dato)=>{
        var contador=0;
        var lista=this.state.temperaturas;
        lista.map((registro)=>{
            if(dato.ciudad===registro.ciudad){
                lista[contador].pais=registro.pais;
                lista[contador].ciudad=registro.ciudad;
            }
            contador++;
        });
        this.setState({data: lista, modalEditar:false});
    }

    eliminarRegistro=(dato)=>{
        var opcion=window.confirm("¿Realmente desea eliminar el registro?");
        if(opcion){
            var contador=0;
            var lista= this.state.temperaturas
            lista.map((registro)=>{
                if(dato.ciudad===registro.ciudad){
                    lista.splice(contador,1)
                }
            })
            contador++;
        }
        this.setState({data: lista});
    }

    render(){
        return(
            <>
            <container>   
            <MenuPrincipal/>
            <br/>
            <br/>
            <div>
                <button type="button" className="btn btn-primary" onClick={()=> this.abrirModalRegistro()}>Registrar Temperatura</button>
            </div>
            <br/>
            <div>  
                <table className="table table-striped">
                    <thead>
                          <tr>
                            <th>Ciudad</th>
                            <th>Temperatura Cº</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.temperaturas.map((elemento)=>{
                            return(
                            <tr>
                                <td>{elemento.ciudad}</td>
                                <td>{elemento.temperatura}</td>
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
                    <h3>Registrar Temperatura</h3>
                </div>
                </ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label>Ciudad: </label>
                        <br/>
                        <input type="text" className="form-control" name='ciudad' onChange={this.handleChange}/>
                        <br/>
                        <label>Temperatura: </label>
                        <br/>
                        <input type="text" className="form-control" name='temperatura' onChange={this.handleChange}/>
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
                    <h3>Editar Temperatura</h3>
                </div>
                </ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label>Ciudad: </label>
                        <br/>
                        <input type="text" className="form-control" name='ciudad' onChange={this.handleChange} value={this.state.form.ciudad} readOnly/>
                        <br/>
                        <label>Temperatura: </label>
                        <br/>
                        <input type="text" className="form-control" name='temperatura' onChange={this.handleChange} value={this.state.form.temperatura}/>
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
export default Temperatura;