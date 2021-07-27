import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class BookUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            author: '',
            rating: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputRating = async event => {
        const rating = event.target.validity.valid
            ? event.target.value
            : this.state.rating

        this.setState({ rating })
    }

    handleChangeInputAuthor = async event => {
        const author = event.target.value
        this.setState({ author })
    }

    handleUpdateBook = async () => {
        const { id, name, author, rating } = this.state
        //const arrayTime = time.split('/')
        const payload = { name, author, rating }

        await api.updateBookById(id, payload).then(res => {
            window.alert(`Book updated successfully`)
            this.setState({
                name: '',
                author: '',
                rating: '',
            })
        }).catch(error => console.log(error));
    }

    componentDidMount = async () => {
        const { id } = this.state;
        const book = await api.getBookById(id);

        this.setState({
            name: book.data.data.name,
            author: book.data.data.author,
            rating: book.data.data.rating,
        })
    }

    render() {
        const { name, author, rating } = this.state
        return (
            <Wrapper>
                <Title>Update Book</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Author: </Label>
                <InputText
                    type="text"
                    value={author}
                    onChange={this.handleChangeInputAuthor}
                />

                <Label>Rating: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={rating}
                    onChange={this.handleChangeInputRating}
                />

                <Button onClick={this.handleUpdateBook}>Update Book</Button>
                <CancelButton href={'/books/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default BookUpdate;