import React, { useEffect } from "react";

export const useCLickOutSide = (
  elRef: React.MutableRefObject<HTMLDivElement | null>,
  callback: (e: MouseEvent) => void
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      //@ts-ignore
      if (!elRef?.current?.contains(e?.target) && callback) callback(e);
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [elRef, callback]);
};
