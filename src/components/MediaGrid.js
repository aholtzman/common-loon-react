
import React from 'react'
import styled from 'styled-components'
import Music from './Music'
import Video from './Videos'

const Grid = styled.div`
  height: 200px;
  width: 200px;
  display: grid;
  grid-template-rows: 80px 40px 80px;
  grid-template-columns: 80px 40px 80px;
  grid-column-start: 1;
  grid-column-end: 2
  grid-row-start: 1;
  grid-row-end: 2;
`
const MediaGrid = () => {
    return (
      <Grid>
        <Music />
        <Video />
      </Grid>
    );
}

export default MediaGrid
