// Declaring "as const" will make this object as immutable/readonly and no type errors will occur.

const verticalTimelineElementStyle = {
  background: "#f3f4f6",
  boxShadow: "1px solid rgba(0, 0, 0, 0.05)",
  textAlign: "left",
  padding: "1.3rem 2rem",
} as const;

const verticalTimelineElementArrowStyle = {
  borderRight: "0.4rem solid #9ca3af",
} as const;

const verticalTimelineElementIconStyle = {
  background: "white",
  fontSize: "1.5rem",
} as const;

export {
  verticalTimelineElementStyle,
  verticalTimelineElementArrowStyle,
  verticalTimelineElementIconStyle,
};
