import React from 'react'
import styled from 'styled-components'
import CompletionCircle from './CompletionCircle'

const BooksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5% 2.2%;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  border: solid 1px #e8e8e8;
  background-color: #fff;
`

const BookInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 45%;
`

const H2 = styled.h2`
  margin: 0;
`

const Genre = styled.p`
  color: #121212;
  opacity: 0.5;
`

const LinksWrapper = styled.div`
  width: 50%;
  margin-top: 8%;
`
const Link = styled.a`
  padding: 1% 2%;
  cursor: pointer
  text-decoration: none;
  color: #4386bf;
`
const BorderedLink = styled(Link)`
  padding-right: 10px;
  margin-right: 10px;
  border-right: solid 2px #e8e8e8;
`

const Author = styled(Link)`
  padding: 0;
`

const BookCompletionWrapper = styled.div`
  display: flex;
  width: 30%;
  padding-right: 3rem;
  border-right: solid 1px #e8e8e8;
`

const AmountCompletedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
  padding-left: 1rem;
`

const CompletionText = styled.p`
  opacity: 0.5;
  color: #121212;
  margin: 0;
`

const LargeCompletionText = styled(CompletionText)`
  font-size: 2rem;
`

const Book = ({ book, handleRemoveBook }) => {
  const handleClick = () => {
    handleRemoveBook(book)
  }

  return (
    <BooksWrapper>
      <BookInfoWrapper>
        <Genre>{book.category}</Genre>
        <H2>{book.title}</H2>
        <Author>Mackenzie Burns</Author>
        <LinksWrapper>
          <BorderedLink onClick={handleClick}>Remove</BorderedLink>
          <Link>Edit</Link>
        </LinksWrapper>
      </BookInfoWrapper>
      <BookCompletionWrapper>
        <CompletionCircle percentage={45} />
        <AmountCompletedWrapper>
          <LargeCompletionText>45%</LargeCompletionText>
          <CompletionText>In Progress</CompletionText>
        </AmountCompletedWrapper>
      </BookCompletionWrapper>
    </BooksWrapper>
  )
}

export default Book
