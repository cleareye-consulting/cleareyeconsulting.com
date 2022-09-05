import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import riverwalkImage from './assets/images/riverwalk-bridge-square.png'

export default class Home extends Component {
  render() {
    return (
      <>
        <section>
          <div className="bg-light p-4">
            <div className="row">
              <div className="col-md-4">
                <img src={riverwalkImage} alt="Footpath bridge" style={{ maxWidth: '100%' }} />
              </div>
              <div className="col-md-8">
                <h2>Is your business technology taking you where you want to go?</h2>
                <p className="lead">
                  As your organization grows, processes that once were simple and manageable can gradually become unwieldy. Spreadsheets and
                  databases that got you through the early days no longer meet your needs. Customer contacts get dropped. Milestones get
                  missed. Regulatory compliance suddenly becomes a concern. Team members are frustrated. Execution of your core mission
                  begins to suffer.
                </p>
                <p className="lead">Maybe it's time to get some help. That's what we're here for.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="body-section">
          <h3>How Can ClearEye Help You?</h3>
          <p>
            ClearEye Consulting is a software development and business technology consulting firm located in Chattanooga, Tennessee. We
            provide custom software and consulting services to small and medium-sized businesses (SMBs). Learn more about{' '}
            <Link to="about">who we are</Link>.
          </p>
          <p>
            Our 20+ years of technology experience have spanned a variety of industries and disciplines, including manufacturing, quality
            control, safety, and all aspects of healthcare IT. We specialize in helping our clients address their current technology
            challenges so that they can stay on the path to continued success. Learn more about <Link to="services">what we do</Link> and{' '}
            <Link to="approach">how we do it</Link>.
          </p>
          <p>
            Chattanooga is the perfect location for a business like ours. Besides having some of the best scenery anywhere, we are within
            easy driving distance of Atlanta, Nashville, Knoxville, Birmingham, and Huntsville. And with some of the nation's fastest
            Internet service, we can easily serve clients throughout the US.
          </p>
          <p>Call us or email us today for an initial consultation. Or get in touch on social media. We'd love to hear from you!</p>
        </section>
      </>
    )
  }
}
