import {InputHTMLAttributes} from "react";
import {SizeType, InputColors} from "../../theme";

/**
 * base input props for all the different inputs
 */
export type InputProps<E> = {
    /**
     * input size: 'xs' | 'sm' | 'md' | 'lg'
     */
    inputSize?: SizeType;
    /**
     * input color: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
     */
    color?: InputColors;
    /**
     * show border around the input
     */
    bordered?: boolean;
    /**
     * Whether the input should be in error state
     */
    hasError?:boolean;
} & InputHTMLAttributes<E>;
