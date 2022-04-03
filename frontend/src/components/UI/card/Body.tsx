import {FC} from "react";
import clsx from "clsx";

type CardBodyProps = {
    className?: string;
};

const CardBody: FC<CardBodyProps> = ({children, className}) => {
    const classes = clsx('card-body',className);
    return (
        <div className={classes}>
            {children}
        </div>
    );
};

export default CardBody;
