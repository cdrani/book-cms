import React, { useState } from 'react'
import { Mutation, compose, graphql } from 'react-apollo'
import { useMutation } from 'react-apollo-hooks'

import {
  categories,
  ADDTOFILTERABLECATEGORIES,
  CREATEBOOK,
  MYBOOKS,
  FullWidthForm,
  Input,
  InputWrapper,
  LabelContainer,
  NumberInput,
  SmallButton,
  SmallInputWrapper,
  SmallLabel,
  SmallLabelContainer,
  Select
} from '../constants'

const BooksForm = ({ addToCategories, handleClose }) => {
  const [bookTitle, setTitle] = useState('')
  const [bookAuthor, setAuthor] = useState('')
  const [bookCategory, setCategory] = useState('Novel')
  const [bookPages, setPages] = useState(1)
  const [bookChapters, setChapters] = useState(1)

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

  const handleChapters = e => {
    setChapters(e.target.value)
  }

  const addBook = useMutation(CREATEBOOK, {
    update: (cache, { data: { createBook } }) => {
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
            edges: [
              Object.assign(createBook, { __typename: 'Book' }),
              ...edges
            ],
            pageInfo
          }
        }
      })
    }
  })

  const editBook = useMutation()

  return (
    <FullWidthForm
      onSubmit={async e => {
        e.preventDefault()
        const {
          data: {
            createBook: { category }
          }
        } = await addBook({
          variables: {
            input: {
              title: bookTitle,
              author: bookAuthor,
              category: bookCategory,
              pages: parseInt(bookPages, 10),
              chapters: parseInt(bookChapters, 10)
            }
          }
        })

        addToCategories({ variables: { cats: [category] } })

        setTitle('')
        setAuthor('')
        setCategory('Novel')
        setPages(1)
        setChapters(1)
        handleClose()
      }}
    >
      <InputWrapper>
        <LabelContainer>
          <SmallLabel>Title</SmallLabel>
          <Input
            value={bookTitle}
            onChange={handleTitle}
            placeholder="Strides"
          />
        </LabelContainer>

        <LabelContainer>
          <SmallLabel>Author</SmallLabel>
          <Input
            value={bookAuthor}
            onChange={handleAuthor}
            placeholder="Stephen Hill"
          />
        </LabelContainer>
        <LabelContainer>
          <SmallLabel>Category</SmallLabel>
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
      </InputWrapper>

      <SmallInputWrapper>
        <SmallLabelContainer>
          <SmallLabel>Number of Pages</SmallLabel>
          <NumberInput
            min="1"
            type="number"
            value={bookPages}
            onChange={handlePages}
          />
        </SmallLabelContainer>

        <SmallLabelContainer>
          <SmallLabel>Number of Chapters</SmallLabel>
          <NumberInput
            min="1"
            type="number"
            value={bookChapters}
            onChange={handleChapters}
          />
        </SmallLabelContainer>
        <SmallButton type="submit">Save</SmallButton>
      </SmallInputWrapper>
    </FullWidthForm>
  )
}

export default compose(
  graphql(ADDTOFILTERABLECATEGORIES, { name: 'addToCategories' })
)(BooksForm)
