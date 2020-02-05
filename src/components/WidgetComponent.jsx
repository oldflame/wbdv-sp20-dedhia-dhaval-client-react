import React, { Component } from 'react';
import '../styles/Widget.css';

class Widget extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <div className="card mt-3 mr-3">
            <div className="card-body">
                <div className="row">
                    <div className="col-8">
                        <h1>Heading Widget</h1>
                    </div>
                    <div className="col-4 right-pull">
                        <button type="button" className="btn btn-outline-dark yellow-btn">
                            <i className="fa fa-arrow-up"></i>
                        </button>
                        <button type="button" className="btn btn-outline-dark yellow-btn">
                            <i className="fa fa-arrow-down"></i>
                        </button>
                        <select className="custom-select small-select" id="inputGroupSelect01">
                            <option selected>Heading</option>
                            <option value="slides">Sides</option>
                            <option value="movies">Movies</option>
                            <option value="html">HTML</option>
                        </select>
                        <button type="button" className="btn btn-danger">
                            <i className="fa fa-times"></i>
                        </button>
                    </div>
                    <div className="col-12">
                        <input type="textarea" className="form-control"
                               placeholder="Heading Text"/>
                        <select className="custom-select mt-3">
                            <option selected>Heading 1</option>
                            <option value="heading2">Heading 2</option>
                            <option value="heading3">Heading 3</option>
                            <option value="heading4">Heading 4</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <input type="textarea" className="form-control mt-3"
                               placeholder="Widget Name"/>
                    </div>
                    <div className="col-12 mt-3">

                        <h3><b>
                            Preview
                        </b>
                        </h3>
                        <h1><b>
                            Heading Text
                        </b>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12 mt-3">
                <button type="button" className="btn btn-danger mx-3 right-pull">
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        </div>
        </div>
         );
    }
}
 
export default Widget;