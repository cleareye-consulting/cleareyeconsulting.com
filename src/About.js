import React, { Component } from 'react';
import photo from './assets/images/MGantPhoto.JPG';

export default class About extends Component {
    render() {
        return(
          <React.Fragment>
              <h2>About ClearEye Consulting</h2>
              <p>ClearEye Consulting is a small software development and business technology consulting firm. How small? About as small as we can get!</p>
              <p>Being a primarily solo operation, there are definitely limits to the types of projects we can take on. But don't worry, we've been doing this for a long time, and if your project is outside our scope, we'll let you know. Besides, we've got connections. If we need additional developers, we can hire them. If we need hardware experts, IT admins, graphic designers, or just about any other kind of help, we've got the professional network and resources to get the job done.</p>
              <p>Besides, sometimes there are <a href="https://medium.com/@jmgant.cleareyeconsulting/punching-at-your-weight-6e878f27a61c?source=friends_link&sk=09c4445ef83d71938cc99fbd966731d3" target="_blank" rel="noopener noreferrer">advantages</a> to working with a smaller company.</p>
              <h4>About Michael Gant</h4>
              <img src={photo} alt="Photo of Michael Gant" width="220px" style={{float:"left", marginRight: "1rem"}}/>
              <p>The founder and principal consultant of ClearEye Consulting, Michael Gant, has been developing software commercially for over 20 years. Many of those years were spent at a well-known Chattanooga-based health insurer, where he worked in a variety of roles from low-level analyst to solo developer to lead developer on a small team to Scrum Master of multiple teams, including offshore teams. Michael even worked for a time as a Scrum Product Owner, serving in a key role for major strategic projects.</p>
              <p>Besides having deep and broad experience building applications across a broad spectrum of platforms and languages, Michael has also seen the software development process from beginning to end, from inital requirements to architecture and design to construction to implementation to long-term support. He has worked with web applications, desktop applications, services, and batch processes, used nearly every major database, and has worked on every version of Windows since 3.1, along with Unix, Linux, and Mac.</p>
              <h4>Why "ClearEye"?</h4>
              <p>Why did Michael choose the name ClearEye Consulting? It represents a key strength: to understand the needs of his customers at a fundamental level, to see beyond their immediate needs, to get to the root of the problem. ClearEye Consulting won't simply give you what you ask for, collect your money, and leave you no better off. Our commitment is to find the right-sized solution to address your technology challenges today, and to position you for continued success in the future.</p>
              <h4>Additional Reading</h4>
              <p>Read about some of Michael's various experiences in his "Languages I've Learned, or Not" series:</p>
              <p><a href="https://medium.com/@jmgant.cleareyeconsulting/languages-ive-learned-or-not-the-early-days-517c282a6b5f?source=friends_link&sk=075c4afb8d6ce50ddb3d11fa22f6f64f" target="_blank" rel="noopener noreferrer">Languages I've Learned, or Not&mdash;the Early Days</a> describes his early days with Microsoft Access and Excel, and some important lessons learned.</p>
              <p><a href="https://medium.com/@jmgant.cleareyeconsulting/languages-ive-learned-or-not-my-days-in-shadow-it-fd76e4c69f67?source=friends_link&sk=b42b6aa8b1544b2bda10005b7f946c5f" target="_blank" rel="noopener noreferrer">Languages I've Learned, or Not&mdash;My Days in Shadow IT</a> shares some experiences working with (and against) corporate IT.</p>
              <p><a href="https://medium.com/@jmgant.cleareyeconsulting/languages-ive-learned-or-not-living-legacy-1f72e8c44ed5?source=friends_link&sk=624afd97b40877c449459b51e198957f" target="_blank" rel="noopener noreferrer">Languages I've Learned, or Not&mdash;Living Legacy</a> talks about his experience with Cobol and some other things he never expected to learn.</p>
              <p>In <a href="https://medium.com/@jmgant.cleareyeconsulting/languages-ive-learned-or-not-oriented-objectively-5b50aac27161?source=friends_link&sk=da7d1b8068ff995fdf457d53a0ee602d" target="_blank" rel="noopener noreferrer">Languages I've Learned, or Not&mdash;Oriented Objectively</a>, Michael shares some thoughts about object-oriented languages, including Java, C#, and C++. VB6 is in there as well. And some thought on the future of object-oriented programming, especially in JavaScript.</p>
              <p><a href="https://medium.com/@jmgant.cleareyeconsulting/languages-ive-learned-or-not-web-1-0-90ee0df3c7a7?source=friends_link&sk=45984c9041fd85071fdb3a5630155158" target="_blank" rel="noopener noreferrer">Languages I've Learned, or Not&mdash;Web 1.0</a> is a review of the first 15 years or so of Michael's work with web technologies, including ASP and ASP.NET, as well as Java and, of course, JavaScript.</p>
                <p><a href="https://medium.com/@jmgant.cleareyeconsulting/languages-ive-learned-or-not-rethinking-php-slightly-517803913e44?source=friends_link&sk=87da6bc29db8317e4e50c642e18af81d" target="_blank" rel="noopener noreferrer">Languages I've Learned, or Not&mdash;Rethinking PHP, Slightly</a> gives some further thoughts on the relevance of PHP in modern web development.</p>
                <p><a href="https://medium.com/@jmgant.cleareyeconsulting/languages-ive-learned-or-not-web-forward-a8bb01acb75c?source=friends_link&sk=99cab0d50344277f804d6e6eabfed8e2" target="_blank" rel="noopener noreferrer">Languages I've Learned, or Not&mdash;Web Forward</a> brings the discussion of web development to the present day and beyond.</p>
		</React.Fragment>  
        );
    }
}
