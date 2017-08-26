import React from 'react'
import styled from 'styled-components'
import BG from '../components/BG'

const Vids = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 35px;
  padding-bottom: 60px;

  h5 {
    color: white;
    padding-bottom: 15px;
  }
`

const Videos = () => {
  return(
    <BG>
    <Vids>
      <div>
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/mr_agrNegt8" frameborder="0" allowfullscreen title='The Coup'></iframe>
        </div>
          <h5>Official Video</h5>
        </div>
        <div>
          <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bQ6BJdygFWs" frameborder="0" allowfullscreen title='Landing in Greenland'></iframe>
          </div>
            <h5>Video by Collins Lab</h5>
        </div>
    </Vids>
  </BG>
  )
}

export default Videos
