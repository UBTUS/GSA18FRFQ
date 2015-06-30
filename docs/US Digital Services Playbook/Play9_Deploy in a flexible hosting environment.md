## Play 9
### Deploy in a flexible hosting environment



Our services should be deployed on flexible infrastructure, where resources can be provisioned in real-time to meet spikes traffic and user demand. Our digital services are crippled when we host them in data centers that market themselves as “cloud hosting” but require us to manage and maintain hardware directly. This outdated practice wastes time, weakens our disaster recovery plans, and results in significantly higher costs.

#### checklist
- [ ] Resources are provisioned on demand

* Yes. Hosted on AWS Cloud. AWS allows to provision resources on demand.
- [ ] Resources scale based on real-time user demand

* Yes. Scalable.
- [ ] Resources are provisioned through an API

* Yes. Simple AWS interface.

- [ ] Resources are available in multiple regions

* Yes. Have options to choose regions.

- [ ] We only pay for resources we use

* Yes. 

- [ ] Static assets are served through a content delivery network

* Yes

- [ ] Application is hosted on commodity hardware

* Yes

#### key questions
-Where is your service hosted?

*A*. Amazon Elastic Compute Cloud

-What hardware does your service use to run?

*A*. 

* Model	: t2.micro

*vCPU	:1

*CPU Credits / hour : 6

*Mem (GiB)	 : 1

-What is the demand or usage pattern for your service?

*A*. Normal traffic,till we do advertise campaign.

-What happens to your service when it experiences a surge in traffic or load?

*A*. Automatically scallable

-How much capacity is available in your hosting environment?

*A*. Scalable environment. Can adjust resources as required.

-How long does it take you to provision a new resource, like an application server?

*A*. Few Minutes.

-How have you designed your service to scale based on demand?

*A*. Yes. Amazon Elastic Compute Cloud

-How are you paying for your hosting infrastructure (e.g., by the minute, hourly, daily, monthly, fixed)?

*A*. Hourly. Flexible to change plans as required.

-Is your service hosted in multiple regions, availability zones, or data centers?

*A*. Yes. Multiple regions.

-In the event of a catastrophic disaster to a datacenter, how long will it take to have the service operational?

*A*. Not applicable for this prototype.

-What would be the impact of a prolonged downtime window?

*A*. No business criticality. its informational site.

-What data redundancy do you have built into the system, and what would be the impact of a catastrophic data loss?

*A*. No data loss. Uses FDA datasets.

-How often do you need to contact a person from your hosting provider to get resources or to fix an issue?

*A*. No support required from hosting provider. Mostly automated. We manage ourselves with our devops engineering skills.