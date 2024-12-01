import React from 'react';
import { Link } from 'react-router-dom';

function SubscriptionManagementPlans() {
  return (
    <div className="container py-5">
      <h2 className="text-center">Subscription Management Plans</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Basic Plan</h5>
              <p className="card-text"><strong>₹10000</strong></p>
              <p className="card-text">Ideal for small businesses looking to manage simple subscriptions.</p>
              <ul>
                <li>Up to 100 subscriptions</li>
                <li>Basic reporting features</li>
                <li>Email support</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Standard Plan</h5>
              <p className="card-text"><strong>₹20000</strong></p>
              <p className="card-text">Great for growing businesses with advanced features.</p>
              <ul>
                <li>Up to 500 subscriptions</li>
                <li>Advanced reporting</li>
                <li>Phone support</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Premium Plan</h5>
              <p className="card-text"><strong>₹30000</strong></p>
              <p className="card-text">The best plan for large enterprises with the most features and flexibility.</p>
              <ul>
                <li>Unlimited subscriptions</li>
                <li>Full analytics suite</li>
                <li>24/7 premium support</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionManagementPlans;
