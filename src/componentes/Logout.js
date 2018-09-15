import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Logout extends Component{
    constructor(){
        super()
        localStorage.removeItem('auth-token')
    }

    render(){
        return <Redirect to="/" push />
    }
}