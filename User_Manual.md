#Installing the Application

###Prerequisites

+ Jekyll (And Dependencies) - [All Platforms](http://jekyllrb.com/docs/installation/)
+ Apache2 Web Server - [Ubuntu 14.04](https://help.ubuntu.com/lts/serverguide/httpd.html)

###Building

The process of building the application, within the context of this prototype, is performed on the same server that hosts it. The following set of command line instructions, assuming the prerequisites are installed correctly, will result in a successful build of the site. This build can be deployed on any standard http container; in our case we use Apache2.

	cd /tmp
	wget https://github.com/UBTUS/GSA18FRFQ/archive/master.zip
	unzip master.zip
	cd GSA18FRFQ-master/src
	jekyll build
	cd _site
	
###Deploying

The following instructions assume that you have successfully built the application and are suitably prepared to deploy it. We recommend clearing out the *html* directory or modifying this command depending on your set up.

	mv * /var/www/html #Apache2 web hosting directory
	
#Preparing a Development Environment

###Recommended Applications

This prototype was created using free and open source software. Because of the additional complexity of running Jekyll on windows and the short notice of this project, we deferred all building to the Ubuntu server hosting our continuous integration and web container. The software used by individual developers is listed below.

+ [Notepad++](https://notepad-plus-plus.org/) - Used for all code editing.
+ [JSFiddle](https://jsfiddle.net/) - Used for rapid prototyping and testing css styling.
+ [Git](https://git-scm.com/) - Used for version control and collaboration.

###Setting up Your Environment

After installing the above windows applications (and properly configuring them according to installation instructions), working with this prototype is very easy. Using the git client, navigate to your desired directory and run the following command...

	git clone https://github.com/UBTUS/GSA18FRFQ.git
	
This should be all that is required to work on the application. Pushing changes is as simple as running the `git commit` and `git push` commands as needed. All testing, building, and deploying is deferred to the Ubuntu continuous integration server for this prototype.

###Adding or Changing Content

To add or change content, you must simply modify the desired content in the src/ folder and push it to the repo.

###Adding or Changing Test Cases

To add or change a selenium test case, you must simply modify the test xml files in the tests/ folder as desired and push it to the repo.

###Setting up the Continuous Integration Environment

Setting up the continuous integration server on Ubuntu from scratch is tedious, but fairly simple. Notes for the set-up process can be found below. Additional set-up may be required within the jenkins control panels, as needed.

	apt-get update
	apt-get install openssh-server

	apt-get install apache2
	wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
	sudo sh -c 'echo deb http://dl.google.com/linux/chrome/deb/ stable main > /etc/apt/sources.list.d/google.list'

	sudo apt-get update && sudo apt-get install -y xfonts-100dpi xfonts-75dpi xfonts-scalable xfonts-cyrillic xvfb x11-apps  imagemagick firefox google-chrome-stable

	cd /tmp
	wget goo.gl/cvntq5 #latest selenium version
	mkdir /var/lib/selenium
	mv cvntq5 /var/lib/selenium/selenium-server.jar

	apt-get install unzip
	wget http://chromedriver.storage.googleapis.com/2.16/chromedriver_linux64.zip
	unzip chromedriver_linux64.zip
	mkdir /var/lib/chrome-driver/
	mv chromedriver /var/lib/chrome-driver/chromedriver

	vim /etc/init.d/xvfb

	#PASTE IN THE FOLLOWING

	#!/bin/bash
	if [ -z "$1" ]; then
	  echo "`basename $0` {start|stop}"
	  exit
	fi

	case "$1" in
	start)
	  /usr/bin/Xvfb :99 -ac -screen 0 1024x768x8 &
	;;
	stop)
	  killall Xvfb
	;;
	esac

	#END PASTE BLOCK

	sudo update-rc.d xvfb defaults
	chmod 775 /etc/init.d/xvfb

	sudo /etc/init.d/xvfb start
	#PRESS ENTER

	export DISPLAY=:99

	apt-get install git

	wget -q -O - https://jenkins-ci.org/debian/jenkins-ci.org.key | sudo apt-key add -
	sudo sh -c 'echo deb http://pkg.jenkins-ci.org/debian binary/ > /etc/apt/sources.list.d/jenkins.list'
	sudo apt-get update
	sudo apt-get install jenkins

	#DO THIS IN BROWSER serverip:8080
	Manage Jenkins
	Setup Security

	Enable Security, Jenkins' own user database, uncheck allow users to sign up, Logged-in users can do anything, prevent cross site request forgery exploits, default crumb issuer - Leave all other options default and save

	Fill in user fields - sign up

	Manage Jenkins

	Manage Plugins

	Check all boxes and click "download now and install after restart"

	Manage Plugins
	Available
	Check Git Plugin, Seleniumhq plugin
	Download now and install after restart

	#Command line
	service jenkins restart

	#Browser
	Jenkins
	Log In
	Create New Jobs
	Freestyle project, any name

	under SCM, select git
	Enter URL and add credentials

	under Build Triggers, select Poll SCM
	Under schedule, enter * * * * *

	Add Build Step -> Execute Shell

	#PASTE IN THE FOLLOWING

	cd /var/www/html
	rm -rf *
	mv "$WORKSPACE"/* .

	#END PASTE SECTION

	#COMMAND LINE
	groupadd www
	usermod -a -G www jenkins
	chown -R root:www /var/www/html
	chmod -R 775 /var/www/html
	rm /var/www/html/index.html
	service jenkins restart

	#Browser
	Apply
	Build Now

	#Command Line
	apt-get purge firefox
	apt-get install firefox=28.0+build2-0ubuntu2
	apt-mark hold firefox

	cd /tmp
	java -jar /var/lib/selenium/selenium-server.jar -htmlSuite *firefox http://localhost "/var/www/html/tests/TestSuite.html" "/var/www/html/firefox-results.html"

	java -jar -Dwebdriver.chrome.driver=/var/lib/chrome-driver/chromedriver /var/lib/selenium/selenium-server.jar -htmlSuite *googlechrome http://localhost "/var/www/html/tests/TestSuite.html" "/var/www/html/chrome-results.html"

	#BROWSER
	Jenkins
	Manage Jenkins
	Configure System
	Global Properties
	Environment Variables
	Add
	Name : DISPLAY Value : :99

	Selenium Remote Control
	/var/lib/selenium/selenium-server.jar


	Jenkins
	Configure Build
	Add Build Step
	SeleniumHQ HtmlSuite x 2

	#First Suite
	*firefox
	http://localhost
	/var/www/html/tests/TestSuite.html
	tests/firefox-results.html
	<blank>

	#Second Suite
	*googlechrome
	http://localhost
	/var/www/html/tests/TestSuite.html
	tests/chrome-results.html
	-Dwebdriver.chrome.driver=/var/lib/chrome-driver/chromedriver

	Add Post Build
	Publish Selenium Report
	
	#Command line, Jekyll
	apt-get install ruby-full
	apt-get install nodejs
	gem install jekyll

	#Command Line, HTML-Proofer
	apt-get install zlib1g-dev
	gem install html-proofer​
	
Please note that the only significantly abnormal part of this process is the headless selenium environment. Leaving this out omits the post deployment testing, but results in a significantly easier setup.