import React, { useState } from 'react'
import './SubscriptionPlans.css'

const SubscriptionPlans = () => {
  const [billingCycle, setBillingCycle] = useState('monthly')

  const plans = [
    {
      name: 'Basic Restaurant',
      monthlyPrice: 30.99,
      yearlyPrice: 371.88,
      description: 'Perfect for single location restaurants getting started',
      features: [
        '1 restaurant location',
        'Up to 25 online orders/month',
        'Single admin account',
        'Basic support (up to 72 hours)',
        'Basic reporting (PDF)',
      ],
      popular: false,
      color: '#4F46E5'
    },
    {
      name: 'Growing Restaurant',
      monthlyPrice: 50.99,
      yearlyPrice: 611.88,
      description: 'Ideal for expanding restaurants with multiple locations',
      features: [
        '2-4 restaurant locations',
        'Up to 150 online orders/month',
        '1 admin + 2 crew members',
        'Priority support (up to 24 hours)',
        'Advanced order management',
        'Multi-location dashboard',
        'Staff management tools',
        'Advanced analytics',
        'Custom menu builder',
        'Inventory tracking',
        'Custom branding'
      ],
      popular: false,
      color: '#7C3AED'
    },
    {
      name: 'Growing & Busy Restaurant',
      monthlyPrice: 70.99,
      yearlyPrice: 851.88,
      description: 'For high-volume restaurants with multiple locations',
      features: [
        '5+ restaurant locations',
        'Unlimited online orders',
        'Unlimited staff accounts',
        'High priority support (instant response)',
        'Dedicated account manager',
        'Real-time analytics & insights',
        'Custom branding',
        'Marketing automation tools',
        'Customer loyalty programs'
      ],
      popular: false,
      color: '#EC4899'
    }
  ]

  const getPrice = (plan) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice
  }

  return (
    <div className="subscription-plans">
      <div className="hero-section">
        <h1 className="main-title">Power Your Restaurant Business</h1>
        <p className="main-subtitle">
          Choose the perfect plan to streamline your restaurant operations, manage online orders, and grow your business with our comprehensive restaurant management platform
        </p>
        
        <div className="billing-toggle">
          <button
            className={billingCycle === 'monthly' ? 'active' : ''}
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly
          </button>
          <button
            className={billingCycle === 'yearly' ? 'active' : ''}
            onClick={() => setBillingCycle('yearly')}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="plans-container">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`plan-card ${plan.popular ? 'popular' : ''}`}
            style={{ '--plan-color': plan.color }}
          >
            {plan.popular && <div className="popular-badge">Most Popular</div>}
            
            <div className="plan-header">
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
            </div>

            <div className="price-section">
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">{getPrice(plan)}</span>
                <span className="period">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
              </div>
            </div>

            <ul className="features-list">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="feature-item">
                  <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="cta-button">
              Get Started
            </button>
          </div>
        ))}
      </div>

      <div className="bottom-section">
        <p className="guarantee-text">
          🍽️30-day money-back guarantee • 🔒 Cancel anytime • 📞 Dedicated restaurant support
        </p>
      </div>
    </div>
  )
}

export default SubscriptionPlans 