import React, { Component } from 'react'
import Slider from './Slider/Slider'
import Konten from './Konten/Konten'
import Arival from './Arival/Arival'
import Banner from './Banner/Banner'
export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Slider />
                <Konten />
                <Arival />
                <Banner />
            </React.Fragment>
        )
    }
}