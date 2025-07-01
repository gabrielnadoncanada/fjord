import { ReactNode } from "react";

interface ContentSectionsContainerProps {
  children: ReactNode;
  className?: string;
}

export function ContentSectionsContainer({
  children,
  className = "",
}: ContentSectionsContainerProps) {
  return <div className={`space-y-3 ${className}`}>{children}</div>;
}
