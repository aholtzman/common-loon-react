import React from 'react'
import styled from 'styled-components'
import BG from '../components/BG'

const Vids = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 35px;

  h5 {
    color: white;
    padding-bottom: 15px;
  }
`

const Video = styled.div`
  iframe {
    width: 560px;
    height: 315px;

    @media (max-width: 570px) {
      width: auto;
      height: auto;
    }
  }
`

const Videos = () => {
  return(
    <BG>
    <Vids>
      <Video>
        <iframe src="https://www.youtube.com/embed/mr_agrNegt8"  allowFullScreen title='The Coup'></iframe>
        <h5>Official Video</h5>
      </Video>
      <Video>
        <iframe src="https://www.youtube.com/embed/bQ6BJdygFWs"  allowFullScreen title='Landing in Greenland'></iframe>
        <h5>Video by Collins Lab</h5>
      </Video>
    </Vids>
  </BG>
  )
}

export default Videos
