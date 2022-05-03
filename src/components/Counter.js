import { Component } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import classes from './Counter.module.css';

// const Counter = () => {
//   const dispatch = useDispatch();

//   const counter = useSelector(state => state.counter);

//   const inc = () => {
//     dispatch({ type: 'INCREMENT' });
//   };

//   const dec = () => {
//     dispatch({ type: 'DECREMENT' });
//   };

//   const toggleCounterHandler = () => {};
  
//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}> {counter} </div>
//       <div className={classes.buttons}>
//         <button className={classes.button} onClick={dec}> - </button>
//         <button className={classes.button} onClick={inc}> + </button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

class Counter extends Component {
  inc(){
    this.props.inc();
  };

  dec(){
    this.props.dec();
  };

  toggleCounterHandler(){};


  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}> {this.props.counter} </div>
        <div className={classes.buttons}>
          <button className={classes.button} onClick={this.dec.bind(this)}> - </button>
          <button className={classes.button} onClick={this.props.inc}> + </button>
        </div>
        <button onClick={this.props.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch({ type: 'INCREMENT' }),
    dec: () => dispatch({ type: 'DECREMENT' }),
    // toggleCounterHandler: () => dispatch({ type: 'TOGGLE_COUNTER' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
