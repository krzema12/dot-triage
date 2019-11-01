import React from 'react';

function DotTriageComponent(props) {
  return (
    <div style={{textAlign: 'center'}}>
      {
        _pieWithBorder(
          "100px",
          _groupSizeAffectedToNormalizedRadius(props.groupSizeAffected),
          _probabilityToPieAngle(props.probability),
          _impactToColor(props.impact))
      }
    </div>
  );
}

function _groupSizeAffectedToNormalizedRadius(groupSizeAffected) {
  switch (groupSizeAffected) {
    case "small": return 0.4;
    case "medium": return 0.7;
    case "large": return 1.0;
    default: return 1.0;
  }
}

function _probabilityToPieAngle(probability) {
  switch (probability) {
    case "low": return 90;
    case "medium": return 180;
    case "high": return 270;
    case "always": return 360;
    default: return 360;
  }
}

function _impactToColor(impact) {
  switch (impact) {
    case "low": return "#4CAF50";
    case "medium": return "#FFC107";
    case "high": return "#F44336";
    default: return "gray";
  }
}

function _pieWithBorder(totalSize, normalizedRadius, angleInDegrees, color) {
  // https://www.vicompany.nl/magazine/how-to-code-a-pie-a-designers-adventure-in-maths-and-svg
  const angleInRadians = Math.PI*angleInDegrees/180
  const endPointY = normalizedRadius*Math.cos(angleInRadians)
  const endPointX = normalizedRadius*Math.sin(angleInRadians)
  const largeArcFlag = angleInDegrees > 180 ? 1 : 0

  return (
    <svg width={totalSize} height={totalSize} viewBox="-1 -1 2 2">
      <g transform="rotate(-90)">
        <circle cx="0" cy="0" r="0.975" fill="none" stroke={color} strokeWidth="0.05" strokelocation="inside" />
        <path d={"M0,0 L" + normalizedRadius + ",0 A" + normalizedRadius + "," + normalizedRadius + " 0 " + largeArcFlag + ",1 " + endPointY + "," + endPointX + " Z"} fill={color}/>
      </g>
    </svg>
  )
}

export default DotTriageComponent;
