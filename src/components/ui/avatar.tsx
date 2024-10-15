import { useState, useEffect } from "react";

export default function Avatar({
  img,
  displayName,
  size = "md",
}: {
  img?: string;
  displayName: string;
  size?: "sm" | "md" | "lg";
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!img) return;
    setIsLoaded(false);
    const imgElement = new Image();
    imgElement.src = img;
    imgElement.onload = () => setIsLoaded(true);
  }, [img]);

  const sizeClass = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };
  return (
    <div
      className={`relative flex items-center justify-center rounded-full overflow-hidden ${
        isLoaded ? "" : "border"
      } ${sizeClass[size]}`}
    >
      {!isLoaded || !img ? (
        <p className="relative text-center top-[-1px]">{displayName}</p>
      ) : (
        <></>
      )}
      <img
        className="h-full select-none"
        src={img}
        alt="avatar"
        style={{ display: isLoaded ? "block" : "none" }}
      />
    </div>
  );
}