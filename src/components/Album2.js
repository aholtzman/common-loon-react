import React from 'react'
import AudioPlayer from 'react-responsive-audio-player'
import '../music/audioplayer.css'
import Wrapper from '../components/AlbumWrap'
import AlbumCover from '../components/AlbumCover'

const playlist = [{
  url: require('../music/2017.01.mp3'),
  displayText: 'Tuesday'
},{
  url: require('../music/2017.02.mp3'),
  displayText: 'Radium'
},{
  url: require('../music/2017.03.mp3'),
  displayText: 'Sitting in The Flames'
},{
  url: require('../music/2017.04.mp3'),
  displayText: 'Radar Gun'
},{
  url: require('../music/2017.05.mp3'),
  displayText: 'Automatic Skin'
},{
  url: require('../music/2017.06.mp3'),
  displayText: 'Academy Smiles'
},{
  url: require('../music/2017.07.mp3'),
  displayText: 'Heart and Soul'
},{
  url: require('../music/2017.08.mp3'),
  displayText: 'Tired Of Waiting'
},{
  url: require('../music/2017.09.mp3'),
  displayText: 'Harry Dean Stanton'
},{
  url: require('../music/2017.10.mp3'),
  displayText: 'Via Appia'
},{
  url: require('../music/2017.11.mp3'),
  displayText: 'The Coup'
}]

const Album2 = () => {
  return(
    <Wrapper>
      <AlbumCover><h2>{playlist.displayText}</h2></AlbumCover>
      <h3>Common Loon (2019)</h3>
      <AudioPlayer playlist={playlist} />
    </Wrapper>
  )
}

export default Album2
