import React, {CSSProperties, FC} from 'react'
import {TitleSizeMapping} from "../theme";
import clsx from "clsx";

export type TitleProps = {
    className?: string;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    style?: CSSProperties;
}

const Title: FC<TitleProps> = ({
                                   className = '',
                                   level = 1,
                                   children,
                                   style
                               }) => {
    const classes = clsx(TitleSizeMapping[level], className);
    const CustomTag: any = `h${level}`

    return (
        <CustomTag style={style} className={classes}>
            {children}
        </CustomTag>
    )
}

export default Title
