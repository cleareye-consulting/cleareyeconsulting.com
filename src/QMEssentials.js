import React, { Component } from 'react'
import qmessentialsLogo from '../src/assets/images/qmessentials-logo.svg'

export default class QMEssentials extends Component {
    render() {
        return (
            <React.Fragment>
                <h2>QMEssentials</h2>
                <div className="row">
                    <div class="col-md-2">
                        <img src={qmessentialsLogo} alt="Q M Essentials logo"/>
                    </div>
                    <div class="col-md-10">
                        <p>QMEssentials is a simple quality management application designed for small to medium-sized businesses who make things.</p>                
                        <p><strong>QMEssentials is free and open-source software licensed under the MIT license. You can download and use or modify QMEssentials at no charge. You can also view the <a href="https://github.com/cleareye-consulting/qmessentials"> source code.</a></strong></p>
                        <p>QMEssentials comes in three "sizes".</p>
                    </div>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th width="10%">&nbsp;</th>
                            <th width="30%">QMEssentials Lite</th>
                            <th width="30%">QMEssentials Standard</th>
                            <th width="30%">QMEssentials Enterprise</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Platform</th>
                            <td>Desktop database software (Microsoft Access)</td>
                            <td>Commonly available and affordable web tooling (PHP and MySQL)</td>
                            <td>Modern, high-performance web stack (React, Express, MongoDB)</td>
                        </tr>
                        <tr>
                            <th>Suitable for</th>
                            <td>Very small teams</td>
                            <td>One or two plants, 50 or more quality operators, hundreds of transactions per minute</td>
                            <td>Can be scaled to large operations with hundreds of operators and thousands of transactions per mintute</td>
                        </tr>
                        <tr>
                            <th>Metrics</th>
                            <td>Single numeric value per observation</td>
                            <td>Single or multiple numeric values per observation</td>
                            <td>Single or multiple numeric, text, yes/no, date, and timespan values per observation</td>
                        </tr>
                        <tr>
                            <th>Reports</th>
                            <td>Limited built-in reporting</td>
                            <td>Limited built-in reporting</td>
                            <td>Automatic subscription-based notifications in addition to built-in reports</td>
                        </tr>
                        <tr>
                            <th>Security</th>
                            <td>Role-based authorization based on unauthenticated user ID input</td>
                            <td>Role-based authorization based on user ID and password</td>
                            <td>Role-based authorization based on user ID and password</td>
                        </tr>
                        <tr>
                            <th>Requirements</th>
                            <td>Desktop PC with Microsoft Access; file server required for multiple users</td>
                            <td>Web server with PHP and MySQL. A modern web browser.</td>
                            <td>Database server, one or more API servers, one or more reporting servers, and one or more front-end delivery servers (all can be on the same physical hardware, depending on the scale needed) and a modern web browser</td>
                        </tr>
                        <tr>
                            <th>Availability</th>
                            <td>Currently available in beta mode. Call or email for details.</td>
                            <td>Currently available in beta mode. Call or email for details.</td>
                            <td>Expected to be available in Summer of 2019.</td>
                        </tr>
                    </tbody>
                </table>



            </React.Fragment>
        )
    }
}