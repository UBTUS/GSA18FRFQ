## Play 10
### Automate testing and deployments



Today, developers write automated scripts that can verify thousands of scenarios in minutes and then deploy updated code into production environments multiple times a day. They use automated performance tests which simulate surges in traffic to identify performance bottlenecks. While manual tests and quality assurance are still necessary, automated tests provide consistent and reliable protection against unintentional regressions, and make it possible for developers to confidently release frequent updates to the service.

#### checklist
- [ ] Create automated tests that verify all user-facing functionality

* Used Selinium and HTMLProofer test frameworks. [Test cases] (https://github.com/UBTUS/GSA18FRFQ/tree/master/tests)
- [ ] Create unit and integration tests to verify modules and components

* [Test Cases] (https://github.com/UBTUS/GSA18FRFQ/tree/master/tests) 
- [ ] Run tests automatically as part of the build process

* Tests are automatically run with Jenkins build configuration. [Test Automatic execution] (https://github.com/UBTUS/GSA18FRFQ/tree/master/docs/Build%20Screenshots)
- [ ] Perform deployments automatically with deployment scripts, continuous delivery services, or similar techniques

* [Automatic Deployment] (https://github.com/UBTUS/GSA18FRFQ/tree/master/docs/Build%20Screenshots)
- [ ] Conduct load and performance tests at regular intervals, including before public launch

* [Test Cases] (https://github.com/UBTUS/GSA18FRFQ/tree/master/tests) 

#### key questions
- What percentage of the code base is covered by automated tests?

*A*. 95%
- How long does it take to build, test, and deploy a typical bug fix?

*A*. Between 5 and 10 minutes for automated build , test and deploy. Bug fix effort is depends on number of files changed.

- How long does it take to build, test, and deploy a new feature into production?

*A*. Depends on feature functionality. Automated Build ,test and deployment takes less than 5 minutes.
- How frequently are builds created?

*A*. Every commit automatic builds are triggered.

- What test tools are used?

*A*. Selinium and HtmlProofer. [Test Cases] (https://github.com/UBTUS/GSA18FRFQ/tree/master/tests) 

- Which deployment automation or continuous integration tools are used?

*A*. [Jenkins] (https://github.com/UBTUS/GSA18FRFQ/tree/master/docs/Build%20Screenshots)

- What is the estimated maximum number of concurrent users who will want to use the system?

*A*. Nothing firm yet. We are using google analytics to monitor traffic, we should be able to estimate traffic from this data.

- How many simultaneous users could the system handle, according to the most recent capacity test?

*A*. Did load testing with 100 simultanious user requests.

- How does the service perform when you exceed the expected target usage volume? Does it degrade gracefully or catastrophically?

*A*. We monitor site response times. So we take necessary action before it slows down.

- What is your scaling strategy when demand increases suddenly?

*A*. AWS hosting have flexibility to increase resources as required.
