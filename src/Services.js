import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Services extends Component {
  render() {
    return (
      <>
        <h2>What We Do</h2>
        <p>
          ClearEye Consulting is a software development and business technology consulting firm serving small and medium-sized businesses.
        </p>
        <h4>Custom Software</h4>
        <p>
          We are experienced building, maintaining, and fixing software across a broad spectrum of industries with a wide variety of
          development tools. Types of applications we often work on include:
        </p>
        <ul>
          <li>Line-of-business applications</li>
          <li>B2B and real-time API integrations</li>
          <li>Batch and event-driven system integrations, including EDI</li>
          <li>Database design, development, and optimization</li>
          <li>Cloud applications</li>
        </ul>
        <h4>Specialty Services</h4>
        <p>
          <strong>MS Access Upgrades. </strong>We don't really use Microsoft Access to build new things, or necessarily recommend its use
          (see our <Link to="/content/migration">migration FAQs</Link> or{' '}
          <a
            href="https://medium.com/@jmgant.cleareyeconsulting/concerning-microsoft-access-26d3308fece0?source=friends_link&sk=09e2c5b4c00775fea9d6d2ae271cc9c7"
            target="_blank"
            rel="noopener noreferrer"
          >
            this article
          </a>{' '}
          for a deeper dive). But we have a lot of experience helping small business and organizations evaluate their existing Access
          investments and plot a course toward a more permanent solution. If you're reaching the limits of Access, give us a call!
        </p>
        <p>
          <strong>Legacy System Updates. </strong>If your small to medium-sized business has been in operation for a decade or two, it's
          very possible that you've got an old AS400 or System i box that's running your core operational software (often called ERP for
          "Enterprise Resource Planning"). Even if a full-scale replacement isn't realistic for you right now (it's usually a bad idea
          anyway), we can help you develop integrated hybrid solutions that will position you for future growth. If you're in this
          situation, you may find&nbsp;
          <a
            href="https://medium.com/@jmgant.cleareyeconsulting/how-to-replace-your-old-as400-erp-without-wrecking-your-operations-26e442b46151?source=friends_link&sk=4ccb67dc822fcf14b76ada19a277056a"
            target="_blank"
            rel="noopener noreferrer"
          >
            this article
          </a>
          &nbsp; helpful.
        </p>
      </>
    )
  }
}
