import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class ProductRow extends React.Component {

    constructor() {
        super();
    
    }

  

    render() {
        return (
            <tr>
                <td>{this.props.product.id}</td>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
                <td>{this.props.product.location}</td>
               
            </tr>
        )
    }
}

export default connect()(ProductRow);