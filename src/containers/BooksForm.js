import React, { useState } from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
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
  display: flex;
  flex-direction: column;
  justify-items: space-around;
  width: 100%;
  padding: 25px;
  font-size: 1.5rem;
  color: #c4c4c4;
  opacity: 0.85;
  background-color: #fff;
`

const Input = styled.input`
  width: 90%;
  margin-right: 30px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 4px;
  border: solid 1px #e8e8e8;
  outline: 0;
`

const Number = styled(Input)`
  width: 30%;
`

const Select = styled.select`
  margin-right: 30px;
  width: 95%;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #e8e8e8;
  background-color: #fff;
  opacity: 0.85;
  outline: 0;
`

const Button = styled.button`
  width: 32%;
  height: 40px;
  color: #fff;
  border-radius: 3px;
  background-color: #0290ff;
`

const Label = styled.label`
  width: 30%;
`

const LargeLabel = styled(Label)`
  width: 60%;
`

const LabelContainer = styled.div`
  display: flex;
  width: 100%;
`

const SIGNUP = gql`
  mutation SignUp($input: signUpInput!) {
    signUp(input: $input) {
      token
    }
  }
`

const BooksForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [category, setCategory] = useState('Novel')
  const [pages, setPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [chapters, setChapters] = useState(1)
  const [currentChapter, setCurrentChapter] = useState(1)

  const handleTitle = e => {
    setTitle(e.target.value)
  }

  const handleAuthor = e => {
    setAuthor(e.target.value)
  }

  const handleCategory = e => {
    setCategory(e.target.value)
  }

  const handlePages = e => {
    setPages(e.target.value)
  }

  const handleCurrentPage = e => {
    setCurrentPage(e.target.value)
  }

  const handleChapters = e => {
    setChapters(e.target.value)
  }

  const handleCurrentChapter = e => {
    setCurrentChapter(e.target.value)
  }

  return (
    <div>
      <H3>ADD NEW BOOK</H3>
      <Mutation mutation={SIGNUP}>
        {(createBook, { data }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault()
              const {
                data: {
                  createBook: {
                    id,
                    title,
                    author,
                    category,
                    currentPage,
                    pages,
                    chapters,
                    currentChapter
                  }
                }
              } = await createBook({
                variables: {
                  input: {
                    title,
                    author,
                    category,
                    currentPage,
                    pages,
                    chapters,
                    currentChapter
                  }
                }
              })
            }}
          >
            <InputWrapper>
              <LabelContainer>
                <Label>Title</Label>
                <Input
                  value={title}
                  onChange={handleTitle}
                  placeholder="title"
                />
              </LabelContainer>
              <LabelContainer>
                <Label>Author</Label>
                <Input
                  value={author}
                  onChange={handleAuthor}
                  placeholder="author"
                />
              </LabelContainer>
              <LabelContainer>
                <Label>Category</Label>
                <Select
                  name="category"
                  onChange={handleCategory}
                  value={category}
                >
                  {categories.map(category => (
                    <option key={category}>{category}</option>
                  ))}
                </Select>
              </LabelContainer>
            </InputWrapper>
            <InputWrapper>
              <LabelContainer>
                <LargeLabel>Current Page</LargeLabel>
                <Number
                  min="1"
                  type="number"
                  value={currentPage}
                  onChange={handleCurrentPage}
                />
              </LabelContainer>

              <LabelContainer>
                <LargeLabel>Number of Pages</LargeLabel>
                <Number
                  min="1"
                  type="number"
                  value={pages}
                  onChange={handlePages}
                />
              </LabelContainer>

              <LabelContainer>
                <LargeLabel>Current Chapter</LargeLabel>
                <Number
                  min="1"
                  type="number"
                  value={currentChapter}
                  onChange={handleCurrentChapter}
                />
              </LabelContainer>

              <LabelContainer>
                <LargeLabel>Number of Chapters</LargeLabel>
                <Number
                  min="1"
                  type="number"
                  value={chapters}
                  onChange={handleChapters}
                />
              </LabelContainer>

              <Button>Submit</Button>
            </InputWrapper>
          </Form>
        )}
      </Mutation>
    </div>
  )
}

export default BooksForm
