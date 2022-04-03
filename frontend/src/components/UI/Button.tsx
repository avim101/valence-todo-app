import {CSSProperties, ForwardedRef, forwardRef, MouseEventHandler, ReactNode} from "react";
import {
    ButtonColorMapping,
    ButtonShapeMapping,
    ButtonSizeMapping,
    SizeType,
    ButtonColors,
    THEME_ELEMENT_DEFAULT_SIZE
} from "./theme";
import Text from "./typography/Text";
import clsx from "clsx";

export type ButtonProps = {
    /**
     * xs-  Extra small button
     * sm - small button
     * md - Medium button (default)
     * lg - Large button
     */
    size?: SizeType

    /**
     * Set the original html type of button, see: MDN(https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type)
     */
    type?: 'button' | 'submit' | 'reset';

    /**
     * button color
     */
    color?: ButtonColors;

    /**
     * circle - button with a 1:1 ratio
     * square - button with a 1:1 ratio
     * round - will create a rounded border
     */
    shape?: 'circle' | 'square' | 'round' | 'link';

    /**
     *    Full width button
     */
    block?: boolean;

    /**
     * Transparent Button with colored border
     */
    outline?: boolean;

    /**
     *    Shows loading spinner
     */
    loading?: boolean;

    /**
     * Force the button to show disabled state
     */
    disabled?: boolean;

    /**
     *    Disables click animation
     */
    noAnimation?: boolean;

    icon?: ReactNode;

    /**
     * custom css class for the button
     */
    className?: string;

    /**
     * button on click call back
     */
    onClick?: MouseEventHandler<HTMLButtonElement>;

    /**
     * button text
     */
    text?: string;

    children?: ReactNode;
    style?: CSSProperties;
};

const Button = ({
                    size = THEME_ELEMENT_DEFAULT_SIZE,
                    type = 'button',
                    color = 'primary',
                    shape,
                    block = false,
                    outline = false,
                    loading = false,
                    disabled = false,
                    noAnimation = false,
                    className,
                    icon,
                    children,
                    text,
                    onClick,
                    style
                }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {

    const classes = clsx(
        'btn',
        className,
        ButtonSizeMapping[size],
        ButtonColorMapping[color],
        shape && ButtonShapeMapping[shape],
        block && 'btn-block',
        outline && 'btn-outline',
        loading && 'loading',
        disabled && 'btn-disabled',
        noAnimation && 'no-animation'
    );
    return (
        <button className={classes} disabled={disabled} type={type} onClick={onClick} ref={ref} style={style}>
            {icon}
            {text && <Text size={size}>{text}</Text>}
        </button>
    );
};

export default forwardRef<HTMLButtonElement, ButtonProps>(Button);
