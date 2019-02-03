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

const Text = styled.text`
  opacity: 0.5;
  color: #121212;
  font-size: 2rem;
`

const CompletionCircle = ({ percentage, children, completionText }) => {
  const sqSize = 120
  const strokeWidth = 8
  const radius = (sqSize - strokeWidth) / 2
  const viewBox = `0 0 ${sqSize} ${sqSize}`
  const dashArray = radius * Math.PI * 2
  const dashOffset = dashArray - dashArray * percentage

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
      <Circle
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <Text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy="0.3em"
      >
        {completionText}%
      </Text>
      <CircleCompletion
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
