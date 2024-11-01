export default function Seperator({
  displayText,
  textPosition = "center",
  orientation = "horizontal",
}: {
  displayText?: string;
  textPosition?: "left" | "center" | "right";
  orientation?: "horizontal" | "vertical";
}) {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={`flex ${
        isHorizontal ? "flex-row" : "flex-col"
      } items-center gap-3`}
    >
      {textPosition === "left" && displayText && (
        <>
          <p className="whitespace-nowrap text-center text-xs text-border">
            {displayText}
          </p>
          <div
            className={`${
              isHorizontal ? "h-[1px] w-full" : "w-[1px] h-full"
            } bg-border`}
          ></div>
        </>
      )}
      {textPosition === "center" && displayText && (
        <>
          <div
            className={`${
              isHorizontal ? "h-[1px] w-full" : "w-[1px] h-full"
            } bg-border`}
          ></div>
          <p className="whitespace-nowrap text-center text-xs text-border">
            {displayText}
          </p>
          <div
            className={`${
              isHorizontal ? "h-[1px] w-full" : "w-[1px] h-full"
            } bg-border`}
          ></div>
        </>
      )}
      {textPosition === "right" && displayText && (
        <>
          <div
            className={`${
              isHorizontal ? "h-[1px] w-full" : "w-[1px] h-full"
            } bg-border`}
          ></div>
          <p className="whitespace-nowrap text-center text-xs text-border">
            {displayText}
          </p>
        </>
      )}
      {!displayText && (
        <div
          className={`${
            isHorizontal ? "h-[1px] w-full" : "w-[1px] h-full"
          } bg-border`}
        ></div>
      )}
    </div>
  );
}
