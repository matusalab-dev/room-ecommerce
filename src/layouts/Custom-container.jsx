import { twMerge } from "tailwind-merge";

export const CustomContainer = ({ id, className, children }) => {
  const containerMerged = twMerge("mx-auto max-w-[95%] flex", className);
  return (
    <div id={id} className={containerMerged}>
      {children}
    </div>
  );
};
