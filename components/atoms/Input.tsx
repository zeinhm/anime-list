import { ChangeEvent, InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  icon?: any;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { icon, ...rest } = props;
  return (
    <>
      <div className={`input-text-wrapper w-full items-center justify-center`}>
        <input
          ref={ref}
          {...rest}
          className={`input-text ${props?.className || ""}`}
        />
        {icon && <div className="input-icon">{icon}</div>}
      </div>
    </>
  );
});

Input.displayName = "Input";

export default Input;
