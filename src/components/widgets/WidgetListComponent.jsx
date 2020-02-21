import React, { Component } from 'react';
import HeadingWidget from './HeadingWidget';
import ParagraphWidget from './ParagraphWidget';

class WidgetListComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <HeadingWidget />
                <ParagraphWidget />
                <div className="row">
                    <div className="offset-11 col-1">
                        <button type="button" className="btn btn-dark">
                            <i className="fa fa-2x fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default WidgetListComponent;