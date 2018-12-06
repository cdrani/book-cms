import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import shortid from 'shortid'
import { setActiveCategory, setTitle, createBook } from '../actions'
import { categories } from '../constants'

const H3 = styled.h3`
  letter-spacing: -0.2px;
  color: #888888;
`

const Form = styled.form`
  display: flex;
  justify-content: space-between;
`

const InputWrapper = styled.div`
  width: 85%;
  height: 45px;
  justify-items: space-between;
  font-size: 1.5rem;
  color: #c4c4c4;
  opacity: 0.85;
  background-color: #fff;
`

const Input = styled.input`
  width: 60%;
  margin-right: 15px;
  padding: 10px;
  border-radius: 4px;
  border: solid 1px #e8e8e8;
  outline: 0;
`

const Select = styled.select`
  width: 32%;
  height: 40px;
  font-size: 1rem;
  border: solid 1px #e8e8e8;
  background-color: #fff;
  opacity: 0.85;
  outline: 0;
`

const Button = styled.button`
  width: 15%;
  color: #fff;
  border-radius: 3px;
  background-color: #0290ff;
`

const BooksForm = ({
  activeCategory,
  createBook,
  setActiveCategory,
  setTitle,
  title
}) => {
  const handleSetActiveCategory = e => {
    const activeCategory = e.target.value
    setActiveCategory(activeCategory)
  }

  const handleSetTitle = e => {
    const title = e.target.value
    setTitle(title)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const id = shortid.generate()
    const elements = e.target.elements
    const [title, category] = getFormFields(elements)
    createBook({ id, title, category })
  }

  const getFormFields = elements => {
    const fields = ['title', 'category']
    return fields.map(field => elements.namedItem(field).value)
  }

  return (
    <div>
      <H3>ADD NEW BOOK</H3>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            name="title"
            value={title}
            onChange={handleSetTitle}
            placeholder="title"
          />
          <Select
            name="category"
            onChange={handleSetActiveCategory}
            value={activeCategory}
          >
            {categories.map(category => (
              <option key={category}>{category}</option>
            ))}
          </Select>
        </InputWrapper>
        <Button>Submit</Button>
      </Form>
    </div>
  )
}

const mapStateToProps = ({ activeCategory, title }) => ({
  activeCategory,
  title
})

export default connect(
  mapStateToProps,
  { setActiveCategory, setTitle, createBook }
)(BooksForm)
