import React, { Component } from 'react';
import FotoItem from './Foto';

export default class Timeline extends Component {

    constructor(){
        super()

        this.state = {
            fotos: [],
        }
    }

    componentDidMount(){
        const authToken = localStorage.getItem('auth-token');
        // `http://localhost:8080/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}
        fetch(`http://localhost:8080/api/fotos?X-AUTH-TOKEN=${authToken}`)
            .then(response => response.json())
            .then(response => this.setState({fotos: response}))
    }

    render(){
        return (
            <div className="fotos container">
                {
                    this.state.fotos.map(foto => <FotoItem key={foto.id} foto={foto} />)
                }
            </div>    
        );
    }
}