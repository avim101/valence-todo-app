import {InputProps} from "./InputProps";
import {THEME_ELEMENT_DEFAULT_SIZE, InputSizeMapping, InputColorMapping} from "../../theme";
import {forwardRef, Ref} from "react";
import clsx from "clsx";

export type TextInputProps = InputProps<HTMLInputElement>;

const TextInput = ({
                       defaultValue,
                       inputSize = THEME_ELEMENT_DEFAULT_SIZE,
                       placeholder = '',
                       bordered = true,
                       name = '',
                       className = '',
                       color,
                       hasError = false,
                       ...rest
                   }: TextInputProps, ref: Ref<HTMLInputElement>) => {
    const classes = clsx('input', className, InputSizeMapping[inputSize], color && InputColorMapping[color], bordered && 'input-bordered', hasError && 'input-error');
    return (
        <input
            ref={ref}
            type="text"
            defaultValue={defaultValue}
            className={classes}
            name={name}
            placeholder={placeholder}
            {...rest}
        />
    );
};

export default forwardRef<HTMLInputElement, TextInputProps>(TextInput);
