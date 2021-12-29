import React from "react";
import './Picture.scss'

const Picture = ({ picture: { sources }, picture: { fallBack }, lazyLoading='lazy', className }) => {
    const sourceList = sources.map((source, index) =>
        <source key={index} srcSet={source.srcSet} media={source.media}></source>
    );
    const { src, text, width, height } = fallBack;
    return (
        <picture className={className}>       
            {sourceList}
            <img src={src} alt={text} width={width} height={height} loading={lazyLoading}/>
        </picture>
    )
}

export default Picture;