import React from 'react'
import Particles from "react-tsparticles"
import * as S from './snowParticlesStyles'

const SnowParticles = () => {
  const particlesInit = (main) => {
    // console.log(main)

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    // console.log(container)
  }
  return (
    <S.Wrapper>
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        "particles":{
            "color":{
              "value":"#fff"
            },
            "move":{
              "direction":"bottom",
              "enable":true,
              "outModes":"out",
              "speed":2
            },
            "number":{
              "density":{
                  "enable":true,
                  "area":800
              },
              "value":400
            },
            "opacity":{
              "value":0.7
            },
            "shape":{
              "type":"circle"
            },
            "size":{
              "value":4
            },
            "wobble":{
              "enable":true,
              "distance":10,
              "speed":10
            },
            "zIndex":{
              "value":{
                  "min":0,
                  "max":100
              }
            }
        }
      }}
      />
      </S.Wrapper>
  )
}

export default SnowParticles