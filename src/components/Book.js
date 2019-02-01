import React from 'react'
import styled from 'styled-components'
import { useMutation } from 'react-apollo-hooks'

import DashBoard from '../containers/DashBoard'
import BooksForm from '../containers/BooksForm'
import CompletionCircle from './CompletionCircle'
import { MYBOOKS, DELETEBOOK } from '../constants'

const BooksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  border: solid 1px #e8e8e8;
  background-color: #fff;
  @media only screen and (max-device-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`

const BookInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 45%;
  padding: 2.5% 2.2%;
  @media only screen and (max-device-width: 480px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    align-self: center;
  }
`

const BookDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

const H3 = styled.h3`
  padding: 0;
  margin: 0;
`

const Genre = styled.p`
  padding: 0;
  margin: 0;
  color: #121212;
  opacity: 0.5;
`

const LinksWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  padding: 2.5% 2.2%;
  font-size: 1.25rem;
  @media only screen and (max-device-width: 480px) {
    justify-content: center;
  }
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
  justify-content: space-around;
  width: 30%;
  padding: 2.5% 2.2%;
  @media only screen and (max-device-width: 480px) {
    width: 100%;
    margin-top: 20px;
    margin: 10px auto;
  }
`

const AmountCompletedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  margin-right: 30px;
`

const CompletionText = styled.p`
  margin: 0;
  padding: 0;
  opacity: 0.5;
  color: #121212;
`

const LargeCompletionText = styled(CompletionText)`
  font-size: 2rem;
  margin: 0;
  margin-top: 10px;
`

const ChapterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    align-items: flex-end;
    margin-top: 0;
  }
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
  margin: 0;
  padding: 0;
  font-size: 1.1rem;
`

const Book = ({ book }) => {
  const percentComplete = book.currentPage / book.pages

  const handleBookDelete = useMutation(DELETEBOOK, {
    variables: { input: { id: book.id } },
    update: cache => {
      const {
        myBooks: { edges, pageInfo }
      } = cache.readQuery({
        query: MYBOOKS,
        variables: { input: { limit: 5 } }
      })

      const remainingBooks = edges.filter(node => node.id !== book.id)

      cache.writeQuery({
        query: MYBOOKS,
        variables: {
          input: {
            limit: 5
          }
        },
        data: {
          myBooks: {
            __typename: 'BookConnection',
            edges: remainingBooks,
            pageInfo
          }
        }
      })
    }
  })

  return (
    <BooksWrapper>
      <BookInfoWrapper>
        <BookDetail>
          <Genre>{book.category}</Genre>
          <H3>{book.title}</H3>
          <Author>{book.author}</Author>
        </BookDetail>
        <ChapterWrapper>
          <ChapterHeader>CHAPTER</ChapterHeader>
          <CurrentChapter>
            {book.currentChapter} / {book.chapters}
          </CurrentChapter>
        </ChapterWrapper>
      </BookInfoWrapper>
      <BookCompletionWrapper>
        <AmountCompletedWrapper>
          <LargeCompletionText>
            {Math.round(percentComplete * 100)}%
          </LargeCompletionText>
          <CompletionText>Completed</CompletionText>
        </AmountCompletedWrapper>
        <CompletionCircle percentage={percentComplete} />
      </BookCompletionWrapper>
      <LinksWrapper>
        <BorderedLink onClick={handleBookDelete}>Remove</BorderedLink>
        <DashBoard buttonText="Edit">
          <BooksForm book={book} bookId={book.id} formType="Update" />
        </DashBoard>
      </LinksWrapper>
    </BooksWrapper>
  )
}

export default Book
