import {CSSProperties, FC} from "react";
import {
    TagColorMapping,
    TagSizeMapping,
    SizeType,
    TextColors,
    THEME_ELEMENT_DEFAULT_SIZE
} from "./theme";
import clsx from "clsx";
import {XIcon} from "@heroicons/react/outline";

export type TagProps = {
    className?: string;
    style?: CSSProperties;
    color?: TextColors;
    size?: SizeType;
    /**
     * add x icon to the tag
     */
    removable?: boolean;
    /**
     * if removable, will fire callback fn when clicking on the x icon
     */
    onRemove?: () => void;
    /**
     * Transparent Tag with colored border
     */
    outline?: boolean;
};
const Tag: FC<TagProps> = ({
                                   children,
                                   className,
                                   style,
                                   color = 'primary',
                                   size = THEME_ELEMENT_DEFAULT_SIZE,
                                   outline = false,
                                   removable,
                                   onRemove
                               }) => {
    const classes = clsx('badge p-4', TagSizeMapping[size], TagColorMapping[color], outline && 'badge-outline', className);
    return (
        <div className={classes} style={style}>
            {removable && <XIcon width='1rem' className='cursor-pointer' onClick={() => onRemove && onRemove()}/>}
            {children}
        </div>
    )
}

export default Tag;
