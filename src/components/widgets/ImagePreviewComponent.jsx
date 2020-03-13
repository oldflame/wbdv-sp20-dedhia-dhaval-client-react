import React, { Component } from 'react';

const ImagePreviewComponent = (props) => {
    return (  
        <div className="mt-2">
            <img className="shadow" src={props.url} width={props.width} height={props.height} />
        </div>
    );
}
 
export default ImagePreviewComponent;