import React, { useState } from 'react'
import { useMutation } from 'react-apollo-hooks'

import {
  FullWidthForm,
  InputWrapper,
  LabelContainer,
  NumberInput,
  SmallButton,
  SmallLabel,
  UPDATEBOOKMARK
} from '../constants'

const UpdateForm = ({ book, bookId, handleClose }) => {
  const [updateBookDetail, setUpdateBookDetail] = useState({
    currentChapter: book ? book.currentChapter : '',
    currentPage: book ? book.currentPage : ''
  })

  const handleChange = key => e => {
    const updatedValue = { [key]: e.target.value }
    setUpdateBookDetail(prevState => ({ ...prevState, ...updatedValue }))
  }

  const updateBook = useMutation(UPDATEBOOKMARK)

  return (
    <FullWidthForm
      onSubmit={async e => {
        e.preventDefault()

        const { currentChapter, currentPage } = updateBookDetail

        const variables = {
          input: {
            id: book.id,
            currentChapter: parseInt(currentChapter, 10),
            currentPage: parseInt(currentPage, 10)
          }
        }

        await updateBook({
          variables
        })

        handleClose()
      }}
    >
      <InputWrapper>
        <LabelContainer>
          <SmallLabel>Current Chapter</SmallLabel>
          <NumberInput
            min="1"
            type="number"
            defaultValue={
              book ? book.currentChapter : updateBookDetail.currentChapter
            }
            onChange={handleChange('currentChapter')}
            max={book.chapters}
          />
        </LabelContainer>
        <LabelContainer>
          <SmallLabel>Current Page</SmallLabel>
          <NumberInput
            min="1"
            type="number"
            defaultValue={
              book ? book.currentPage : updateBookDetail.currentPage
            }
            onChange={handleChange('currentPage')}
            max={book.pages}
          />
        </LabelContainer>
        <SmallButton type="submit">Update</SmallButton>
      </InputWrapper>
    </FullWidthForm>
  )
}

export default UpdateForm
