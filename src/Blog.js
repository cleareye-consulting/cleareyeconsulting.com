import React, { Component } from 'react';

export default class Blog extends Component {

    posts = [
        {
            url: 'https://medium.com/@jmgant.cleareyeconsulting/how-to-replace-your-old-as400-erp-without-wrecking-your-operations-26e442b46151?source=friends_link&sk=4ccb67dc822fcf14b76ada19a277056a',
            title: 'How to Replace Your Old AS400 ERP (Without Wrecking Your Operations)',
            date: new Date(2019, 3, 8),
            author: 'Michael Gant',
            summary: 'SMBs that have been operating for more than a decade or two may be struggling to innovate because their operations are completely dependent on aging AS400 ERP software. This article provides some guidance on how to begin the process of replacing those legacy systems and start moving forward again.'
        },
        {
            url: 'https://medium.com/@jmgant.cleareyeconsulting/concerning-microsoft-access-26d3308fece0?source=friends_link&sk=09e2c5b4c00775fea9d6d2ae271cc9c7',
            title: 'Concerning Microsoft Access',
            date: new Date(2019, 3, 5),
            author: 'Michael Gant',
            summary: 'Microsoft Access is a great tool with a variety of uses. But its issues with robustness and maintainability have been the source of many an unexpected bad day for SMBs that rely on Access applications for their day-to-day operations. This post explores when to use Access, when to look into other options, and how some of those other options compare.'
        },
        {
            url: 'https://medium.com/@jmgant.cleareyeconsulting/what-is-business-value-148a6932e65?source=friends_link&sk=d255283927970d494fa29a3a3352e7ae',
            title: 'What is “Business Value”',
            date: new Date(2018, 11, 8),
            author: 'Michael Gant',
            summary: 'SMBs often experience a bit of sticker shock when they find out how much custom software and consulting services can cost. How can you determine whether those services provide value for the money? This post discusses various forms of "business value" that your software can provide, and some thoughts on how to measure that value.'
        }
    ];

    render() {
        return (
            <React.Fragment>
                <section>
                    <h3>Blog</h3>
                    <p>We keep a close eye on the technology of business and on the business of technology. Here are some posts we've shared, on a variety of subjects. If you find these helpful or would like more information, let us know in the comments, or connect with us on <a href="https://twitter.com/ClearEyeCnsltg">Twitter</a>, <a href="https://www.facebook.com/ClearEye-Consulting-349860048969685/">Facebook</a>, or <a href="https://www.linkedin.com/company/cleareyeconsulting">LinkedIn</a>.</p>
                </section>
                <hr />
                <section>
                    {
                        this.posts.map(post => (
                            <div>
                                <h4><a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a></h4>
                                <p style={{ fontSize: 'smaller' }}>{post.author} {post.date.toLocaleDateString()}</p>
                                <p>{post.summary}</p>
                            </div>
                        ))
                    }
                </section>
            </React.Fragment>
        )
    }

}