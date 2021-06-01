import React, {Component} from 'react';
import MenuPrincipal from './MenuPrincipal';
import {Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
const ubicaciones =[
    {pais:"Colombia", ciudad:"Bogotá"},
    {pais:"España", ciudad:"Madrid"},
    {pais:"Canada", ciudad:"Toronto"},
    {pais:"Nueva Zelanda", ciudad:"Auckland"},
    {pais:"Francia",ciudad:"paris"},
];


class Ubicacion extends Component{
    state={
        ubicaciones:ubicaciones,
        form:{
            pais:'',
            ciudad:''
            
        },
        modalRegistro: false,

    }

    handleChange=e=>{
        this.state({
            form:{
                ...this.state.form,
                [e.target.pais]: e.target.value,
                [e.target.ciudad]: e.target.value
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
        var lista=this.state.ubicaciones;
        lista.push(valorNuevo);
        this.setState({ubicaciones: lista,modalRegistro: false});
    }

    editarRegistro=(dato)=>{
        var contador=0;
        var lista=this.state.ubicaciones;
        lista.map((registro)=>{
            if(dato.pais===registro.pais){
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
            var lista= this.state.ubicaciones
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
                <button type="button" className="btn btn-primary" onClick={()=> this.abrirModalRegistro()}>Nueva Ubicacion</button>
            </div>
            <br/>
            <div>  
                <table className="table table-striped">
                    <thead>
                          <tr>
                            <th>Pais</th>
                            <th>Ciudad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.ubicaciones.map((elemento)=>{
                            return(
                            <tr>
                                <td>{elemento.pais}</td>
                                <td>{elemento.ciudad}</td>
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
                    <h3>Registrar Ubicación</h3>
                </div>
                </ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label>Pais: </label>
                        <br/>
                        <input type="text" className="form-control" name='pais' onChange={this.handleChange}/>
                        <br/>
                        <label>Ciudad: </label>
                        <br/>
                        <input type="text" className="form-control" name='ciudad' onChange={this.handleChange}/>
                        <br/>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button type="button" className="btn btn-success" onClick={()=> this.insertarNuevoRegistro()}>Registrar</button>
                    <button type="button" className="btn btn-danger" onClick={()=> this.cerrarModalRegistro()}>Cancelar</button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={this.state.modalEditar}>
                <ModalHeader>
                <div>
                    <h3>Editar Ubicación</h3>
                </div>
                </ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label>Pais: </label>
                        <br/>
                        <input type="text" className="form-control" name='pais' onChange={this.handleChange} value={this.state.form.pais} readOnly/>
                        <br/>
                        <label>Ciudad: </label>
                        <br/>
                        <input type="text" className="form-control" name='ciudad' onChange={this.handleChange} value={this.state.form.ciudad}/>
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
export default Ubicacion;