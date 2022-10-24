import React from 'react';
import './typography.scss'

const variantToTag = {
    'title2': 'h2',
    'title3': 'h3',
    'title4': 'h4',
    'title5': 'h5',
    'title6': 'h6',
    'text' : 'span',
    'text1' : 'span',
    'text2' : 'span',
    'error' : 'span',

}

//variant -> title, subtitle
const Typography = ({
        children,
        variant = 'title2',
        textAlign = 'left',
        wordBreak = 'initial',
        ...rest
    }) => {

    const Tag = variantToTag[variant]

    return (
        <Tag
            className={`typography-${variant}`}
            style={{
                textAlign: textAlign,
                wordBreak: wordBreak,
            }}
            {...rest}
        >
            {children}
        </Tag>
    );
};

export default Typography;