import React, { Component } from 'react';
import './Custom.css';

import Spica from '../../img/spica.jpg';

class CustomHR extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() { 
        return (
            <div className="line container-fluid no-gutters">
                <div className="row">
                    <hr className="col-xl-12" />
                    <img src={Spica} alt="qwe" />
                </div>
            </div>
        );
    }
}
 
export default CustomHR;