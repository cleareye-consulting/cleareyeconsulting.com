import React, { Component } from 'react'
import photo from './assets/images/MGantPhoto.png'

export default class About extends Component {
  render() {
    return (
      <>
        <h2>About ClearEye Consulting</h2>
        <p>
          ClearEye Consulting is a small software development and business technology consulting firm. How small? About as small as we can
          get!
        </p>
        <p>
          Being a primarily solo operation, there are definitely limits to the types of projects we can take on. But don't worry, we've been
          doing this for a long time, and if your project is outside our scope, we'll let you know. Besides, we've got connections. If we
          need additional developers, we can hire them. If we need hardware experts, IT admins, graphic designers, or just about any other
          kind of help, we've got the professional network and resources to get the job done.
        </p>

        <img src={photo} alt="Michael Gant" width="220px" style={{ float: 'left', marginRight: '1rem' }} />
        <h4>About Michael Gant</h4>
        <p>
          The founder and principal consultant of ClearEye Consulting, Michael Gant, has been developing software commercially for over 20
          years. Check out&nbsp;
          <a href="https://www.linkedin.com/in/john-michael-gant/" target="_blank">
            Michael's LinkedIn page
          </a>
          &nbsp; to learn more about his career. Or read some of his articles on{' '}
          <a href="https://medium.com/@jmgant.cleareyeconsulting" target="_blank">
            Medium
          </a>
          .
        </p>
        <h4>Why "ClearEye"?</h4>
        <p>
          Why did Michael choose the name ClearEye Consulting? It represents a key strength: to understand the needs of his customers at a
          fundamental level, to see beyond their immediate needs, to get to the root of the problem. ClearEye Consulting won't simply give
          you what you ask for, collect your money, and leave you no better off. Our commitment is to find the right-sized solution to
          address your technology challenges today, and to position you for continued success in the future.
        </p>
      </>
    )
  }
}
