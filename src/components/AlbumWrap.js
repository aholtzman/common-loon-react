import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #111;
  height: 100%;
  width: 500px;
  background-color: rgba(0, 0, 0, .2);
  padding-top: 30px;

  h3 {
    color: white;
  }

  @media (max-width: 425px) {
    width: 350px;
    padding-top: 0;
  }

  @media (max-width: 325px) {
    width: 300px;
  }
`

export default Wrapper
