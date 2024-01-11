// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  NotesHeading,
  AddButtonContainer,
  AddButton,
  MainBgContainer,
  AddContainer,
  InputText,
  InputTextArea,
  NoNotesContainer,
  NoNotesHeading,
  NoNotesImage,
  NoNotesParagraph,
  UnOrderList,
} from './styledComponents'
import NoteItem from '../NoteItem'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const onChangeTitle = event => {
    setTitle(event.target.value)
  }
  const onChangeNotes = event => {
    setNotes(event.target.value)
  }
  const [commentsList, setCommentsList] = useState([])
  const onSubmitButton = event => {
    event.preventDefault()

    const newComment = {
      id: uuidv4(),
      title,
      notes,
    }

    setCommentsList(prevCommentsList => [...prevCommentsList, newComment])
    setNotes('')
    setTitle('')
  }
  return (
    <MainBgContainer>
      <NotesHeading>Notes</NotesHeading>
      <AddContainer onSubmit={onSubmitButton}>
        <InputText
          type="text"
          placeholder="Title"
          value={title}
          onChange={onChangeTitle}
        />
        <br />
        <InputTextArea
          type="text"
          placeholder="Take a Note..."
          value={notes}
          onChange={onChangeNotes}
        />
        <AddButtonContainer>
          <AddButton type="submit">Add</AddButton>
        </AddButtonContainer>
      </AddContainer>
      {commentsList.length > 0 ? (
        <UnOrderList>
          {commentsList.map(eachComment => (
            <NoteItem key={eachComment.id} eachComment={eachComment} />
          ))}
        </UnOrderList>
      ) : (
        <NoNotesContainer>
          <NoNotesImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NoNotesHeading>No Notes yet</NoNotesHeading>
          <NoNotesParagraph>Notes you add will appear here</NoNotesParagraph>
        </NoNotesContainer>
      )}
    </MainBgContainer>
  )
}

export default Notes
