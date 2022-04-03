import {CSSProperties, FC, ReactNode} from "react";
import clsx from "clsx";

type CardActionsProps = {
    className?: string;
    style?: CSSProperties | undefined;
    children?: ReactNode;
};

const CardActions:FC<CardActionsProps> = ({children, className, style}) => {
    const classes = clsx('card-actions max-w-full', className);
    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
};

export default CardActions;
