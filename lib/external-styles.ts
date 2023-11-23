// Declaring "as const" will make this object as immutable/readonly and no type errors will occur.

const verticalTimelineElementStyle = {
  background: "#fbfbfb",
  borderTop: "5px solid #00d4ff",
  boxShadow: "1px solid rgba(0, 0, 0, 0.05)",
  textAlign: "left",
  padding: "1.5rem 2rem",
} as const;

const verticalTimelineElementArrowStyle = {
  borderRight: "0.5rem solid #00d4ff",
} as const;

const verticalTimelineElementIconStyle = {
  background: "white",
  fontSize: "1.5rem",
  dropShadow:"5px 8px #000000",
} as const;

export {
  verticalTimelineElementStyle,
  verticalTimelineElementArrowStyle,
  verticalTimelineElementIconStyle,
};
