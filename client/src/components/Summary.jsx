import React from "react";
import BuyingOptions from "./BuyingOptions";
import styles from "./summary.scss";

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getStars = this.getStars.bind(this);
  }

  getStars() {
    let rating = this.props.product.rating;
    if (rating < 1) return styles.rating0_1;
    if (rating === 1) return styles.rating1;
    if (rating < 2) return styles.rating1_2;
    if (rating === 2) return styles.rating2;
    if (rating < 3) return styles.rating2_3;
    if (rating === 3) return styles.rating3;
    if (rating < 4) return styles.rating3_4;
    if (rating === 4) return styles.rating4;
    if (rating < 5) return styles.rating4_5;
    if (rating === 5) return styles.rating5;
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
          <span className={this.getStars()} />{" "}
          <a href="#reviews">
            {this.props.product.review_count} customer reviews
          </a>{" "}
          |{" "}
          <a href="#questions">
            {this.props.product.question_count} answered questions
          </a>
        </div>
        <br />
        {this.props.product.best_seller ? (
          <a href="http://amazon.com">
            <span className={styles.bestseller} /> in{" "}
            {this.props.product.catagory}
          </a>
        ) : (
          ""
        )}
        <br />
        <hr />
        <div className={styles.summaryitem}>
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
