import {FC, ReactNode} from "react";
import clsx from "clsx";

type CardTitleProps = {
    /**
     * custom css class for the button
     */
    className?: string;
    children?: ReactNode;
};

const CardTitle:FC<CardTitleProps> = ({children, className}) => {
    const classes = clsx('card-title',className);
    return (
        <div className={classes}>
            {children}
        </div>
    );
};

export default CardTitle;
