// DefaultButton.tsx
import React from "react";

type DefaultButtonProps = {
  label: string;
  onClick: () => void;
  styles: { [key: string]: string }; // Type for CSS module styles;
  className: string;
};

const DefaultButton: React.FC<DefaultButtonProps> = ({
  label,
  onClick,
  styles,
  className,
}) => {
  return (
    <button onClick={onClick} className={styles[className]}>
      {label}
    </button>
  );
};

export default DefaultButton;
