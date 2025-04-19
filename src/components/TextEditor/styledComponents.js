import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
`

export const ResponsiveContainer = styled.div`
  background-color: #1b1c22;
  display: flex;
  width: 90%;
  max-width: 900px;
  padding: 20px;
  border-radius: 8px;
`

export const Image = styled.img`
  width: 50%;
  height: 100%;
`

export const TextEditorContainer = styled.div`
  width: 50%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  color: #f8fafc;
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-left:0px;
  padding-left:0px;
  list-style-type:none;
`

export const Button = styled.button`
  background-color: transparent;
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
  border: none;
  cursor: pointer;
  outline: none;
`

export const TextArea = styled.textarea`
  margin-top: 15px;
  height: 200px;
  height:100%;
  padding: 10px;
  background-color: transparent;
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 16px;
  border: 0.5px solid ##cbd5e1;
  outline: none;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};

  flex-grow: 1;

`
