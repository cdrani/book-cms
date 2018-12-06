import React from 'react'

const CompletionCircle = ({ percentage }) => {
  const sqSize = 90
  const strokeWidth = 8
  const radius = (sqSize - strokeWidth) / 2
  const viewBox = `0 0 ${sqSize} ${sqSize}`
  const dashArray = radius * Math.PI * 2
  const dashOffset = dashArray - dashArray * (percentage / 100)

  return (
    <svg
      className="progress-circle"
      width={sqSize}
      height={sqSize}
      viewBox={viewBox}
    >
      <circle
        className="circle-background"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
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

export default ProgressCircle
