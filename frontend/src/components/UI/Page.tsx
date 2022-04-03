import {FC} from 'react';
import clsx from "clsx";

type PageProp = {
    className?: string;
};

const Page: FC<PageProp> = ({children, className}) => {
    const classes = clsx('container mx-auto p-4', className);
    return (
        <>
            <div className={classes}>
                {children}
            </div>
        </>
    )
};

export default Page;
