#Installing the Application

###Prerequisites

+ Jekyll (And Dependencies) - [All Platforms](http://jekyllrb.com/docs/installation/)
+ Apache2 Web Server - [Ubuntu 14.04](https://help.ubuntu.com/lts/serverguide/httpd.html)
+ Docker - [Docker](https://www.docker.com/)

###Building

The process of building the application, within the context of this prototype, is performed on the same server that hosts it. The following set of command line instructions, assuming the prerequisites are installed correctly, will result in a successful build of the site. This build can be deployed on any standard http container; in our case we use Apache2.

	cd /tmp
	wget https://github.com/UBTUS/GSA18FRFQ/archive/master.zip
	unzip master.zip
	cd GSA18FRFQ-master/src
	jekyll build
	cd _site
	
###Deploying

Our installation makes use of the Apache web server; hosting the prototype on a default Apache web server installation can be achieved by running the following command. (Note that you may have to clear out the html directory beforehand)

	mv * /var/www/html #Apache2 web hosting directory
	
Optionally, you may make use of docker to implement operating system level virtualization. Docker can be configured to work with the Apache web server by using the following commands.

	git clone https://github.com/bitnami/bitnami-docker-apache.git
	cd bitnami-docker-apache
	docker build -t bitnami/apache .
	
Once you've set up Docker to work with the Apache web server, launching the prototype through docker can be done by using the following commands. 

	mkdir /app
	docker run -d --name <instance name> -v /var/www/html:/app -P -p 80:80 -p 443:443 bitnami/apache
	
#Preparing a Development Environment

###Recommended Applications

This prototype was created using free and open source software. Because of the additional complexity of running Jekyll on windows and the short notice of this project, we deferred all building to the Ubuntu server hosting our continuous integration and web container. The software used by individual developers is listed below.

+ [Notepad++](https://notepad-plus-plus.org/) - Used for all code editing.
+ [JSFiddle](https://jsfiddle.net/) - Used for rapid prototyping and testing css styling.
+ [Git](https://git-scm.com/) - Used for version control and collaboration.

###Setting up Your Environment

After installing the above windows applications (and properly configuring them according to the installation instructions found in the above links), working with this prototype is very easy. Using the git client, navigate to your desired directory and run the following command...

	git clone https://github.com/UBTUS/GSA18FRFQ.git
	
This should be all that is required to work on the application. Pushing changes is as simple as running the `git commit` and `git push` commands as needed. All testing, building, and deploying is deferred to the Ubuntu continuous integration server for this prototype.

###Adding or Changing Content

To add or change content, you must simply modify the desired content in the src/ folder and push it to the repo.

###Adding or Changing Test Cases

To add or change a selenium test case, you must simply modify the test xml files in the tests/ folder as desired and push it to the repo.

###Setting up the Continuous Integration Environment

Setting up a mirror of our continuous integration server is very easy if you have an existing installation of [Fabric](http://www.fabfile.org/). If you do not have Fabric installed, the following commands work for ubuntu.

	apt-get install fabric

Simply download our fabfile, cd to the directory you placed it in, and run the following commands.

	fab install_all
	
You will be prompted for a host name and user account on which to install our stack. After installation is complete, you will need to set up jenkins for your specific domain. We supply a sample configuration document in this repository.
