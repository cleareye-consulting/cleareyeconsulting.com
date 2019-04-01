import React, { Component } from 'react';
import globeIcon from './assets/images/globe.svg';
import databaseIcon from './assets/images/database.svg';
import computerIcon from './assets/images/imac.svg';
import cloudIcon from './assets/images/cloud.svg';
import compassIcon from './assets/images/compass.svg';
import layerIcon from './assets/images/layers.svg';
import tapeIcon from './assets/images/voicemail.svg';

export default class Platforms extends Component {
    render() {
        return (
            <React.Fragment>
                <section>
                    <h3>We've got the tools and skills to get the job done</h3>
                    <p>Information technology is a huge, diverse field. Nobody is an expert on everything. The best performers are T-shaped, that is, holding deep knowledge of a few key things, but with a broad perspective on the overall industry.</p>
                    <p>Here are the platforms and technologies we know well.</p>
                </section>
                <hr />
                <section className="body-section">
                    <div className="row">
                        <div className="col-md-1">
                            <img src={globeIcon} alt="Globe" />
                        </div>
                        <div className="col">
                            <h4>Public web sites</h4>
                            <p>We used Netscape Navigator to access our CompuServe back in the day. And we were on IE6 way longer than we should've been. We were there for Web 2.0. And we're still here. Social media has changed how people use the web, but there's no substitute for an actual website. We can help you create the right web presence for your business.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <img src={computerIcon} alt="Computer" />
                        </div>
                        <div className="col">
                            <h4>Desktop applications</h4>
                            <p>We wrote BASIC on our TRS-80s, and VBA on Windows 3.1. We were there when .NET was invented. We tried to make Java look good on Windows. Along the way, we've developed Windows applications to help teams large and small maximize their productivity and manage their data. Windows isn't the obvious choice for most productivity applications today, but it still has its place. And if that's what you're already on and need help, we've got the expertise you need.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <img src={tapeIcon} alt="Tape" />
                        </div>
                        <div className="col">
                            <h4>Batch processing</h4>
                            <p>Yes, we've done Cobol. We've also done SAS. And shell scripting on Windows and AIX. Batch processing is unglamorous, but it makes the world go 'round. We can help you automate your day-to-day processes, and also possibly help you modernize your existing batch runs.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <img src={databaseIcon} alt="Database" />
                        </div>
                        <div className="col">
                            <h4>Relational and NoSQL databases</h4>
                            <p>We've worked with SQL Server since the very early days. Also Sybase (now SAP) ASE, DB2/UDB, and MySQL. We've worked with native drivers, ODBC, JDBC, OLEDB, ADO, etc., etc. We know relational database design and implementation backwards and forwards. But big-iron relational databases aren't always the best option, so we can also help you evaluate the newer NoSQL options as well.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <img src={cloudIcon} alt="Cloud" />
                        </div>
                        <div className="col">
                            <h4>Cloud computing</h4>
                            <p>We've worked with IAAS, PAAS, and SAAS options on AWS, Azure, and Google Cloud. We also know Dropbox, OneDrive, Google Drive, iCloud, Office 365, etc. Cloud isn't the right solution for every problem, but it's easier and much more cost-effective than many businesses realize. We can help you find the right mix of cloud, on-premise, and hybrid solutions.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <img src={layerIcon} alt="Stack" />
                        </div>
                        <div className="col">
                            <h4>Web services and APIs</h4>
                            <p>We were there for SOAP, WS-*, WSDLs, and all of the 2000s-era XML-driven hyper-bloat. We still work with those tools when we need to, but these days REST and JSON have taken over. Let us show you how you can use web services and APIs to integrate your tools and enhance your web presence.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <img src={compassIcon} alt="Compass" />
                        </div>
                        <div className="col">
                            <h4>GIS and mapping</h4>
                            <p>Maps and geographical information can be an excellent source of information for your business, and a key marketing tool. We're not hardcore GIS experts, but we've dug into the guts of ArcGIS on the server side, and we've done some pretty interesting stuff with Google mapping. Let's brainstorm about how mapping can help you grow your business.</p>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}