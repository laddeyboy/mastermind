import React from 'react'
import MarkerButton from '../MarkerButton/MarkerButton'

const markerStyle = {
  color: 'black',
  width: '40px',
  display: 'flex',
  flexDirection: 'columns',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  marginLeft: '20%',
  marginTop: '3px'
}

const markerBox = () => {
  return (
    <div style={markerStyle}>
      <MarkerButton />
      <MarkerButton />
      <MarkerButton />
      <MarkerButton />

    </div>
  )
}

export default markerBox
