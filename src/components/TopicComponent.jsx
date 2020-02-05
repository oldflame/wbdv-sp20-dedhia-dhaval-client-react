import React, { Component } from 'react';

class Topic extends Component {
    state = {  }
    
    
    render() { 
        return (  
            <button type="button" className="btn btn-outline-dark mt-4 mx-3">
                Topic {this.props.topicTitle}
            </button>

          );
    }
}
export default Topic

