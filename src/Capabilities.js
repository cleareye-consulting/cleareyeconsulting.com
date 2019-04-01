import React, { Component } from 'react';
import consultingImage from './assets/images/pexels-photo-886465.jpeg';
import softwareImage from './assets/images/pexels-photo-830891.jpeg';
import documentationImage from './assets/images/pexels-photo-270535.jpeg';

export default class Capabilities extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="body-section">
                    <div className="row">
                        <div className="col-md-5">
                            <img src={consultingImage} alt="Consulting" style={{ maxWidth: "100%" }} />
                        </div>
                        <div className="col-md-7">
                            <h4>Consulting services that deliver results (not just "deliverables")</h4>
                            <p>We love building things. That's what we do. So why are we called ClearEye <em>Consulting</em>? Because we want to build, not just anything, but the <strong>right</strong> thing.</p>
                            <p>So rather than ask, "what do you need?", we start out with "what are you trying to do?" and "what challeges are you facing?". It may be that a small change to your process, possibly coupled with some small amount of automation, could make a huge difference. Or maybe there's no feasible way to apply technology to what you do. But we'll help you figure that out up front, before we build anything.</p>
                            <p>It may also be that there's already a great tool for what you need. We're not going to reinvent the wheel, especially not at your expense. We'll point you in the right direction, and help you get there if needed.</p>
                        </div>
                    </div>
                </section>
                <section className="body-section alternate-section">
                    <div className="row">
                        <div className="col-md-7">
                            <h4>Enterprise-class software tools, without an enterprise-class IT budget</h4>
                            <p>There are lots of different kinds of software. If you need a control system to guide your rocket ship to Mars, well, that's not us. But if you need custom software to make your business run better, that's where we come in.</p>
                            <p>Starting from scratch can be a lot of fun, but maybe you already have tools that are working well, just not working well together. Most commercial applications today are built for extensibility. We can find and leverage those extension points, so your various tools can work as one integrated system.</p>
                            <p>Or maybe your tools aren't working as well as you need them to, but you don't exactly want to start over. Maybe you've got a desktop database that's integrated nicely into your workflow, but it just can't keep up anymore. Or you're still on a "green screen" application from the 80s, and you're not ready to abandon it, but you need a more efficient workflow. We can help with all kinds of legacy system upgrades.</p>
                        </div>
                        <div className="col-md-5">
                            <img src={softwareImage} alt="Custom Software" style={{ maxWidth: "100%" }} />
                        </div>
                    </div>
                </section>
                <section className="body-section">
                    <div className="row">
                        <div className="col-md-5">
                            <img src={documentationImage} alt="Documentation and training" style={{ maxWidth: "100%" }} />
                        </div>
                        <div className="col-md-7">
                            <h4>Documentation and training to maximize your existing investments</h4>
                            <p>In a perfect world, all systems are well-documented and easy to maintain. But the reality is that, even if you started out with good documentation, chances are it's no longer accurate. We can help you understand and document what's already in place so that you can maintain your existing application more cost-effectively and be better-positioned for future growth.</p>
                            <p>In a different perfect world, the people tasked with maintaining an application would be familiar with software development and database management. Often, however, the job of maintaing mission-critical systems falls to somebody with a more general technical skillset, who may be struggling to keep the application afloat. We offer technical training and mentoring to help harried system admins maintain the applications they own.</p>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}