"use client";
import React, { useState, useRef, useEffect } from "react";

function DropdownMenu({
  children,
}: {
  children: React.ReactElement<
    typeof DropdownMenu.Trigger | typeof DropdownMenu.Content
  >[];
}) {
  const [isOpen, setOpen] = useState(false);
  const [triggerHeight, setTriggerHeight] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const handleTriggerClick = () => {
    setOpen(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    setTriggerHeight(triggerRef.current?.offsetHeight || 0);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative w-fit" ref={menuRef}>
      {React.Children.map(children, (child, index) => {
        if (child.type === DropdownMenu.Trigger) {
          return (
            <div
              ref={triggerRef}
              className="w-fit"
              key={index}
              onClick={handleTriggerClick}
            >
              {child}
            </div>
          );
        }
        return (
          <div
            key={index}
            className={`${
              isOpen ? "" : "hidden"
            } w-9 h-0 absolute left-1/2 transform -translate-x-1/2`}
            style={{ top: triggerHeight + 3 }}
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
