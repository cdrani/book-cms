import React, { useState } from 'react'
import { compose, graphql } from 'react-apollo'
import { useMutation } from 'react-apollo-hooks'

import {
  categories,
  ADDTOFILTERABLECATEGORIES,
  CREATEBOOK,
  EDITBOOK,
  MYBOOKS,
  FullWidthForm,
  Input,
  InputWrapper,
  LabelContainer,
  NumberInput,
  SmallButton,
  // SmallInputWrapper,
  SmallLabel,
  SmallLabelContainer,
  Select
} from '../constants'

const BooksForm = ({
  book,
  bookId,
  addToCategories,
  formType,
  handleClose
}) => {
  const [bookDetail, setBookDetail] = useState({
    title: book ? book.title : '',
    author: book ? book.author : '',
    category: book ? book.category : 'Novel',
    pages: book ? book.pages : 125,
    chapters: book? book.chapters : 13
  })

  const handleChange = key => e => {
    const updatedValue = { [key]: e.target.value }
    setBookDetail(prevState => ({ ...prevState, ...updatedValue }))
  }

  const addBook = useMutation(CREATEBOOK, {
    update: (cache, { data: { createBook } }) => {
      createBook.currentPage = 0
      createBook.currentChapter = 1

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

  const editBookData = useMutation(EDITBOOK)

  return (
    <FullWidthForm
      onSubmit={async e => {
        e.preventDefault()
        const type = e.target.elements[5].textContent
        let categoryVal

        const { title, author, category, pages, chapters } = bookDetail
        const variables = {
          input: {
            title,
            author,
            category,
            pages: parseInt(pages, 10),
            chapters: parseInt(chapters, 10)
          }
        }

        if (type === 'SAVE') {
          const {
            data: { createBook }
          } = await addBook({ variables })

          categoryVal = createBook.category
        } else {
          variables.input.id = bookId

          const {
            data: { editBook }
          } = await editBookData({ variables })

          setBookDetail(prevState => ({...prevState, ...variables.input}))
          categoryVal = editBook.category
        }

        addToCategories({ variables: { cats: [categoryVal] } })

        handleClose()
      }}
    >
      <InputWrapper>
        <LabelContainer>
          <SmallLabel>Title</SmallLabel>
          <Input
            defaultValue={book ? book.title : bookDetail.title}
            onChange={handleChange('title')}
            placeholder="Strides"
          />
        </LabelContainer>

        <LabelContainer>
          <SmallLabel>Author</SmallLabel>
          <Input
            defaultValue={book ? book.author : bookDetail.author}
            onChange={handleChange('author')}
            placeholder="Stephen Hill"
          />
        </LabelContainer>

        <LabelContainer>
          <SmallLabel>Category</SmallLabel>
          <Select
            name="category"
            onChange={handleChange('category')}
            defaultValue={book ? book.category : bookDetail.category}
          >
            {categories.map(category => (
              <option key={category}>{category}</option>
            ))}
          </Select>
        </LabelContainer>

        <SmallLabelContainer>
          <SmallLabel>Number of Pages</SmallLabel>
          <NumberInput
            min="1"
            type="number"
            defaultValue={book ? book.pages : bookDetail.pages}
            onChange={handleChange('pages')}
          />
        </SmallLabelContainer>

        <SmallLabelContainer>
          <SmallLabel>Number of Chapters</SmallLabel>
          <NumberInput
            min="1"
            type="number"
            defaultValue={book ? book.chapters : bookDetail.chapters}
            onChange={handleChange('chapters')}
          />
        </SmallLabelContainer>
        <SmallButton type="submit">{formType}</SmallButton>
      </InputWrapper>
    </FullWidthForm>
  )
}

export default compose(
  graphql(ADDTOFILTERABLECATEGORIES, { name: 'addToCategories' })
)(BooksForm)
