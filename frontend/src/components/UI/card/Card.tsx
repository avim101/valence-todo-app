import {CSSProperties, FC, ReactNode} from "react";
import {StateColors} from "../theme";
import clsx from "clsx";

type CardProps = {
    /**
     * alert color
     */
    color?: StateColors;
    /**
     * custom css class for the button
     */
    className?: string;
    /**
     * Adds border
     */
    cardBordered?: boolean;
    /**
     *    Less padding
     */
    cardCompact?: boolean;
    children?: ReactNode;
    style?: CSSProperties;
};

const Card: FC<CardProps> = ({
                                 cardCompact,
                                 cardBordered,
                                 children,
                                 className,
                                 style,
                             }) => {

    const classes = clsx('card shadow-sm',cardBordered && 'card-bordered',cardCompact && 'card-compact', className)
    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
};

export default Card;
