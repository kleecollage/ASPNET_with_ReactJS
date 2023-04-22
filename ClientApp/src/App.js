import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
//import Tarjeta from "./componente/Tarjeta";

const App = () => {

    const [empleado, setEmpleado] = useState([]);

    const consumirAPI = async() => {

        const response = await fetch('api/empleado/ObtenerEmpleado');

        if (response.ok) {

            const data = await response.json();
            console.log(data);
            setEmpleado(data);
        }
    }

    useEffect(() => {
        consumirAPI();
    },[])



    return (
        <div className="container">

            <h5>Lista de Empleados</h5>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empleado.map((item) => (
                            <tr>
                                <td>{item.nombre}</td>
                                <td>{item.correo}</td>
                                <td>{item.direccion}</td>
                                <td>{item.telefono}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )












    // ###############################   HOOK USE EFFECT   ######################################

    //const [nombre, setNombre] = useState('Jhonny Bravo')

    //const EscribirEnConsola = () => {
    //    setNombre ("Juanito Banana")
    //    console.log("(useState) El nombre ha cambiado a:" + nombre)
    //}


    //useEffect( () => {
    //    console.log("(useEffect) El nombre ha cambiado a:" + nombre)
    //}, [nombre])


    //useEffect(() => {
    //    console.log("La App ha iniciado")
    //}, [])

    //return (
    //    <div className="container-fluid">
    //        <h2>El nombre actual es: {nombre}</h2>
    //        <button onClick={EscribirEnConsola}
    //        > Hook
    //        </button>
    //    </div>
    //)




    // #########################   HOOKS DE ESTADOS (USE STATE)   #########################

    //const [numero, setNumero] = useState(0);

    ///*
    //numero es el estado actual
    //set numero es la función para actualizar el estado
    //*/


    //let modelPersona = {
    //    Nombre: "Maria",
    //    Correo: "maria@mail.com"
    //}

    //const [persona, setPersona] = useState(modelPersona);

    //return (
    //    <div className="container-fluid">

    //        <h1>El estado actual es: {numero}</h1>
    //        <button
    //            onClick={() => setNumero(numero + 1)}
    //        >
    //            Actualizar estado
    //        </button> <br /><br />

    //        <p>Nombre: {persona.Nombre}</p>
    //        <p>Correo: {persona.Correo}</p>
    //        <button onClick={() => setPersona({
    //            ...persona,
    //            Correo: "maria_punteria@mail.com"
    //        })}
    //        >Spread Operator
    //        </button>




            // ######################          USO DE COMPONENTES      ###########################


            {/*<div className="row justify-content-sm-center">*/}
            {/*    <div className="col-sm-4">*/}
            {/*        <Tarjeta*/}
            {/*            titulo="Bienvenido a la pagina de ASP.NET con ReactJS"*/}
            {/*            parrafo="Esta es mi primer app cpn NET Core"*/}
            {/*            textoboton="Suscribete Perro" />*/}
            {/*        <Tarjeta*/}
            {/*            titulo="Bienvenido a la pagina de ASP.NET con ReactJS"*/}
            {/*            parrafo="Esta es mi primer app cpn NET Core"*/}
            {/*            textoboton="Suscribete Perro">*/}
            {/*            <a href="#" className="btn btn-warning">THIS IS: Destructuring</a>*/}
            {/*        </Tarjeta>*/}
            {/*    </div>*/}
            {/*</div>*/}
    
}


export default App


// #########################       PLANTILLA POR DEFECTO        ############################

//import React, { Component } from 'react';
//import { Route, Routes } from 'react-router-dom';
//import AppRoutes from './AppRoutes';
//import { Layout } from './components/Layout';
//import './custom.css';

//export default class App extends Component {
//  static displayName = App.name;

//  render() {
//    return (
//      <Layout>
//        <Routes>
//          {AppRoutes.map((route, index) => {
//            const { element, ...rest } = route;
//            return <Route key={index} {...rest} element={element} />;
//          })}
//        </Routes>
//      </Layout>
//    );
//  }
//}
