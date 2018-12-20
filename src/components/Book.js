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

const H3 = styled.h3`
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

const ChapterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: baseline;
  padding-left: 3rem;
`

const ChapterHeader = styled.h3`
  font-family: RobotoSlab, serif;
  font-weight: 300;
  opacity: 0.5;
  color: #121212;
  margin: 0;
  padding: 0;
`

const CurrentChapter = styled.p`
  font-size: 1.1rem;
`

const UpdateButton = styled.button`
  padding: 10px;
  width: 80%;
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 1px;
  border-radius: 3px;
  background-color: #0290ff;
  color: #ffffff;
`

const Book = ({ book, handleRemoveBook }) => {
  const handleClick = () => {
    handleRemoveBook(book)
  }
  const percentComplete = book.currentPage / book.pages

  return (
    <BooksWrapper>
      <BookInfoWrapper>
        <Genre>{book.category}</Genre>
        <H3>{book.title}</H3>
        <Author>{book.author}</Author>
        <LinksWrapper>
          <BorderedLink onClick={handleClick}>Remove</BorderedLink>
          <Link>Edit</Link>
        </LinksWrapper>
      </BookInfoWrapper>
      <BookCompletionWrapper>
        <CompletionCircle percentage={percentComplete} />
        <AmountCompletedWrapper>
          <LargeCompletionText>
            {Math.round(percentComplete * 100)}%
          </LargeCompletionText>
          <CompletionText>In Progress</CompletionText>
        </AmountCompletedWrapper>
      </BookCompletionWrapper>
      <ChapterWrapper>
        <ChapterHeader>CHAPTERS</ChapterHeader>
        <CurrentChapter>{book.currentChapter} / { book.chapters}</CurrentChapter>
        <UpdateButton>Update Chapter</UpdateButton>
      </ChapterWrapper>
    </BooksWrapper>
  )
}

export default Book
