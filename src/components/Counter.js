// import { Component } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter-slice';

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const inc = () => {
    // dispatch({ type: 'INCREMENT' });
    dispatch(counterActions.increment());
  };
  
  const increase = () => {
    // dispatch({ type: 'INCREASE_BY_NUMBER', payload: 5 });
    dispatch(counterActions.increaseByNumber(5));
  };
  
  const decrease = () => {
    // dispatch({ type: 'DECREASE_BY_NUMBER', payload: 5 });
    dispatch(counterActions.decreaseByNumber(5));
  };

  const dec = () => {
    // dispatch({ type: 'DECREMENT' });
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: 'TOGGLE_COUNTER' });
    dispatch(counterActions.toggleCounter());
  };
  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}> {counter} </div>}
      <div className={classes.buttons}>
        <button className={classes.button} onClick={decrease}> -5 </button>
        <button className={classes.button} onClick={dec}> - </button>
        <button className={classes.button} onClick={inc}> + </button>
        <button className={classes.button} onClick={increase}> +5 </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   inc(){
//     this.props.inc();
//   };

//   dec(){
//     this.props.dec();
//   };

//   toggleCounterHandler(){};


//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}> {this.props.counter} </div>
//         <div className={classes.buttons}>
//           <button className={classes.button} onClick={this.dec.bind(this)}> - </button>
//           <button className={classes.button} onClick={this.props.inc}> + </button>
//         </div>
//         <button onClick={this.props.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// };

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     inc: () => dispatch({ type: 'INCREMENT' }),
//     dec: () => dispatch({ type: 'DECREMENT' }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
