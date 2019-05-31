/* eslint-disable react/react-in-jsx-scope */
import { Component } from 'react';
import classNames from 'classnames/bind';


export default class BaseComponent extends Component {
    
    constructor(props, styles){
        super(props);
        this.cx = classNames.bind(styles);
    }
}
