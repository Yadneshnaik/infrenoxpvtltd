import React from 'react';
import { Link } from 'react-router-dom'; 

function BillingAutomationPlans() {
  return (
    <div className="container py-5">
      <h2 className="text-center">Billing Automation Plans</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Basic Plan</h5>
              <p className="card-text">₹1500/month</p>
              <ul>
                <li>Automated billing</li>
                <li>Basic invoicing features</li>
                <li>Up to 100 transactions</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Pro Plan</h5>
              <p className="card-text">₹1500/month</p>
              <ul>
                <li>Advanced billing automation</li>
                <li>Custom invoicing</li>
                <li>Up to 500 transactions</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Enterprise Plan</h5>
              <p className="card-text">₹1500/month</p>
              <ul>
                <li>Complete automation</li>
                <li>Custom templates</li>
                <li>Unlimited transactions</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingAutomationPlans;
