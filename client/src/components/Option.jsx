import React from "react";
import ImageButton from "./ImageButton.jsx";
import styles from "./option.scss";

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.renderSelect = this.renderSelect.bind(this);
    this.state = { selected: null };
    this.swapImage = this.swapImage.bind(this);
  }

  //swapImage and Change Option
  swapImage(flag, imgUrl, value) {
    flag
      ? this.setState({ selected: value })
      : this.setState({ selected: null });

    this.props.swapImage(flag, imgUrl, value);
  }

  renderSelect() {
    return (
      <div>
        <div>{this.props.optionName}: </div>
        <select>
          {this.props.options.map(option => {
            let value = option.var_name;
            return <option value={value}>{value}</option>;
          })}
        </select>
      </div>
    );
  }

  renderTable() {
    return (
      <div>
        <div>
          {this.props.optionName}: {this.state.selected}{" "}
        </div>
        <ul className={styles.visualselector}>
          {this.props.options.map(option => {
            let value = option.var_name;
            return (
              <ImageButton
                handleHover={this.swapImage}
                image={option.imgUrl}
                value={value}
              />
            );
          })}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.type === "select" ? this.renderSelect() : ""}
        {this.props.type === "table" ? this.renderTable() : ""}
      </div>
    );
  }
}

export default Option;
