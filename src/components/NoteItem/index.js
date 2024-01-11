// Write your code here
import {
  NoteItemContainer,
  NoteItemHeading,
  NoteItemParagraph,
} from './styledComponents'

const NoteItem = props => {
  const {eachComment} = props
  const {title, notes} = eachComment

  return (
    <NoteItemContainer>
      <NoteItemHeading>{title}</NoteItemHeading>
      <NoteItemParagraph>{notes}</NoteItemParagraph>
    </NoteItemContainer>
  )
}

export default NoteItem
