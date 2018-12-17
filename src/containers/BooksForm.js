import React, { useState } from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'

import {
  categories,
  CREATEBOOK,
  MYBOOKS,
  Button,
  Input,
  LargeInputWrapper,
  SmallInputWrapper,
  Select
} from '../constants'

const H3 = styled.h3`
  letter-spacing: -0.2px;
  color: #888888;
`

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
`

const Number = styled(Input)`
  text-align: center;
  width: 40%;
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

const BooksForm = () => {
  const [bookTitle, setTitle] = useState('')
  const [bookAuthor, setAuthor] = useState('')
  const [bookCategory, setCategory] = useState('Novel')
  const [bookPages, setPages] = useState(1)
  const [bookCurrentPage, setCurrentPage] = useState(1)
  const [bookChapters, setChapters] = useState(1)
  const [bookCurrentChapter, setCurrentChapter] = useState(1)

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

  const updateCache = (cache, { data: { createBook } }) => {
    const {
      myBooks: { edges, pageInfo }
    } = cache.readQuery({
      query: MYBOOKS,
      variables: { input: { limit: 5 } }
    })

    cache.writeQuery({
      query: MYBOOKS,
      variables: { input: { limit: 5 } },
      data: {
        myBooks: {
          __typename: 'BookConnection',
          edges: [Object.assign(createBook, { __typename: 'Book' }), ...edges],
          pageInfo
        }
      }
    })
  }

  return (
    <div>
      <H3>ADD NEW BOOK</H3>
      <Mutation mutation={CREATEBOOK} update={updateCache}>
        {(createBook, { data }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault()
              await createBook({
                variables: {
                  input: {
                    title: bookTitle,
                    author: bookAuthor,
                    category: bookCategory,
                    currentPage: parseInt(bookCurrentPage, 10),
                    pages: parseInt(bookPages, 10),
                    currentChapter: parseInt(bookCurrentChapter, 10),
                    chapters: parseInt(bookChapters, 10)
                  }
                }
              })

              setTitle('')
              setAuthor('')
              setCategory('Novel')
              setCurrentPage(1)
              setPages(1)
              setCurrentChapter(1)
              setChapters(1)
            }}
          >
            <LargeInputWrapper>
              <LabelContainer>
                <Label>Title</Label>
                <Input
                  value={bookTitle}
                  onChange={handleTitle}
                  placeholder="title"
                />
              </LabelContainer>

              <LabelContainer>
                <Label>Author</Label>
                <Input
                  value={bookAuthor}
                  onChange={handleAuthor}
                  placeholder="author"
                />
              </LabelContainer>

              <LabelContainer>
                <Label>Category</Label>
                <Select
                  name="category"
                  onChange={handleCategory}
                  value={bookCategory}
                >
                  {categories.map(category => (
                    <option key={category}>{category}</option>
                  ))}
                </Select>
              </LabelContainer>
            </LargeInputWrapper>

            <SmallInputWrapper>
              <LabelContainer>
                <LargeLabel>Current Page</LargeLabel>
                <Number
                  min="1"
                  type="number"
                  value={bookCurrentPage}
                  onChange={handleCurrentPage}
                />
              </LabelContainer>

              <LabelContainer>
                <LargeLabel>Number of Pages</LargeLabel>
                <Number
                  min="1"
                  type="number"
                  value={bookPages}
                  onChange={handlePages}
                />
              </LabelContainer>

              <LabelContainer>
                <LargeLabel>Current Chapter</LargeLabel>
                <Number
                  min="1"
                  type="number"
                  value={bookCurrentChapter}
                  onChange={handleCurrentChapter}
                />
              </LabelContainer>

              <LabelContainer>
                <LargeLabel>Number of Chapters</LargeLabel>
                <Number
                  min="1"
                  type="number"
                  value={bookChapters}
                  onChange={handleChapters}
                />
              </LabelContainer>
              <Button type="submit">Submit</Button>
            </SmallInputWrapper>
          </Form>
        )}
      </Mutation>
    </div>
  )
}

export default BooksForm
