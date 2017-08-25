import React from 'react'
import styled from 'styled-components'

const Flicker = styled.h1`
  animation: flicker 4s linear infinite;
  color: transparent;
  text-align: center;
  line-height: 300px;
  text-align: center;
  padding-top: 50px;

  @keyframes flicker {
    from { text-shadow: white 0 0 1px; }
  	4%  {text-shadow: white 0 0 1px	}
  	6%  {text-shadow: white 0 0 3px	}
  	8%  {text-shadow: white 0 0 4px	}
  	10% {text-shadow: white 0 0 2px	}
  	11% {text-shadow: white 0 0 1px	}
  	12% {text-shadow: white 0 0 3px	}
  	14% {text-shadow: white 0 0 1px	}
  	16% {text-shadow: white 0 0 3px	}
  	17% {text-shadow: white 0 0 9px	}
  	19% {text-shadow: white 0 0 1px	}
  	20% {text-shadow: white 0 0 7px	}
  	24% {text-shadow: white 0 0 6px	}
  	26% {text-shadow: white 0 0 5px	}
  	28% {text-shadow: white 0 0 4px	}
  	38% {text-shadow: white 0 0 3px	}
  	40% {text-shadow: white 0 0 1px	}
  	42% {text-shadow: white 0 0 2px	}
  	44% {text-shadow: white 0 0 7px	}
  	46% {text-shadow: white 0 0 7px	}
  	56% {text-shadow: white 0 0 7px	}
  	58% {text-shadow: white 0 0 5px	}
  	60% {text-shadow: white 0 0 2px	}
  	68% {text-shadow: white 0 0 2px	}
  	70% {text-shadow: white 0 0 3px	}
  	72% {text-shadow: white 0 0 4px	}
  	93% {text-shadow: white 0 0 5px	}
  	95% {text-shadow: white 0 0 3px	}
  	97% {text-shadow: white 0 0 3px	}
  	to  {text-shadow: white 0 0 2px	}
  }
`

const InnerBox = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 3;
`

const OuterBox = styled.div`
  width: 400px;
  height: 500px;
  display: block;
  position: relative;
  margin: auto;
  z-index: 1;
  background: url(${require('../images/assets/twoinone.jpg')});
  `

  const Wrap = styled.div`
    padding-top: 50px;
    grid-column-start: 3;
    grid-column-end: 8;
    grid-row-start: 1;
    grid-row-end: 5;
  `

  const Hero = () => {
    return(
      <Wrap>
        <InnerBox>
          <Flicker>common loon</Flicker>
        </InnerBox>
        <OuterBox />
      </Wrap>
    );
  }

  export default Hero
