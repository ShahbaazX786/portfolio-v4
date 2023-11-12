import { LinkType } from "./../lib/types";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "./useActiveSectionContext";

export const useSectionInView = (sectionName: LinkType, threshold = 0.5) => {
  const { ref, inView } = useInView({ threshold});
  // this threshold will return true if that percent of reference's(section tag here) is rendered in the view.
  const { setActiveLink, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      // well timeoflastclick will stop the below setter function from running as when you click on the navlink it will be almost less than 1 second always as in scroll event there is no click event time...
      setActiveLink(sectionName);
    }
  }, [inView, setActiveLink, timeOfLastClick, sectionName]);

  return { ref };
};
