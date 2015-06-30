## Play 4
### Build the service using agile and iterative practices



We should use an incremental, fast-paced style of software development to reduce the risk of failure. We want to get working software into users’ hands as early as possible to give the design and development team opportunities to adjust based on user feedback about the service. A critical capability is being able to automatically test and deploy the service so that new features can be added often and be put into production easily.

#### checklist
- [ ] Ship a functioning “minimum viable product” (MVP) that solves a core user need as soon as possible, no longer than three months from the beginning of the project, using a “beta” or “test” period if needed
* We developed first MVP in 5 days sprint with efficient efforts of multi functional agile team.

- [ ] Run usability tests frequently to see how well the service works and identify improvements that should be made
* We automated tests for most of our features. Both Pre and prost production tests are automated and run with every build.

- [ ] Ensure the individuals building the service communicate closely using techniques such as launch meetings, war rooms, daily standups, and team chat tools
* We followed agile methodology. We have daily scrum meeting to update each other in team in scrum master presense on accomplished and road block items if any.
[Daily Scrum] (https://github.com/UBTUS/GSA18FRFQ/tree/master/docs/Agile%20Meeting%20Notes/2.%20Daily%20Scrum)

- [ ] Keep delivery teams small and focused; limit organizational layers that separate these teams from the business owners
* We formed 6 member multi functional team for this project. We have only product owner,scrum master and team. 

- [ ] Release features and improvements multiple times each month
* We implemented and releasd product backlog items (features) in two short sprints for this project.

- [ ] Create a prioritized list of features and bugs, also known as the “feature backlog” and “bug backlog”
* We have feature backlog prioritized by Product Owner and estimated by team. 
[Product Backlog](https://github.com/UBTUS/GSA18FRFQ/tree/master/docs/Agile%20Artifacts/Product%20Backlog)
[Sprint Backlog](https://github.com/UBTUS/GSA18FRFQ/tree/master/docs/Agile%20Artifacts/Sprint%20Backlog)

- [ ] Use a source code version control system
* We used opensource github as source code version control system.
[UBTUS VCS] (https://github.com/UBTUS)

- [ ] Give the entire project team access to the issue tracker and version control system
* Granted access to entire team.

- [ ] Use code reviews to ensure quality
* Performed peer code reviews.

#### key questions
- How long did it take to ship the MVP? If it hasn't shipped yet, when will it?

*A*. 5 days.

- How long does it take for a production deployment?

*A*. We setup Continuous Integration server setup. So Production deployment is done with few clicks in minutes.
Build involves code pull , running automated tests , deployment and post production tests.

- How many days or weeks are in each iteration/sprint?

*A*. 5 days sprint.

- Which version control system is being used?

*A*. GitHub

- How are bugs tracked and tickets issued? What tool is used?

*A*. Github issue tracker and Phabricator

- How is the feature backlog managed? What tool is used?

*A*. Phabricator project management tool and used openoffice excel.

- How often do you review and reprioritize the feature and bug backlog?

*A*. Change is welcome anytime from product owner. Usually we do prioritization for each sprint, but
in case of emergency situations we will adjust features in accordance to user needs in middle of sprint , its very rare situation.

- How do you collect user feedback during development? How is that feedback used to improve the service?

*A*. We collect feedback directly from site. Each feedback is used to add new features and improve prototype usability.
Technical users can also use github to open issues.

- At each stage of usability testing, which gaps were identified in addressing user needs?

*A*. Usability testing is done at every stage with our dedicated tester. Search content display is modified many times to 
fit into user needs.