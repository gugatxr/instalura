import React, { Component } from 'react'
import queryString from 'query-string'
import { Redirect } from 'react-router'

export default class Login extends Component{

    constructor(props){
        super(props)

        let msg = '';
        
        const stringValues = queryString.parse(props.location.search)

        if ( typeof stringValues.msg !== undefined ) {
            msg = stringValues.msg
        } 

        this.state = {
            msg: msg,
            sucesso: false
        }
    }

    envia(event){
        event.preventDefault()

        const requestInfo = {
            method:'POST',
            // mode: 'no-cors',

            body:JSON.stringify({login:this.login.value,senha:this.senha.value}),
            headers: new Headers({
                'Content-type' : 'application/json' 
            }),
        };

        fetch('http://localhost:8080/api/public/login', requestInfo)
            .then(response => {
                if(response.ok) {
                    return response.text();
                } else {
                    throw new Error('não foi possível fazer o login');
                }
            })
            .then(token => {
                localStorage.setItem('auth-token', token)
                this.setState({
                    sucesso: true
                })
            })
            .catch(error => {
                this.setState({
                    msg: error.message
                })
            })
    }

    render(){
        if (this.state.sucesso) {
            return <Redirect to="/timeline" />
        }
        return(
            <div className="login-box">
                <h1 className="header-logo" >Instalura</h1>
                <span>{ this.state.msg }</span>

                <form onSubmit={this.envia.bind(this)}>  
                    <input type="text" ref={ (input) => this.login = input } />
                    <input type="password" ref={ (input) => this.senha = input } />
                    <input type="submit" value="Login" />
                </form>
                
            </div>
        )
    }
}