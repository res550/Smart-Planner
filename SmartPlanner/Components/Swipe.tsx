'use strict';
 
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
 

interface IState{
    myText:any,
    gestureName:any,
    backgroundColor:any,
}

class SomeComponent extends Component <{},IState> {
 
  constructor(props:any) {
    super(props);
    this.state = {
      myText: 'I\'m ready to get swiped!',
      gestureName: 'none',
      backgroundColor: '#fff'
    };
  }
 
  onSwipeUp(gestureState: any) {
    this.setState({myText: 'You swiped up!'});
  }
 
  onSwipeDown(gestureState: any) {
    this.setState({myText: 'You swiped down!'});
  }
 
  onSwipeLeft(gestureState:any) {
    this.setState({myText: 'You swiped left!'});
  }
 
  onSwipeRight(gestureState:any) {
    this.setState({myText: 'You swiped right!'});
  }
 
  onSwipe(gestureName:any, gestureState:any) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_UP:
        this.setState({backgroundColor: 'red'});
        break;
      case SWIPE_DOWN:
        this.setState({backgroundColor: 'green'});
        break;
      case SWIPE_LEFT:
        this.setState({backgroundColor: 'blue'});
        break;
      case SWIPE_RIGHT:
        this.setState({backgroundColor: 'yellow'});
        break;
    }
  }
 
  render() {
    
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
 
    return (
      <GestureRecognizer
        onSwipe={(direction:any, state:any) => this.onSwipe(direction, state)}
        onSwipeUp={(state:any) => this.onSwipeUp(state)}
        onSwipeDown={(state:any) => this.onSwipeDown(state)}
        onSwipeLeft={(state:any) => this.onSwipeLeft(state)}
        onSwipeRight={(state:any) => this.onSwipeRight(state)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: this.state.backgroundColor
        }}
        >
        <Text>{this.state.myText}</Text>
        <Text>onSwipe callback received gesture: {this.state.gestureName}</Text>
      </GestureRecognizer>
    );
  }
}
 
export default SomeComponent;
