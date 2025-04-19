import {useState} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  BgContainer,
  ResponsiveContainer,
  Image,
  TextEditorContainer,
  Button,
  ButtonsContainer,
  TextArea,
  Heading,
} from './styledComponents'

const TextEditor = () => {
  const [isBoldActive, setBoldActive] = useState(false)
  const [isItalicActive, setItalicActive] = useState(false)
  const [isUnderlineActive, setIsUnderlineActive] = useState(false)

  const toggleBold = () => setBoldActive(prev => !prev)
  const toggleItalic = () => setItalicActive(prev => !prev)
  const toggleUnderline = () => {
    console.log('Underline Active:', isUnderlineActive)
    setIsUnderlineActive(prev => !prev)
  }

  return (
    <BgContainer>
      <ResponsiveContainer>
        <Image
          src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
          alt="text editor"
        />
        <TextEditorContainer>
          <Heading>Text Editor</Heading>

          <ButtonsContainer as="ul">
            <li>
              <Button
                data-testid="bold"
                onClick={toggleBold}
                isActive={isBoldActive}
              >
                <VscBold size={25} />
              </Button>
            </li>
            <li>
              <Button
                data-testid="italic"
                onClick={toggleItalic}
                isActive={isItalicActive}
              >
                <GoItalic size={25} />
              </Button>
            </li>
            <li>
              <Button
                data-testid="underline"
                onClick={toggleUnderline}
                isActive={isUnderlineActive}
              >
                <AiOutlineUnderline size={25} />
              </Button>
            </li>
          </ButtonsContainer>

          <TextArea
            bold={isBoldActive}
            italic={isItalicActive}
            underline={isUnderlineActive}
          />
        </TextEditorContainer>
      </ResponsiveContainer>
    </BgContainer>
  )
}

export default TextEditor
