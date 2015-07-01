## Play 12
### Use data to drive decisions



At every stage of a project, we should measure how well our service is working for our users. This includes measuring how well a system performs and how people are interacting with it in real-time. Our teams and agency leadership should carefully watch these metrics to find issues and identify which bug fixes and improvements should be prioritized. Along with monitoring tools, a feedback mechanism should be in place for people to report issues directly.

#### checklist
- [ ] Monitor system-level resource utilization in real time

* Using AWS Cloud watch for resource utilization monitoring. [AWS monitoring] (https://github.com/UBTUS/GSA18FRFQ/blob/master/docs/Misc/aws_cloudwatch_monitoring.png)

- [ ] Monitor system performance in real-time (e.g. response time, latency, throughput, and error rates)

* Using AWS Cloud watch for resource utilization monitoring. [AWS monitoring] (https://github.com/UBTUS/GSA18FRFQ/blob/master/docs/Misc/aws_cloudwatch_monitoring.png)

- [ ] Ensure monitoring can measure median, 95th percentile, and 98th percentile performance

*  AWS monitoring provides all features. [AWS monitoring] (https://github.com/UBTUS/GSA18FRFQ/blob/master/docs/Misc/aws_cloudwatch_monitoring.png)

- [ ] Create automated alerts based on this monitoring

* [Alerts] (https://github.com/UBTUS/GSA18FRFQ/blob/master/docs/Misc/AWS_cloudwatch_alarm.png)

- [ ] Track concurrent users in real-time, and monitor user behaviors in the aggregate to determine how well the service meets user needs

* Not applicable for this website.

- [ ] Publish metrics internally

* Using google analytics. [usfoodrecall Metrics] (https://github.com/UBTUS/GSA18FRFQ/blob/master/docs/Misc/usfoodrecall_analytics_detailed.png)

- [ ] Publish metrics externally

* Currently not published externally.

- [ ] Use an experimentation tool that supports multivariate testing in production

* Not applicable for this prototype.

#### key questions
- What are the key metrics for the service?

*A*. Search Keywords.

- How have these metrics performed over the life of the service?

*A*. This prototype life is based on providing acurate results to user requests. We are completely dependent on quality of OpenFda datasets content.

- Which system monitoring tools are in place?

*A*. AWS Cloud Watch. [Monitoring alerts]  (https://github.com/UBTUS/GSA18FRFQ/blob/master/docs/Misc/aws_cloudwatch_monitoring.png)

- What is the targeted average response time for your service? What percent of requests take more than 1 second, 2 seconds, 4 seconds, and 8 seconds?

*A*. Depends on openfda service response. Most of time response time is less than 2 seconds.

- What is the average response time and percentile breakdown (percent of requests taking more than 1s, 2s, 4s, and 8s) for the top 10 transactions?

*A*. All prototype transactions are less than 2 seconds.

- What is the volume of each of your service’s top 10 transactions? What is the percentage of transactions started vs. completed?

*A*. Not applicable for this prototype.

- What is your service’s monthly uptime target?

*A*. 99% uptime.

- What is your service’s monthly uptime percentage, including scheduled maintenance? Excluding scheduled maintenance?

*A*. 99% uptime.

- How does your team receive automated alerts when incidents occur?

*A*. System monitoring alerts from AWS cloudwatch and also build alerts from jenkins. [Build Alerts] (https://github.com/UBTUS/GSA18FRFQ/blob/master/docs/Build%20Screenshots/BuildNormalNotification.png)

- How does your team respond to incidents? What is your post-mortem process?

*A*. Through feedback for this prototype application.

- Which tools are in place to measure user behavior?

*A*. Feedback data and search data metrics.

- What tools or technologies are used for A/B testing?

*A*. Split testing is not applicable for this application.

- How do you measure customer satisfaction?

*A*. Through feedback , web traffic and search metrics.