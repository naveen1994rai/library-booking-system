import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../logo.svg'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="https://github.com/naveen1994rai">
                <img src={logo} width="50" height="50" alt="My Portfolio" />
            </Wrapper>
        )
    }
}

export default Logo;