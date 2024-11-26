import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing

function Services() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Our Services</h2>
      <div className="row">
        {/* Billing Automation Card */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Billing Automation</h5>
              <p className="card-text">
                Automate your billing processes and streamline invoicing to save time and reduce errors.
              </p>
              <Link to="/plans/billing-automation" className="btn btn-primary">View Plans</Link>
            </div>
          </div>
        </div>

        {/* Custom Invoicing Card */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Custom Invoicing</h5>
              <p className="card-text">
                Create custom invoices tailored to your business needs and improve your billing experience.
              </p>
              <Link to="/plans/custom-invoicing" className="btn btn-primary">View Plans</Link>
            </div>
          </div>
        </div>

        {/* Subscription Management Card */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Subscription Management</h5>
              <p className="card-text">
                Manage your subscriptions with ease and automate renewals and billing cycles.
              </p>
              <Link to="/plans/subscription-management" className="btn btn-primary">View Plans</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
