import React from 'react'
import {Container, Row, Col, Nav, Table, Button} from  'react-bootstrap'
import SideBarRealEstate from '../../../layout/SideBarRealEstate'
import "../RealEstateAgent.css" 
import { Link } from "react-router-dom";


const Estates = () => {
  return (
    <Container>
        <Row className='vw-100' stlye = {{height: "vw-100"}}>
            <Col sm={3} className = "bg">
                <SideBarRealEstate name = "Clara" job = "Agente Inmobiliario" />
            </Col>
            <Col sm={9} className = "mb-101">
                <h1 className='client-h'>Propiedades</h1>
                
                <input type="text" placeholder='Buscar Inmueble' />
                <div className = "table">
                    <h3 style = {{textAlign: "start"}}>Departamentos</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Cliente</th>
                                <th>Tipo</th>
                                <th>Cantidad Habitaciones</th>
                                <th>Precio</th>
                                <th>Pago</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>25505</td>
                                <td>Alcaraz, Marisol Alejandra </td>
                                <td>Alquiler</td>
                                <td>3</td>
                                <td>$45.000</td>
                                <td>Transferencia</td>
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
                                Agregar Departamentos
                            </Link >
                        </Nav>
                    </Button>
                    <div style = {{padding: "10px"}}>

                    </div>


                    <h3 style = {{padding: "10px", textAlign: "start"}}>Casas</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Cliente</th>
                                <th>Tipo</th>
                                <th>Cantidad Habitaciones</th>
                                <th>Precio</th>
                                <th>Pago</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>25505</td>
                                <td>Alcaraz, Marisol Alejandra </td>
                                <td>Alquiler</td>
                                <td>3</td>
                                <td>$45.000</td>
                                <td>Transferencia</td>
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
                                Agregar Casas
                            </Link>
                        </Nav>
                    </Button>
                </div>
            </Col>
        </Row>
    </ Container>
  )
}
export default Estates