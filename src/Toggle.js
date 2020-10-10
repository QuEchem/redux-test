import React, { Component } from 'react';
import { connect } from "react-redux";

class Toggle extends Component {
    render() {
        return (
            <div>
                {this.props.messageVisibility && <p>Toggeled visible</p> }
                <button onClick={() => this.props.dispatch({
                    type: "TOGGLE_MESSAGE",
                })}>Toggle Me</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    messageVisibility: state.message.messageVisibility,
});

export default connect(mapStateToProps)(Toggle); 