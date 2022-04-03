import {CSSProperties, FC} from "react";
import {SizeType, TextColorMapping, TextColors, TextSizeMapping} from "../theme";
import clsx from "clsx";

export type TextProps = {
    className?: string;
    style?: CSSProperties;
    color?: TextColors;
    size?: SizeType | 'xl' | '2xl';
    tag?: string;
}

const Text: FC<TextProps> = ({
                                 className,
                                 children,
                                 style,
                                 color,
                                 size = 'md',
                                 tag = 'span'
                             }) => {
    const classes = clsx(TextSizeMapping[size], color && TextColorMapping[color], className);
    const CustomTag: any = `${tag}`
    return (
        <CustomTag style={style} className={classes}>
            {children}
        </CustomTag>
    )
}

export default Text
