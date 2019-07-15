import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import globeIcon from './assets/images/globe.svg';
import databaseIcon from './assets/images/database.svg';
import computerIcon from './assets/images/imac.svg';
import cloudIcon from './assets/images/cloud.svg';
import tapeIcon from './assets/images/voicemail.svg';

export default class Services extends Component {
    render() {
        return (
            <React.Fragment>                
                <h2>What We Do</h2>
                <p>ClearEye Consulting is a software development and business technology consulting firm serving small and medium-sized businesses. What, exactly, do we mean by that?</p>
                <h4>Business Technology Consulting</h4>
                <p>Let's be honest. Depending on exactly what line of business you're in, there's a pretty good chance you don't need custom software. At least not <em>totally</em> custom software. There are products to meet nearly every conceivable need. Do we know about everything that's out there? Of course not! But we understand how business technology works from the inside out. We can help you evaluate your current situation, determine what you really need, and then help you find and begin using it.</p>
                <h4>Software Development</h4>
                <p>On the other hand, maybe there's not an existing solution that exactly meets your needs. Maybe your company has a highly specialized workflow or you have to work with a special set of data. No problem! We love building things!</p>
                <p>Here are some of the types of things we're particularly good at building:</p>
                <div className="row">
                    <div className="col-md-1">
                        <img src={globeIcon} alt="Globe" />
                    </div>
                    <div className="col">
                        <p className="header6">Public Web Sites and APIs</p>
                        <p>We've been on the web since the early days. If you're looking for a graphically rich website with animations, videos, etc., well, we can probably recommend somebody. But if your goal is to connect your back-end systems to your website, or create a direct sales channel, or connect to your partners via B2B, now that's right up our alley!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1">
                        <img src={computerIcon} alt="Computer" />
                    </div>
                    <div className="col">
                        <p className="header6">Desktop applications</p>
                        <p>We have many years of experience building rich client and desktop applications. For many clients, a browser-based application may be a better fit these days. But if you're heavily invested in the desktop, we can help you move forward with what you've got.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1">
                        <img src={tapeIcon} alt="Tape" />
                    </div>
                    <div className="col">
                        <p className="header6">Batch processing</p>
                        <p>Batch processing is unglamorous, but it makes the world go 'round. We can help you automate your day-to-day processes, and also possibly help you modernize your existing batch runs.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1">
                        <img src={databaseIcon} alt="Database" />
                    </div>
                    <div className="col">
                        <p className="header6">Database Design and Development</p>
                        <p>We've worked with SQL Server since the very early days. Also Sybase (now SAP) ASE, DB2/UDB, and MySQL. We've also worked with MongoDB and other NoSQL options. If you need help with your database, chances are we can provide it.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1">
                        <img src={cloudIcon} alt="Cloud" />
                    </div>
                    <div className="col">
                        <p className="header6">Cloud computing</p>
                        <p>We've worked with IAAS, PAAS, and SAAS options on AWS, Azure, and Google Cloud. We also know Dropbox, OneDrive, Google Drive, iCloud, Office 365, etc. Cloud isn't the right solution for every problem, but it's easier and much more cost-effective than many businesses realize. We can help you find the right mix of cloud, on-premise, and hybrid solutions.</p>
                    </div>
                </div>
                <h4>Specialty Services</h4>
                <p><strong>MS Access Upgrades. </strong>We don't really use Microsoft Access to build new things, or necessarily recommend its use (see our <Link to="/content/migration">migration FAQs</Link> or <a href="https://medium.com/@jmgant.cleareyeconsulting/concerning-microsoft-access-26d3308fece0?source=friends_link&sk=09e2c5b4c00775fea9d6d2ae271cc9c7" target="_blank" rel="noopener noreferrer">this article</a> for a deeper dive). But we have a lot of experience helping small business and organizations evaluate their existing Access investments and plot a course toward a more permanent solution. If you're reaching the limits of Access, give us a call!</p>
                <p><strong>Legacy System Updates. </strong>If your small to medium-sized business has been in operation for a decade or two, it's very possible that you've got an old AS400 or System i box that's running your core operational software (often called ERP for "Enterprise Resource Planning"). If that box in the corner is limiting your growth, we know <a href="https://medium.com/@jmgant.cleareyeconsulting/how-to-replace-your-old-as400-erp-without-wrecking-your-operations-26e442b46151?source=friends_link&sk=4ccb67dc822fcf14b76ada19a277056a" target="_blank" rel="noopener noreferrer">a thing or two</a> about helping you update.</p>
                <p><strong>Quality Control Systems. </strong>If your business involves making something, likely you've given a lot of thought to how to make sure you're making it correctly (here's some <a href="https://medium.com/@jmgant.cleareyeconsulting/does-your-pdca-include-technology-809b3f0c8469?source=friends_link&sk=a06b61428560b8bdad85c36c40a9991c" target="_blank" rel="noopener noreferrer">food for thought</a> along those lines). You probably even have some kind of a system for tracking your quality metrics. If you don't, or if it's not working well, we can help. We helped a first-tier supplier to several major automotive OEMs streamline and improve their quality software (case study <Link to="/content/case-studies/NameWithheld">here</Link>), and we can help you as well!</p>
                <p>We've also recently released a beta version of our new open-source quality management application, QMEssentials. <Link to="/content/qmessentials">Check it out!</Link></p>


            </React.Fragment>
        );
    }
}