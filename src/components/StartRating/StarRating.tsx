import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "native-base";

interface StarRatingProps {
  styleStar?: any;
  rating?: number;
}

interface StarRatingState {

}

export default class StarRating extends Component<StarRatingProps, StarRatingState> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderZeroStar() {
    return (
      <View style={styles.starCover}>
        <Icon style={this.props.styleStar} type="FontAwesome" name="star-o" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star-o" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star-o" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star-o" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star-o" />
      </View>
    );
  }
  renderOneStar() {
    return (
      <View style={styles.starCover}>
        <Icon style={this.props.styleStar} type="FontAwesome" name="star" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star-o" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star-o" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star-o" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star-o" />
      </View>
    );
  }
  renderOneStarDotFive() {
    return (
      <View style={styles.starCover}>
        <Icon style={this.props.styleStar} type="FontAwesome" name="star" />
        <Icon
          style={this.props.styleStar}
          type="FontAwesome"
          name="star-half-o"
        />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star-o" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star-o" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star-o" />
      </View>
    );
  }
  renderTwoStar() {
    return (
      <View style={styles.starCover}>
        <Icon style={this.props.styleStar} type="FontAwesome" name="star" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star-o" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star-o" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star-o" />
      </View>
    );
  }
  renderTwoStarDotFive() {
    return (
      <View style={styles.starCover}>
        <Icon style={this.props.styleStar} type="FontAwesome" name="star" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star" />
        <Icon
          style={this.props.styleStar}
          type="FontAwesome"
          name="star-half-o"
        />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star-o" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star-o" />
      </View>
    );
  }
  renderThreeStar() {
    return (
      <View style={styles.starCover}>
        <Icon style={this.props.styleStar} type="FontAwesome" name="star" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star-o" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star-o" />
      </View>
    );
  }
  renderThreeStarDotFive() {
    return (
      <View style={styles.starCover}>
        <Icon style={this.props.styleStar} type="FontAwesome" name="star" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star" />
        <Icon
          style={this.props.styleStar}
          type="FontAwesome"
          name="star-half-o"
        />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star-o" />
      </View>
    );
  }
  renderFourStar() {
    return (
      <View style={styles.starCover}>
        <Icon style={this.props.styleStar} type="FontAwesome" name="star" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star-o" />
      </View>
    );
  }
  renderFourStarDotFive() {
    return (
      <View style={styles.starCover}>
        <Icon style={this.props.styleStar} type="FontAwesome" name="star" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star" />
        <Icon
          style={this.props.styleStar}
          type="FontAwesome"
          name="star-half-o"
        />
      </View>
    );
  }
  renderFiveStar() {
    return (
      <View style={styles.starCover}>
        <Icon style={this.props.styleStar} type="FontAwesome" name="star" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star" />
        <Icon style={this.props.styleStar} type="FontAwesome" name="star" />
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.props.rating === 0 || null ? this.renderZeroStar() : null}
        {this.props.rating === 1 && this.renderOneStar()}
        {this.props.rating === 1.5 && this.renderOneStarDotFive()}
        {this.props.rating === 2 && this.renderTwoStar()}
        {this.props.rating === 2.5 && this.renderTwoStarDotFive()}
        {this.props.rating === 3 && this.renderThreeStar()}
        {this.props.rating === 3.5 && this.renderThreeStarDotFive()}
        {this.props.rating === 4 && this.renderFourStar()}
        {this.props.rating === 4.5 && this.renderFourStarDotFive()}
        {this.props.rating === 5 && this.renderFiveStar()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  starCover: {
    flexDirection: "row"
  }
});
