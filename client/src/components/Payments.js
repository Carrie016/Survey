import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 email creadits"
        amount={500}
        //here I think it is just strpe has a tag StripeCheckout and
        //can pass the token here, then we call the action handleToken
        //to send a post request with this token
        token={(token) => this.props.handleToken(token)}
        //action handleToken =>
        // post to /api/stripe
        // (dispatch) reducer fetchUser -> return true/false
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
