//jshint esversion:6

import React from 'react';
import { connect } from 'react-redux';



import 'bootstrap/dist/css/bootstrap.min.css';





class App extends React.Component {



    render() {

        return (

            <div className="container">
                <h4>Simple count App</h4>
                <button onClick={this.props.increment} className="btn btn-primary">+</button>
                <p className="btn btn-warn">{this.props.count}</p>
                <button onClick={this.props.decrement} className="btn btn-primary">-</button>
            </div>
        )

    };
}

function mapStateToProps(state) {
    return { count: state.count }
}

function mapDispatch(dispatch) {
    return {
        increment: () => dispatch({ type: 'INCREASE' }),
        decrement: () => dispatch({ type: 'DECREASE' })
    }

}

export default connect(mapStateToProps, mapDispatch)(App);
