---
title: 'Why I Built My Own Work-Tracking App'
description: 'Considers the factors involved in an important buy-vs-build decision'
pubDate: '2026-02-19'
audience: 'Business'
heroImage: '../../assets/images/pexels-cottonbro-6804078.jpg'
photoCredit: 'Photo by cottonbro studio: https://www.pexels.com/photo/man-standing-in-front-of-a-wall-with-sticky-notes-in-an-office-and-thinking-6804078/'
---

## The Need

My company, ClearEye Consulting LLC, is pretty much a one-person development shop.
I might contract out a task here or there,
but in practical terms, every aspect of the development process,
from the initial proposal
to the requirements analysis
to the detailed planning
to the test system setup
to the coding
to the testing
to the deployment
to the production support:
it's all me.

I usually have multiple in-flight projects for multiple clients
running at the same time.
During any given work day, I might context-shift
across several business domains and technology stacks.

Besides client work, the business itself requires a certain amount of attention:
maintaining the company website,
administrative work (billing, accounting, taxes, etc.),
business development and planning,
endless small tasks that can pile up and turn into a crisis.

As my client work volume increased—a good problem!—
I began to find it harder and harder to keep it all together.
Some warning signs:

- analysis paralysis: staring at the "pile" of work, not sure what to do next
- taking too long to get back up to speed when resuming a task
- occasional missed commitments (ouch!)
- website and other business development initiatives always getting pushed back
- generally in a reactive vs intentional mode

It was time to make some changes.
But how?
Should I adapt an existing tool to fit my needs?
Or try to adapt my needs to fit an existing tool?
Could it possibly make sense to actually build something?

## Options

I've been building software for 25+ years now.
If I've learned one thing,
it's that however long you think a project is going to take,
double that, and you'll have a fair estimate
of how long it might take to build even a basic version.

So naturally my first thought was to find an existing tool
that would meet my needs well enough.

### Building-Block tools

For years, **Trello** was my go-to tool
anytime I needed to track multiple tasks for a project.
It's still a fine tool for any workflow
that can be broken down into simple lists of simple cards.
But the transition from "very simple" to "slightly more sophisticated"
is awkward and involves premium features.

I tried very hard to make **Notion** work.
It provides the linkability and hierarchical features
that I was missing in Trello.
It blends the database and document concepts very nicely.
Ultimately, there was just too much friction in the user experience
for me to feel like I could use the solution long-term.
The platform supports some powerful automations that might have improved the UX,
but that was getting into premium features as well.

In either case, I might have been willing to pay a little bit for a perfect fit.
But I couldn't justify a monthly expense
just to make something awkward a little less awkward.

**Takeaway:** low-level "building-block" tools can be a good option when:

- what you need to track is relatively simple or fits the tool's paradigm very well
- user experience (read: efficiency) is a lower priority
- you're willing to spend a little money and time to customize the tools

### GitHub issues

I use GitHub for my source code management, release management,
and even some continuous integration and delivery (CI/CD) workflows.
And I've used its issue-tracking feature extensively.
From a _code-focused_ perspective, GitHub issues make a lot of sense:
commits (incremental changes to the code)
contribute to pull requests (PRs, requests to merge changes into the main codebase),
which you can connect to issues.
Referenced issues are closed automatically when PRs are merged.
Releases are tied to the commits that make up the PR.
So you get really nice end-to-end traceability.

Issues are **perfect** for bug-tracking
and for tracking individual feature requests against a codebase.

But some features needed for project planning (even Agile)
just aren't part of the design:

- beyond tags, no real way to differentiate work types (stories, tasks, NFRs)
- not natively hierarchical, so no easy way to break a story into tasks, for example
- nowhere to track "extra" information
  such as rank, story points, bug criticality, etc.

That's not a shortcoming, it's a design choice.

Another challenge is that issues are repository-specific.
Planning projects that touch multiple repositories—a common scenario—
requires extra setup and doesn't really play to GitHub's strengths.

**Takeaway:** When you're already using several features of a tool,
and that tool offers an additional feature that you also need,
it always makes sense to evaluate that feature.
But if the existing tool doesn't really solve your problem,
you didn't "save" anything by using it.

### Specialized tools

At this point in the evaluation process,
it was clear that I needed, not just building blocks
and not just barebones issue management,
but some actual planning, workflow, and task management features.
Here's a rundown of some specialized tools I considered.

**ClickUp** is kind of a step up from Notion.
It feels like Notion, sort of, but it has some very flexible features
for customizing your workflow.
Ultimately, it was just a little _too_ flexible for my needs.

I considered some traditional project management tools,
including **Redmine** and **Asana**.
Naturally, Agile planning tools were on my radar,
specifically **Jira** and **Azure DevOps**, and **GitLab**.

**Redmine** is an excellent tool—I use it on a volunteer project—
and it's free and open source,
but the setup and configuration would have created an administrative burden,
and hosting and managing a Ruby on Rails application
is outside my immediate experience.

Both **Asana** and **Jira** were new tools for me.
I believe either could have met my needs.
But it was clear that both were designed to be implemented and configured
in an enterprise environment with dedicated "SDLC" or "DevOps" personnel.

I've used **Azure DevOps** in the past.
The free features are nice.
But the next level after free is far too expensive for my revenues.
And my experience tells me not to become too reliant on completely free tools,
because vendors have little incentive to keep them free
once their "loss leader" objectives have been met.

I use **GitLab** for a volunteer project as well, and really like it.
Similarly to Azure DevOps, it doesn't have a pricing model that fits my scale.
Which is unfortunate, because it could actually replace GitHub
and I really could have everything all in one place.

**Takeaway #1:** There **is** such a thing as a "missing middle"
when it comes to business software.
Small and medium-sized business often have limited options, including:

- free but restricted feature sets (freemium, nagware)
- free but require a lot of configuration and management (your time is not free)
- enterprise-level pricing tiers that can't be cost-justified
  or are just not possible based on revenues

**Takeaway #2:** Productivity—and even happiness—are real value-drivers
that should factor into software selection decisions.
If a tool's UX—awkward workflow, excessive exposed features—
creates a cognitive load, it can be hard to reach a sustainable velocity.
If I'm not going to use the software because I hate it or it makes me mad,
I haven't accomplished anything by "adopting" it.

## The decision

I'm glad I took the time and put in the work to evaluate the options carefully.
The process of actually trying to implement my workflow in these various tools
taught me some valuable lessons about what I really needed
in a work management tool.

So when I finally made the decision to build,
it wasn't just a hobby project,
it was an investment in my continued success,
which I could feel justified in committing additional time and resources to.

Like I would do with any other serious project,
I began with an MVP—a "minimal viable product"—
the smallest set of features that could realistically be called
a valuable product.

Of course, while I was in the process of building the software,
I still had all the work-tracking problems outlined at the beginning.
So I don't know exactly how long the MVP took.
It was a day here, a day there, over the course of a couple of months.

Eventually I got it to the point where I could "dogfood" it,
that is, use the work tracking system to track the remaining work
of building the work tracking system.
That led to some further refinements,
and before too much longer, I was able to use it for tracking all my client work.

## The result

One of the challenges of measuring ROI for a new system
is that the old system often doesn't provide enough information
to establish a baseline.
I don't have a number on the time I've saved
as a result of having a custom-built system that truly meets my needs.
But subjectively I'm confident that it was a good decision.

Everything is in one place.

I know what I should be working on next.

When I start working on whatever's next,
I can quickly see exactly where I left off.

I'm meeting my commitments to my clients.
And I'm able to make those commitments with greater confidence.

I finally got around to that website redesign.

I've got a long list of improvements to the work-tracking system.
I've already been able to cross off a couple of big ones.

---

If you're facing a similar decision, my advice is this:
don't skip the evaluation.
Not because you'll necessarily talk yourself out of building—I didn't—
but because the process of wrestling with existing tools
will teach you exactly what you need.
And when you finally commit,
you'll commit with confidence instead of wondering "what if I'd just used Jira."
