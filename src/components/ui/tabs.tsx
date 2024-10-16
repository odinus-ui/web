"use client";
import React, { useState, ReactElement, useEffect } from "react";

interface TabContentsProps {
  title: string;
  children: React.ReactNode;
}

export function TabContents({ children }: TabContentsProps) {
  return <div>{children}</div>;
}

interface TabContainerProps {
  children: ReactElement<TabContentsProps>[];
}

export function TabContainer({ children }: TabContainerProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [containerId, setContainerId] = useState("");

  const validChildren = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === TabContents
  ) as ReactElement<TabContentsProps>[];

  const handleTabClick = (
    index: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setActiveTab(index);
    const button = event.currentTarget;
    setIndicatorStyle({ left: button.offsetLeft, width: button.offsetWidth });
  };

  const generateRandomId = () => {
    return `${Math.random().toString(36).substr(2, 9)}`;
  };

  const updateIndicatorStyle = () => {
    if (containerId) {
      const activeButton = document.querySelector<HTMLButtonElement>(
        `.tab-buttons-${containerId}:nth-child(${activeTab + 1})`
      );
      if (activeButton) {
        setIndicatorStyle({
          left: activeButton.offsetLeft,
          width: activeButton.offsetWidth,
        });
      }
    }
  };

  useEffect(() => {
    const id = generateRandomId();
    setContainerId(id);
  }, []);

  useEffect(() => {
    updateIndicatorStyle();
  }, [containerId, activeTab]);

  useEffect(() => {
    window.addEventListener("resize", updateIndicatorStyle);
    return () => {
      window.removeEventListener("resize", updateIndicatorStyle);
    };
  }, [containerId, activeTab]);

  return (
    <div id={containerId}>
      <div className="border-b border-b-white/10 relative">
        <div className="flex p-1 text-sm overflow-x-hidden whitespace-nowrap">
          {validChildren.map((child, index) => (
            <button
              key={index}
              className={`tab-buttons-${containerId} flex-1 rounded-sm p-1 transition-all duration-300`}
              onClick={(event) => handleTabClick(index, event)}
            >
              {child.props.title}
            </button>
          ))}
          <div
            className="absolute bottom-0 h-0.5 bg-primary transition-all duration-300"
            style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
          />
        </div>
      </div>
      <div className="rounded-md">{validChildren[activeTab]}</div>
    </div>
  );
}
