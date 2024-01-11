// Style your elements here
import styled from 'styled-components'

export const MainBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NotesHeading = styled.h1`
  font-family: Bree Serif;
  color: #4c63b6;
  text-align: center;
`

export const AddContainer = styled.form`
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  width: 60vw;
  padding: 30px;
`

export const InputText = styled.input`
  border: none;
  height: 7vh;
  width: 30vw;
  outline: none;
  margin-bottom: 30px;
`

export const AddButtonContainer = styled.div`
  text-align: right;
`

export const AddButton = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  border: none;
  border-radius: 5px;
  background-color: #4c63b6;
  padding: 10px;
`
export const NoNotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

export const NoNotesHeading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  text-align: center;
`

export const NoNotesParagraph = styled.p`
  color: #334155;
  font-family: 'Roboto';
  text-align: center;
`

export const NoNotesImage = styled.img`
  width: 15vw;
  height: 30vh;
`
export const UnOrderList = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  width: 60vw;
  list-style-type: none;
`
export const InputTextArea = styled.textarea`
  border: none;
  height: 7vh;
  width: 30vw;
  outline: none;
  margin-bottom: 30px;
`
