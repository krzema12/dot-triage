import React from 'react';

function DotTriageComponent() {
  return (
    <div>
    { _pieWithBorder("100px", 1.0, 95, "#00FF00") }
    { _pieWithBorder("100px", 0.7, 194, "#00FF00") }
    { _pieWithBorder("100px", 0.4, 194, "#0000FF") }
    </div>
  );
}

function _pieWithBorder(totalSize, normalizedRadius, angleInDegrees, color) {
  // https://www.vicompany.nl/magazine/how-to-code-a-pie-a-designers-adventure-in-maths-and-svg
  const angleInRadians = Math.PI*angleInDegrees/180
  const endPointY = normalizedRadius*Math.cos(angleInRadians)
  const endPointX = normalizedRadius*Math.sin(angleInRadians)
  const largeArcFlag = angleInDegrees > 180 ? 1 : 0

  return (
    <div>
      <svg width={totalSize} height={totalSize} viewBox="-1 -1 2 2">
        <g transform="rotate(-90)">
          <circle cx="0" cy="0" r="0.975" fill="none" stroke={color} stroke-width="0.05" stroke-location="inside" />
          <path d={"M0,0 L" + normalizedRadius + ",0 A" + normalizedRadius + "," + normalizedRadius + " 0 " + largeArcFlag + ",1 " + endPointY + "," + endPointX + " Z"} fill={color}/>
        </g>
      </svg>
    </div>
  )
}

export default DotTriageComponent;
