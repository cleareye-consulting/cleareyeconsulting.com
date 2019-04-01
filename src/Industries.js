import React, { Component } from 'react';
import globeIcon from './assets/images/globe.svg';
import graphIcon from './assets/images/graph_rise.svg';
import firstAidIcon from './assets/images/first_aid.svg';
import gridIcon from './assets/images/grid_1.svg';
import homeIcon from './assets/images/home.svg';
import shopIcon from './assets/images/shop.svg';

export default class Industries extends Component {
    render() {
        return (
            <React.Fragment>
                <section>
                    <h3>It's not about the technology</h3>
                    <p>We understand that technology probably isn't your passion. It's a tool to help you achieve your <strong>real</strong> goals, whatever they may be. We want to understand what you do, so that we can help you do it better.</p>
                    <p>Like we've been doing for years, across a variety of industries.</p>
                </section>
                <hr />
                <section className="body-section">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={graphIcon} alt="Graph" />
                            <h4>Insurance and Financial</h4>
                            <p>Success in the insurance and financial services industries means managing lots and lots of data. But it also means managing relationships. We can help you do both.</p>
                        </div>
                        <div className="col-md-4">
                            <img src={firstAidIcon} alt="First aid bag" />
                            <h4>Healthcare</h4>
                            <p>We're not clinical, but we have worked for many years with healthcare providers and equipment suppliers, and we understand the challenges of managing patient information and finances.</p>
                        </div>
                        <div className="col-md-4">
                            <img src={globeIcon} alt="Globe" />
                            <h4>Manufacturing</h4>
                            <p>Delivering quality product when and where it's needed requires on-the-spot information, targeted to the production operator, line manager, or executive who needs it. We can get you there.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={homeIcon} alt="Home" />
                            <h4>Construction and Maintenance</h4>
                            <p>You've worked hard to develop a profitable trade. As your business grows, more and more of your time is spent on other things. Let us help you manage those things, so you can spend time on the "real work" you enjoy.</p>
                        </div>
                        <div className="col-md-4">
                            <img src={shopIcon} alt="Restaurant" />
                            <h4>Food service</h4>
                            <p>POS software? You've already got it. Accounting and payroll? There are already great options out there. But what about your online presence? Your back-office systems? We can help you with those things, so you can focus on delighting your customers.</p>
                        </div>
                        <div className="col-md-4">
                            <img src={gridIcon} alt="Boxes" />
                            <h4>Self-storage</h4>
                            <p>In a super-saturated market, customer engagement can be a key differentiator. Our pre-built tools can help integrate your website with your back office systems, so that customers will have a reason to choose your site for their storage needs.</p>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}