import React, { useState } from 'react'
import styled from 'styled-components'

const Page = () => {
  const [pressed, setPressed] = useState<boolean>(false)
  return (
    <Contaienr>
      <Button data-pressed={pressed} onClick={() => setPressed((prev) => !prev)}>
        <Text>Press</Text>
      </Button>
    </Contaienr>
  )
}

const Contaienr = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ebecf0;
`

const Button = styled.button`
  width: 300px;
  height: 300px;
  border-width: 0;
  border-radius: 50px;
  background: #ebecf0;
  box-shadow: 5px 5px 20px #c8c9cc, -5px -5px 20px #ffffff;
  outline: none;

  &[data-pressed='true'] {
    box-shadow: inset 5px 5px 20px #c8c9cc, inset -5px -5px 20px #ffffff;
  }
  color: #26648e;
`

const Text = styled.p`
  font-size: 24px;
`

export default Page
