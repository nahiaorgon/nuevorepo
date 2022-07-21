import React from 'react'
import {Container, Row, Col, Nav, Table, Button} from  'react-bootstrap'
import SideBarRealEstate from '../../../layout/SideBarRealEstate'
import "../RealEstateAgent.css" 
import { Link } from "react-router-dom";


const ViewEvents = () => {
  return (
    <Container>
        <Row className='vw-100' stlye = {{height: "vw-100"}}>
            <Col sm={3} className = "bg">
                <SideBarRealEstate name = "Clara" job = "Agente Inmobiliario" />
            </Col>
            <Col sm={9} className = "mb-101">
                <h1 className='client-h'>Eventos</h1>
                
                <input type="text" placeholder='Buscar Evento' />
                <div className = "table">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Cliente</th>
                                <th>Direccion Inmueble</th>
                                <th>Correo Electronico</th>
                                <th>Tipo Evento</th>
                                <th>Fecha y Hora</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Juan Perez</td>
                                <td>Calle French 414</td>
                                <td>ejemplo@gmail.com</td>
                                <td>Cita</td>
                                <td>02/06/2022 - 14:00</td>
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
                                Agregar Eventos
                            </Link>
                        </Nav>
                    </Button>
                </div>
            </Col>
        </Row>
    </ Container>

  )
}
export default ViewEvents