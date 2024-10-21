"use client";
import React, { useState } from "react";

function DropdownMenu({
  children,
}: {
  children: React.ReactElement<
    typeof DropdownMenu.Trigger | typeof DropdownMenu.Content
  >[];
}) {
  const [isOpen, setOpen] = useState(false);

  const handleTriggerClick = () => {
    setOpen(true);
  };
  const handleClickOutside = (event: MouseEvent) => {
    setTimeout(() => setOpen(false), 150);
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative w-fit">
      {React.Children.map(children, (child, index) => {
        if (child.type === DropdownMenu.Trigger) {
          return (
            <div className="w-fit" key={index} onClick={handleTriggerClick}>
              {child}
            </div>
          );
        }
        return (
          <div
            key={index}
            className={`${isOpen ? "" : "hidden"} w-9 h-0 relative`}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

DropdownMenu.Trigger = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

DropdownMenu.Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border border-border rounded-md w-fit overflow-hidden">
      {children}
    </div>
  );
};

DropdownMenu.Item = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return <button onClick={() => alert("worked")}>{children}</button>;
};

export default DropdownMenu;
