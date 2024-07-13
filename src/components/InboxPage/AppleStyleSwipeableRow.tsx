import { colors, sizes, shadow, spacing } from "../../constants/theme";
import { Ionicons } from '@expo/vector-icons';
import React, { Component, PropsWithChildren } from 'react';
import { Animated, StyleSheet, Text, View, I18nManager } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default class AppleStyleSwipeableRow extends Component<PropsWithChildren<unknown>> {
  state = {
    activeSwipeIndex: null, // Track the index of the currently active swipe
  };

  private closePreviousSwipe = () => {
    if (this.state.activeSwipeIndex !== null) {
      this.refsArray[this.state.activeSwipeIndex]?.close(); // Close the previously active swipe
      this.setState({ activeSwipeIndex: null }); // Reset the active swipe index
    }
  };

  private refsArray: Swipeable[] = []; // Array to hold swipeable references

  private updateRef = (ref: Swipeable, id: number) => {
    this.refsArray[id] = ref; // Store swipeable reference in array
  };

  private renderRightAction = (
    text: string,
    color: string,
    x: number,
    progress: Animated.AnimatedInterpolation<number>,
    id: number
  ) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });

    const pressHandler = () => {
      this.closePreviousSwipe(); // Close previous swipe before opening new one
      this.setState({ activeSwipeIndex: id }); // Set the index of the currently active swipe
      window.alert(id);
    };

    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
        <RectButton style={[styles.rightAction, { backgroundColor: color }]} onPress={pressHandler}>
          <Ionicons
            name={text === 'Спам' ? 'ellipsis-horizontal' : 'archive'}
            size={22}
            color={'#fff'}
            style={{ paddingTop: 10 }}
          />
          <Text style={styles.actionText}>{text}</Text>
        </RectButton>
      </Animated.View>
    );
  };

  private renderRightActions = (
    progress: Animated.AnimatedInterpolation<number>,
    _dragAnimatedValue: Animated.AnimatedInterpolation<number>,
    id: number
  ) => (
    <View
      style={{
        width: 192,
        height: 59,
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
      }}>
      {this.renderRightAction('Спам', '#C8C7CD', 192, progress, id)}
      {this.renderRightAction('Видалити', colors.red, 128, progress, id)}
    </View>
  );

  render() {
    const { children, id } = this.props;
    return (
        <Swipeable
  ref={this.updateRef}
  friction={2}
  enableTrackpadTwoFingerGesture
  rightThreshold={40}
  renderRightActions={(progress) => this.renderRightActions(progress, this.state.activeSwipeIndex)}
  onSwipeableClose={(direction) => {
    console.log(`Closing swipeable to the ${direction} ` );
  }}
>
  {children}
</Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: '#497AFC',
    justifyContent: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
