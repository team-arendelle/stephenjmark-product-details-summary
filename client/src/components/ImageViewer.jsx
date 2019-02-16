import React from "react";
import ImageButton from "./ImageButton";
import styles from "./imageviewer.scss";

class ImageViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: ""
    };
  }

  componentDidMount() {
    this.setState({ currentImage: this.props.images[0] });
  }

  render() {
    return (
      <div className={styles.imageviewer}>
        <ul className={styles.visualselector}>
          {this.props.images.map(image => {
            return (
              <ImageButton handleHover={this.props.swapImage} image={image} />
            );
          })}
        </ul>
        <img className={styles.mainimage} src={this.props.mainImage} />
      </div>
    );
  }
}

export default ImageViewer;
