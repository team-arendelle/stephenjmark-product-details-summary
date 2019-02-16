import React from "react";
import BuyingOptions from "./BuyingOptions";
import styles from "./summary.scss";

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.summary}>
        <h3 className={styles.name}>{this.props.product.product_name}</h3>
        <div className={styles.company}>
          by {this.props.product.company}
        </div>{" "}
        <br />
        <div>
          {this.props.product.rating} {this.props.product.review_count}{" "}
          <a href="#reviews">customer reviews</a> |{" "}
          {this.props.product.question_count}{" "}
          <a href="#questions">answered questions</a>
        </div>
        <br />
        <div>Best Seller in {this.props.product.catagory}</div>
        <br />
        <hr />
        <div className={styles.price}>
          Price:{" "}
          <span className={styles.priceNumber}>
            ${this.props.product.price}
          </span>
        </div>
        <BuyingOptions
          id={this.props.product.id_products}
          swapImage={this.props.swapImage}
        />
        <div id="feature_bullets">
          <ul className={styles.bullets}>
            <li>
              Gift Box and Tools Package,Rimable Plastic Cruiser Fully Assembled
              22'' Long x 6''
            </li>
            <li>Wide Deck With 100% Fresh Material High Quality 3”</li>
            <li>
              Thick Aluminium Trucks Super Smooth PU Wheel With High Speed
              Bearing
            </li>
            <li>Max Load Weight 198 LB (90KGS)</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Summary;
