/**
 * Theme Colors
 */
export type ThemeColors = 'neutral' | 'primary' | 'secondary' | 'accent';
export type StateColors = 'info' | 'success' | 'warning' | 'error';
export type ButtonColors = ThemeColors | StateColors | 'ghost' | 'link';
export type InputColors = ThemeColors | StateColors;
export type TextColors = ThemeColors | StateColors;

/**
 * Theme Elements Sizes
 */
export type SizeType = 'xs' | 'sm' | 'md' | 'lg';

/**
 * Theme Default Element Size
 */
export const THEME_ELEMENT_DEFAULT_SIZE = "md";

/**
 * Theme Button
 */
export const ButtonColorMapping = {
    /**
     * Button with `primary` color
     */
    primary: 'btn-primary',
    /**
     * Button with `secondary` color
     */
    secondary: 'btn-secondary',
    /**
     * Button with `accent` color
     */
    accent: 'btn-accent',
    /**
     * Button with `info` color
     */
    info: 'btn-info',
    /**
     * Button with `success` color
     */
    success: 'btn-success',
    /**
     * Button with `warning` color
     */
    warning: 'btn-warning',
    /**
     * Button with `error` color
     */
    error: 'btn-error',
    /**
     * Button with `neutral` color
     */
    neutral: 'btn-neutral',
    /**
     *    Button with ghost style - transparent only show grey color on hover
     */
    ghost: 'btn-ghost',
    /**
     *    Button styled as a link
     */
    link: 'btn-link',
};
export const ButtonSizeMapping = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
};
export const ButtonShapeMapping = {
    /**
     * Circle button with a 1:1 ratio
     */
    circle: 'btn-circle',
    /**
     * Square button with a 1:1 ratio
     */
    square: 'btn-square',
    /**
     * will create a rounded border
     */
    round: 'rounded-full',
    /**
     * will create a link button
     */
    link: 'btn-link'
};

/**
 * Theme Alert
 */
export const AlertColorMapping = {
    /**
     * Alert with `info` color
     */
    info: 'alert-info border-info',
    /**
     * Alert with `success` color
     */
    success: 'alert-success border-success',
    /**
     * Alert with `warning` color
     */
    warning: 'alert-warning border-warning',
    /**
     *    Alert with `error` color
     */
    error: 'alert-error border-error',
};

/**
 * Theme Typography
 */
export const TextColorMapping = {
    /**
     * text with `info` color
     */
    info: 'text-info',
    /**
     * text with `success` color
     */
    success: 'text-success',
    /**
     * text with `warning` color
     */
    warning: 'text-warning',
    /**
     *    text with `error` color
     */
    error: 'text-error',
    /**
     * text with `primary` color
     */
    primary: 'text-primary',
    /**
     * text with `secondary` color
     */
    secondary: 'text-secondary',
    /**
     * text with `accent` color
     */
    accent: 'text-accent',
    /**
     * text with `neutral` color
     */
    neutral: 'text-neutral'
};
export const TextSizeMapping = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
};
export const TitleSizeMapping = {
    1: 'text-5xl',
    2: 'text-4xl',
    3: 'text-2xl',
    4: 'text-lg',
    5: 'text-base',
    6: 'text-sm'
};

/**
 * Theme Inputs and Fields
 */

/**
 * Theme Text Input
 */
export const InputSizeMapping = {
    xs: 'input-xs',
    sm: 'input-sm',
    md: 'input-md',
    lg: 'input-lg',
};
export const InputColorMapping = {
    /**
     * input with `info` color
     */
    info: 'input-info',
    /**
     * input with `success` color
     */
    success: 'input-success',
    /**
     * input with `warning` color
     */
    warning: 'input-warning',
    /**
     *  input with `error` color
     */
    error: 'input-error',
    /**
     * input with `primary` color
     */
    primary: 'input-primary',
    /**
     * input with `secondary` color
     */
    secondary: 'input-secondary',
    /**
     * input with `accent` color
     */
    accent: 'input-accent',
    /**
     * input with `neutral` color
     */
    neutral: 'input-neutral'
};

/**
 * Theme Checkbox Input
 */
export const CheckboxSizeMapping = {
    xs: 'checkbox-xs',
    sm: 'checkbox-sm',
    md: 'checkbox-md',
    lg: 'checkbox-lg',
};
export const CheckboxColorMapping = {
    /**
     * checkbox with `primary` color
     */
    primary: 'checkbox-primary',
    /**
     * checkbox with `secondary` color
     */
    secondary: 'checkbox-secondary',
    /**
     * checkbox with `accent` color
     */
    accent: 'checkbox-accent',
    /**
     * checkbox with `neutral` color
     */
    neutral: 'checkbox-neutral',
};

/**
 * Theme Inputs and Fields End
 */

/**
 * tag sizes
 */
export const TagSizeMapping = {
    xs: 'badge-xs',
    sm: 'badge-sm',
    md: 'badge-md',
    lg: 'badge-lg',
};

export const TagColorMapping = {
    /**
     * tag with `primary` color
     */
    primary: 'badge-primary',
    /**
     * tag with `secondary` color
     */
    secondary: 'badge-secondary',
    /**
     * tag with `accent` color
     */
    accent: 'badge-accent',
    /**
     * tag with `info` color
     */
    info: 'badge-info',
    /**
     * tag with `success` color
     */
    success: 'badge-success',
    /**
     * tag with `warning` color
     */
    warning: 'badge-warning',
    /**
     * tag with `error` color
     */
    error: 'badge-error',
    /**
     * tag with `neutral` color
     */
    neutral: 'badge-neutral',
    /**
     *    tag with ghost style - transparent only show grey color on hover
     */
    ghost: 'badge-ghost'
};
