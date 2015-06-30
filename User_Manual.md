#Installing the Application

###Prerequisites

+ Jekyll (And Dependencies) - [All Platforms](http://jekyllrb.com/docs/installation/)
+ Apache2 Web Server - [Ubuntu 14.04](https://help.ubuntu.com/lts/serverguide/httpd.html)

###Building

	cd /tmp
	wget https://github.com/UBTUS/GSA18FRFQ/archive/master.zip
	unzip master.zip
	cd GSA18FRFQ-master/src
	jekyll build
	cd _site
	
###Deploying

	mv * /var/www/html #Apache2 web hosting directory