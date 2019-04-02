import styled from 'styled-components'

const AlbumCover = styled.div`
  background: url(${require('../images/assets/cover2019.jpg')});
  height: 350px;
  width: 350px;
  background-position: center;

  @media (max-width: 325px) {
    width: 300px;
    height: 300px;
    margin-top: 8px;
  }

  @media (max-width: 325px) {
    margin-top: 0;
}
`

export default AlbumCover
