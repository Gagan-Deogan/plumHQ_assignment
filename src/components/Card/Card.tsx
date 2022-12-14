import React, { useState } from "react";
import chevronIcon from "assests/icons/chevron.svg";
type CardProps = {
  title: JSX.Element;
  children: JSX.Element;
  isExpandable?: boolean;
  className?: string;
};

export const Card = ({
  title,
  children,
  isExpandable,
  className,
}: CardProps) => {
  const [expanded, setExpanded] = useState<boolean>(true);
  const chevronClassName = expanded ? "" : "transform rotate-180";
  return (
    <div className={`bg-white rounded-lg relative ${className}`}>
      <div className="p-4 ">{title}</div>
      {isExpandable && (
        <div className="absolute right-4 top-4">
          <button
            className="p-3"
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
          >
            <img src={chevronIcon} alt="chevron" className={chevronClassName} />
          </button>
        </div>
      )}
      {expanded && <div className="p-4 border-t">{children}</div>}
    </div>
  );
};
