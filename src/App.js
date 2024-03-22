import logo from './logo.svg';
import './App.css';
// import {MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Modal, Button } from 'react-bootstrap';
import OptionsMenu from "./component/OptionsMenu";

function App() {
    const [showMenu, setShowMenu] = React.useState(false);

    const handleClose = () => setShowMenu(false);
    const handleShow = () => setShowMenu(true);

    return (
        <div>
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '500px', width: '100%' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>

            <Button variant="primary" onClick={handleShow}>
                Abrir Menu
            </Button>

            <Modal show={showMenu} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Menu de Opções</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        <li>Opção 1</li>
                        <li>Opção 2</li>
                        <li>Opção 3</li>
                        {/* Adicione mais opções conforme necessário */}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default App;
