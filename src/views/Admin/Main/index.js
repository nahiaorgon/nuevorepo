import React from 'react'
import {Container, Row, Nav, Col, Table, Button} from  'react-bootstrap'
import SideBarAdmin from '../../../layout/SideBarAdmin'
import "../Admin.css" 
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <Container>
        <Row className='vw-100' style = {{height: "vw-100"}}>
            <Col sm={3} className = "bg">
                <SideBarAdmin name = "Paula" job = "Administrador" />
            </Col>
            <Col sm={9} className = "mb-101">
                <h1 className='mt-5'>Gestion de Usuarios</h1>
      
                <input type="text" className='mt-5' placeholder='Buscar Usuario' />
                <div className = "table">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>DNI</th>
                                <th>Apellido y Nombre</th>
                                <th>Puesto</th>
                                <th>Telefono</th>
                                <th>Email</th>
                                <th>Direccion</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>54861</td>
                                <td>40486598</td>
                                <td>Valdés, Ramón</td>
                                <td>Administrativo</td>
                                <td>3486668848</td>
                                <td>valdes.ramon@mail.com</td>
                                <td>Santa Mónica 458, Resistencia</td>
                                <td>
                                    <div style={{display: "flexbox", flexDirection: "row"}}>
                                        <Button className='bg-warning mx-2'>M</Button>
                                        <Button className='bg-danger mx-2'>X</Button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>54861</td>
                                <td>40486598</td>
                                <td>Valdés, Ramón</td>
                                <td>Administrativo</td>
                                <td>3486668848</td>
                                <td>valdes.ramon@mail.com</td>
                                <td>Santa Mónica 458, Resistencia</td>
                                <td>
                                    <div style={{display: "flexbox", flexDirection: "row"}}>
                                        <Button className='bg-warning mx-2'>M</Button>
                                        <Button className='bg-danger mx-2'>X</Button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>54861</td>
                                <td>40486598</td>
                                <td>Valdés, Ramón</td>
                                <td>Administrativo</td>
                                <td>3486668848</td>
                                <td>valdes.ramon@mail.com</td>
                                <td>Santa Mónica 458, Resistencia</td>
                                <td>
                                    <div style={{display: "flexbox", flexDirection: "row"}}>
                                        <Button className='bg-warning mx-2'>M</Button>
                                        <Button className='bg-danger mx-2'>X</Button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>54861</td>
                                <td>40486598</td>
                                <td>Valdés, Ramón</td>
                                <td>Administrativo</td>
                                <td>3486668848</td>
                                <td>valdes.ramon@mail.com</td>
                                <td>Santa Mónica 458, Resistencia</td>
                                <td>
                                    <div style={{display: "flexbox", flexDirection: "row"}}>
                                        <Button className='bg-warning mx-2'>M</Button>
                                        <Button className='bg-danger mx-2'>X</Button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button className='btn-primary'>
                        <Nav defaultActiveKey="/home" className="flex-column text-start">
                            <Link
                                to="/addclients"
                                style={{ color: "#fff", textDecoration: "none" }}
                            >
                                Agregar Usuario
                            </Link>
                        </Nav>
                    </Button>
                </div>
                
     
            </Col>
            
        </Row>
    </ Container>
  )
}

export default Admin