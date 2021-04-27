import React from 'react'
import ms  from 'pretty-ms';
import {connect} from 'react-redux';
import {saveTime, sendTime} from '../actions/index'

class Timer extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        time: 0,
        isOn: false,
        start: 0
      }    
      
      this.startTimer = this.startTimer.bind(this)
      this.stopTimer = this.stopTimer.bind(this)
      this.resetTimer = this.resetTimer.bind(this);
      this.resetAndSaveTimer = this.resetAndSaveTimer.bind(this);
    }

    
    startTimer() {
      this.setState({
        isOn: true,
        time: this.state.time,
        start: Date.now() - this.state.time
      })
      this.timer = setInterval(() => this.setState({
        time: Date.now() - this.state.start
      }), 1);
    }  
    
    stopTimer() {
      this.setState({isOn: false})
      clearInterval(this.timer)
    }  
    
    resetTimer() {
      this.setState({time: 0, isOn: false})
    }  
    
    resetAndSaveTimer(){

      const {time} = this.state;

      this.resetTimer();
      this.props.sendTime(time);
      //time is in ms
    }

    render() {    
        
        let start = (this.state.time === 0) ?
            <button onClick={this.startTimer} className ="ui teal button">Start</button> :
            null    
        let stop = (this.state.time === 0 || !this.state.isOn) ?
            null :
            <button onClick={this.stopTimer} className = "ui red button">Stop</button>    
        let resume = (this.state.time === 0 || this.state.isOn) ?
            null :
            <button onClick={this.startTimer} className = "ui button">Resume</button>    
        let reset = (this.state.time === 0 || this.state.isOn) ?
            null :
            <button onClick={()=>this.resetAndSaveTimer()} className = "ui button">Reset</button>
        
            
            
        
        return(
            <div>
                <h3>Timer: {ms(this.state.time)}</h3>
                {start}
                {resume}
                {stop}
                {reset}
            </div>
      )
    }
  }


const mapStateToProps = (state)=>{
    return {
            projects: (state.projects),
            time: state.time    
        };
}

export default connect(mapStateToProps, {saveTime, sendTime})(Timer);