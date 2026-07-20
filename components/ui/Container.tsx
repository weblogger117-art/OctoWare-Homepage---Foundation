import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

export default function Container({
  children,
  className = "",
  as: Component = "div"
}: ContainerProps) {
  return (
    <Component className={`container ${className}`.trim()}>
      {children}
    </Component>
  );
}
