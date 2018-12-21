import React from 'react'
import styled from 'styled-components'

const Circle = styled.circle`
  stroke: #ddd;
  fill: none;
`

const CircleCompletion = styled(Circle)`
  stroke: #007bff;
  stroke-linecap: round;
  stroke-linejoin: round;
`

const CompletionCircle = ({ percentage }) => {
  const sqSize = 80
  const strokeWidth = 6 
  const radius = (sqSize - strokeWidth) / 2
  const viewBox = `0 0 ${sqSize} ${sqSize}`
  const dashArray = radius * Math.PI * 2
  const dashOffset = dashArray - dashArray * percentage

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
      <Circle
        className="circle-background"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <CircleCompletion
        className="circle-progress"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset
        }}
      />
    </svg>
  )
}

export default CompletionCircle
