import {InputProps} from "./InputProps";
import {
    THEME_ELEMENT_DEFAULT_SIZE,
    CheckboxSizeMapping,
    CheckboxColorMapping,
    ThemeColors
} from "../../theme";
import {forwardRef, Ref} from "react";
import clsx from "clsx";
import Text from "../../typography/Text";

export type CheckboxInputProps =
    Omit<InputProps<HTMLInputElement>, 'bordered' | 'hasError'>
    & { color?: ThemeColors, label?: string };

const TextInput = ({
                       inputSize = THEME_ELEMENT_DEFAULT_SIZE,
                       className = '',
                       color = 'primary',
                       label,
                       ...rest
                   }: CheckboxInputProps, ref: Ref<HTMLInputElement>) => {
    const classes = clsx('checkbox mr-2', className, CheckboxSizeMapping[inputSize], CheckboxColorMapping[color]);
    return (
        <Text size={inputSize} className='flex items-center' tag='label'>
            <input
                ref={ref}
                type="checkbox"
                className={classes}
                {...rest}
            />
            {label}
        </Text>
    );
};

export default forwardRef<HTMLInputElement, CheckboxInputProps>(TextInput);
