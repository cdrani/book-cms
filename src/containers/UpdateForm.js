import React, { useState } from 'react'

import {
  FullWidthForm,
  InputWrapper,
  LabelContainer,
  NumberInput,
  SmallButton,
  SmallLabel,
  SmallLabelContainer
} from '../constants'

const UpdateForm = ({ book, bookId }) => {
  const [updateBookDetail, setUpdateBookDetail] = useState({
    currentChapter: '',
    currentPages: ''
  })

  const handleChange = key => e => {
    const updatedValue = { [key]: e.target.value }
    setUpdateBookDetail(prevState => ({ ...prevState, ...updatedValue }))
  }

  return (
    <FullWidthForm>
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
            max={book.currentChapter}
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
