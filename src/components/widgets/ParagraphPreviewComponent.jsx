import React, { Component } from 'react';

const ParagraphPreviewComponent = (props) => {
    return ( 
        <div>
            <p>
                {props.widget.text}
            </p>
        </div>
     );
}
 
export default ParagraphPreviewComponent;