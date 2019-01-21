import React, { Component } from 'react'
import Exit from './Exit';
import '../css/Modal.css';

export default class Modal extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            isShow: props.isShow
        }
    }

    componentWillReceiveProps = ({isShow}) => {
        this.setState({isShow})
    }

    setModalState = () => {
        this.setState({isShow: false})
    }

    render() {
        let { children, width, height, backgroundColor, className } = this.props;
        return (this.state.isShow) ? (
        <div 
            className={className}
            style={{
                width: `${width}px`, 
                height: `${height}px`, 
                backgroundColor
            }}
        >
            <Exit 
                className='modal-btn-exit'
                size={30}
                color="rgb(53,64,69)"
                onClick={this.setModalState}
            />
            { children }
        </div>
        ) : null
    }
}
