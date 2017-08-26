import React from 'react'
import styled from 'styled-components'
import AudioPlayer from 'react-responsive-audio-player'
import '../music/audioplayer.css'
import Wrapper from '../components/AlbumWrap'

const Cover = styled.div`
  background: url(${require('../images/assets/cover2010.png')});
  height: 350px;
  width: 350px;
`

const Wrapper1 = styled(Wrapper)`
  margin-top: 20px;
`

const playlist = [{
  url: require('../music/01.mp3'),
  displayText: 'Dinosaur vs. Early Man'
},{
  url: require('../music/02.mp3'),
  displayText: 'The Long Dream of Birds'
},{
  url: require('../music/03.mp3'),
  displayText: 'Palestine Everywhere'
},{
  url: require('../music/04.mp3'),
  displayText: 'Happy Ending'
},{
  url: require('../music/05.mp3'),
  displayText: 'Ho-Hum Apocalypse'
},{
  url: require('../music/06.mp3'),
  displayText: 'Greenland'
},{
  url: require('../music/07.mp3'),
  displayText: 'Mexico'
},{
  url: require('../music/08.mp3'),
  displayText: 'A Prayer for Hemophilia'
},{
  url: require('../music/09.mp3'),
  displayText: 'Lisa\'s Pixie Cut'
},{
  url: require('../music/10.mp3'),
  displayText: 'Outside'
},{
  url: require('../music/11.mp3'),
  displayText: 'A Moment in Energy Transfer'
}]

const Album1 = () => {
  return(
    <Wrapper1>
      <Cover><h2>{playlist.displayText}</h2></Cover>
      <h3>The Long Dream of Birds (2010)</h3>
      <AudioPlayer playlist={playlist} />
    </Wrapper1>
  )
}

export default Album1
