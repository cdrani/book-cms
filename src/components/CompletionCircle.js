import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  margin-top: -1.2rem;
  margin-right: 1rem;
  display: inline-block;
`
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
  console.log('percentage', percentage)
  const sqSize = 80
  const strokeWidth = 10
  const radius = (sqSize - strokeWidth) / 2
  const viewBox = `0 0 ${sqSize} ${sqSize}`
  const dashArray = radius * Math.PI * 2
  const dashOffset = dashArray - dashArray * (percentage)

  return (
    <Svg width={sqSize} height={sqSize} viewBox={viewBox}>
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
    </Svg>
  )
}

export default CompletionCircle
