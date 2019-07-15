import React from 'react'

export default () => {
    return (
        <>
            <h2>Microsoft Access and Excel Migration FAQ</h2>
            <p>Many business large and small use Microsoft Excel to keep track of all kinds of business-related information. Some have taken the next step by putting their data in a Microsoft Access application. This is a common approach but it often leads to problems. If you're experiencing these problems, here are a few frequently asked questions about migrating off Excel and Access. We hope you find this helpful.</p>
            
            <h4>1. Why should I be thinking of moving my business-critical data out of Excel?</h4>
            <p>Excel is designed to make it easy for you to manipulate and analyze data. But it's not designed to be the primary (or only) place where your data is stored. It's just too easy to change or delete it from there. And if more than one person needs to access the data at the same time, that's possible with Excel, but it's difficult and risky.</p>
            
            <h4>2. Why should I be thinking about moving my data out of Access?</h4>
            <p>Unlike Excel, Access <em>is</em> designed to be the primary place where your data is stored. And it has some nice tools for designing a user interface around that data. But Access has been shown to work best for individuals or very small teams. Try to grow, and you run into problems. The database is notoriously easy to corrupt. And while you can get a long way without having to do any coding, once you do have to write code, you're using a language that hasn't been updated in over 20 years (and wasn't well-regarded even back then). Also, the lack of version control makes it extremely easy to break the application in a way that can't ever be fixed.</p>
            
            <h4>3. Can I just switch to a SQL Server back-end?</h4>
            <p>Access database implementations follow a familiar pattern: quick success on a small scale, then a gradual slowing of progress as you try to build out more features or add users, then a sudden crash when you casually and unwittingly sail past the breaking point. After the crash (or just before it), a common recommendation is to keep the user interface in Access but to move the data to a Microsoft SQL Server database. SQL Server is a commercial-grade tool. Welcome to the messy and complicated world of managing IT infrastructure at a commercial scale! Once you're at this point, it's time to start talking with a professional.</p>

            <h4>4. What should I migrate to?</h4>
            <p>The obvious answer: it depends! If you're committed to staying with Windows desktop applications, Microsoft .NET has some good options for building a very similar interface to what you've got with Access. But if you're open to the idea, internal web-based applications can do almost all the same things, and can also work on tablets, phones, Macs, etc. If you go that route, ASP.NET, PHP, and Python are three very approachable options, but there are other great options as well. You also have a lot of choices for how to store the data, including putting it on a cloud database. A professional developer can help you evaluate the options and pick the route that best fits your needs.</p>

            <h4>5. Can I still use Excel or Access to do my analysis and reporting?</h4>
            <p>Access and Excel both use a technology called ODBC (Open DataBase Connectivity). If you migrate to a database platform that supports ODBC&mdash;most "SQL" databases do&mdash;you'll be able to pull in your data with just a few clicks. And it doesn't matter whether the database is on-premise or in the cloud, you can get to it the exact same way. </p>

            <h4>6. Is my data safe on the cloud?</h4>
            <p>Your data's not absolutely safe anywhere. The cloud is just computers connected to the Internet. If you're reading this, you're in the cloud right now. If your data is accessible from the computer you're on right now, your data is already on the cloud, protected by whatever security measures you've installed on your computer or network. Most cloud providers meet strict government-supported standards for privacy and data protection. Leaks and breaches can still happen, but the risk is probably lower on the cloud than on-premise.</p>

            <h4>7. Am I giving up control of my data or processes by using a third-party or custom application?</h4>
            <p>It depends on the route you take. If you use commercially available software, you have to use it the way it's designed to work. If you get custom software, ask about ownership of the code. Some developers retain ownership of the code and only share it with you in machine-readable form. Others transfer all rights to the code to you upon delivery of the product, in which case you have the right to ask that developer or any other developer to make whatever changes you want.</p>

            <h4>8. What will it cost to move off Excel or Access?</h4>
            <p>If you're using Excel or Access to manage your mission-critical data, chances are you haven't invested enough in your IT infrastructure, and you're probably already suffering from that, or will be soon as your business grows. Custom software likely will be at least a few thousand dollars to build a minimal application, and probably at least $40-50 per month for hosting, or possibly hundreds or even thousands depending on your workload. A professional developer will be able to help you evaluate the initial investment, total cost of ownership, and return on investment.</p>

            <h4>9. How do I get an application built?</h4>
            <p>Hiring your own development team gives you the ultimate control, but it's not realistic for most small businesses. There are many freelance developers available for hire. Many are willing to work for relatively low wages, but carefully consider how much of your own time you'll have to invest in managing that relationship, and whether you have the technical skills to specify what you need the developer to build. Many companies that don't have existing IT expertise have found that a small independent software vendor (ISV) can be a good fit for their needs.</p>

            <p><strong>Are you ready to take the next step? Call or email us today!</strong></p>

        </>
    )
}