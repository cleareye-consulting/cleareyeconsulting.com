import React, { Component } from 'react';
import experienceImage from './assets/images/pexels-photo-393044.jpeg';
import rightSizeImage from './assets/images/pexels-photo-583846.jpeg';
import practicesImage from './assets/images/pexels-photo-1117452.jpeg';

export default class Why extends Component {
    render() {
        return (
            <React.Fragment>
                <section>
                    <h3>Why Choose ClearEye?</h3>
                    <p>We've got a strong track record of delivering positive business value for our clients. Here are some of the secrets of our success:</p>
                </section>
                <hr />
                <section className="body-section">
                    <div className="row">
                        <div className="col-md-5">
                            <img src={experienceImage} alt="Experience" style={{ maxWidth: "100%" }} />
                        </div>
                        <div className="col-md-7">
                            <h4>An uncommon combination of experience and forward thinking</h4>
                            <p>Sometimes what looks like 20 years of experience is, in reality, just the same year 20 times over. At ClearEye, we never stop learning and growing. We've worked across platforms, in a variety of industries, and each experience has become part of who we are.</p>
                            <p>With experience comes perspective, the ability to evaluate the present in the context of the past, and see what that could lead to in the future. We call ourselves ClearEye because it reflects our clear, unwavering focus on what's really driving your business growth—or your challenges—and our commitment to find the solution that fits your needs.</p>
                            <p>We'd like to use our experience and perspective to help your business or organization succeed.</p>
                        </div>
                    </div>
                </section>
                <section className="body-section alternate-section">
                    <div className="row">
                        <div className="col-md-7">
                            <h4>Right-sized for small businesses and organizations</h4>
                            <p>There are definitely larger consulting and custom development firms. Many of them do excellent work. There are also outsourcing and freelancing options, which can be a good option for many businesses.</p>
                            <p>Our niche is right in the middle of those two options. We are a small, lean operation. We typically work in two-week increments, striving to deliver some measure of positive business value with each increment. If you're not seeing the value, there's no contract to terminate, we just transfer the code to you—you always own whatever code we write for you—and move on.</p>
                            <p>But unlike many freelancing engagements, our goal is to build a relationship with you, to understand your business, and to foster a sense of collective ownership in the results of our work together. In other words, we're not the kind of consultants who keep finding ways to stick around, but we'll be there as long as you need us to be.</p>
                        </div>
                        <div className="col-md-5">
                            <img src={rightSizeImage} alt="Right Size" style={{ maxWidth: "100%" }} />
                        </div>
                    </div>
                </section>
                <section className="body-section">
                    <div className="row">
                        <div className="col-md-5">
                            <img src={practicesImage} alt="Practices" style={{ maxWidth: "100%" }} />
                        </div>
                        <div className="col-md-7">
                            <h4>Sound practices based on solid principles</h4>
                            <p>All of our business dealings are driven by the high standards of conduct we hold ourselves to, which we're pretty proud of. We hope you'll agree.</p>
                            <p>But that's just the baseline. We also have developed a deep understanding of how software development works. And an equally deep understanding of how it doesn't work. We've seen Agile development principles work exceptionally well, and we've seen them fall apart under the heavy hand of organizational hierarchy. We know how to apply those techniques to our work with you.</p>
                            <p>We've also seen the crucial role that good design can play in both the initial success of a project and the long-term sustainability of the application. We've seen over-engineered solutions that never got off the ground. We've seen customers receive exactly what they asked for, but not at all what they needed. We've seen applications "almost finished" for months and years on end. We've seen the worst outcomes.</p>
                            <p>But we've also seen how flexible, modular designs can allow for smart trade-offs between cost and functionality, and we've seen how, with just a little up-front design, and taking the time to really understand the problem we're trying to solve, we can generate positive business value in a very short time, and continue building from there.</p>
                            <p>We'd be grateful for the opportunity to show you how we work.</p>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}