import { CSSProperties } from "react";

export const useStyles = (): Record<string, CSSProperties> => {
  const minWidth = "200px";

  return {
    container: {
      border: "2px solid black",
      listStyle: "none",
      padding: 0,
      minWidth: minWidth,
      margin: "20px"
    },
    item: {
      border: "1px solid black",
      width: minWidth,
      margin: "0 auto"
    }
  };
};
