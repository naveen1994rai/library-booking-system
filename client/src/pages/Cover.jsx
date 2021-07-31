import React, { Component } from 'react';
import img from './../library_cover.jpg';

const styles = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    height: "100vh",
    color: "#f5f5f5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

export default class Cover extends Component {
    render() {
        return (
            <div style={styles}>
                <h1>Welcome to Your Library Catalogue</h1>
            </div>
        );
    }
}