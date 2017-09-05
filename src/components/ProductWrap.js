import styled from 'styled-components'

const ProductWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, .2);
  width: 300px;
  height: 100%;
  margin: auto;
  margin-top: 25px;
  margin-bottom: 25px;
  border: 1px solid grey;

  h3 {
    color: white;
    text-align: center;
  }

  h5 {
    color: white;
    margin-left: 10px;
    text-align: center;
  }

  @media (max-width: 325px) {
    margin-top: 9px;
  }
`

export default ProductWrap
