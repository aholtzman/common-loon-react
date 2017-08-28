import styled from 'styled-components'

const RoundDiv = styled.div`
  background-color: #e2e2e2;
  background-color: rgba(80, 80, 80, .4);
  border-radius: 10px;
  height: 120px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(80, 80, 80, .6);

  @media (max-width: 750px) {
    width: 100%;
    height: 40px;
    border-radius: 0;
    margin-bottom: 10px;
  }
`

export default RoundDiv
