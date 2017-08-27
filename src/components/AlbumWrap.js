import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid grey;
  height: 100%;
  width: 500px;
  background-color: #222;
  padding-top: 30px;

  h3 {
    color: white;
  }

  @media (max-width: 850px) {
    width: 320px;
    padding-top: 0;
  }
`

export default Wrapper
