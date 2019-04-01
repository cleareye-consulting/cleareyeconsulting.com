import React, { Component } from 'react';
import cogImage from './assets/images/cog.svg';
import browserImage from './assets/images/browser_layout_1.svg';
import trainingAndDocImage from './assets/images/presentation.svg';
import riverwalkImage from './assets/images/riverwalk-bridge-square.png';

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <section>
                    <div className="jumbotron" style={{ backgroundColor: "#c7d7e4" }}>
                        <div class="row">
                            <div class="col-md-4">
                                <img src={riverwalkImage} alt="Footpath bridge" style={{ maxWidth: "100%" }} />
                            </div>
                            <div class="col-md-8">
                                <h2>Is your business technology taking you where you want to go?</h2>
                                <p className="lead">As your organization grows, processes that once were simple and manageable can gradually become unwieldy. Spreadsheets and databases that got you through the early days no longer meet your needs. Customer contacts get dropped. Milestones get missed. Regulatory compliance suddenly becomes a concern. Team members are frustrated. Execution of your core mission begins to suffer.</p>
                                <p className="lead">Can we help? Quite possibly we can.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <hr />
                <section className="body-section">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <img src={cogImage} alt="Gear" />
                            <h4>Business Process Consulting</h4>
                            <p>
                                Even the best technology won't fix a broken process. So we start by making sure you've got the right discipline and shared knowledge around your processes, then move on to the tooling to make those processes work even better.
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src={browserImage} alt="Browser" />
                            <h4>Custom Development</h4>
                            <p>
                                From minor changes and maintenance to full-blown stand-alone applications, web, intranet, Windows, batch, legacy, database, integration, services, you name it; we've got the experience and skills to build the tools your business needs.
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src={trainingAndDocImage} alt="Documentation" />
                            <h4>Documentation and Training</h4>
                            <p>
                                We offer documentation and training for our own applications, of course. But we can also help you capture organizational knowledge of your existing systems, and train your support personnel to administer them effectively.
                            </p>
                        </div>
                    </div>
                </section>
            </React.Fragment>

        )
    }
}