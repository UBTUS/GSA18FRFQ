from __future__ import with_statement
from fabric.api import *
from fabric.utils import warn

def apt_update():
	sudo('apt-get update')

def apt_get(*packages):
	sudo('apt-get -y --no-upgrade install %s' % ' '.join(packages), shell=False)
	
def wget(url):
	sudo("wget '{}'".format(url))
	
def mv(src, dst):
	sudo("mv '{}' '{}'".format(src, dst))
	
def cd(dst):
	sudo("cd '{}'".format(dst))
	
def install_all():
	apt_update()
	apt_get("apache2")
	cd("/tmp")
	sudo("wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -")
	sudo("sudo sh -c 'echo deb http://dl.google.com/linux/chrome/deb/ stable main > /etc/apt/sources.list.d/google.list'")
	apt_update()
	apt_get("xfonts-100dpi", "xfonts-75dpi", "xfonts-scalable", "xfonts-cyrillic", "xvfb", "x11-apps", "imagemagick", "firefox", "unzip", "git")
	wget("goo.gl/cvntq5")
	sudo("mkdir /var/lib/selenium")
	mv("cvntq5", "/var/lib/selenium/selenium-server.jar")
	wget("http://chromedriver.storage.googleapis.com/2.16/chromedriver_linux64.zip")
	sudo("unzip chromedriver_linux64.zip")
	sudo("mkdir /var/lib/chrome-driver")
	mv("chromedriver", "/var/lib/chrome-driver/chromedriver")
	sudo('echo \'#!/bin/bash\' >> /etc/init.d/xvfb')
	sudo('echo \'if [ -z "$1" ]; then\' >> /etc/init.d/xvfb')
	sudo('echo \'  echo "`basename $0` {start|stop}"\' >> /etc/init.d/xvfb')
	sudo('echo \'  exit\' >> /etc/init.d/xvfb')
	sudo('echo \'fi\' >> /etc/init.d/xvfb')
	sudo('echo \'case "$1" in\' >> /etc/init.d/xvfb')
	sudo('echo \'start)\' >> /etc/init.d/xvfb')
	sudo('echo \'  /usr/bin/Xvfb :99 -ac -screen 0 1024x768x8 &\' >> /etc/init.d/xvfb')
	sudo('echo \';;\' >> /etc/init.d/xvfb')
	sudo('echo \'stop)\' >> /etc/init.d/xvfb')
	sudo('echo \'  killall Xvfb\' >> /etc/init.d/xvfb')
	sudo('echo \';;\' >> /etc/init.d/xvfb')
	sudo('echo \'esac\' >> /etc/init.d/xvfb')
	sudo('update-rc.d xvfb defaults')
	sudo('chmod 775 /etc/init.d/xvfb')
	sudo('sudo /etc/init.d/xvfb start')
	sudo('export DISPLAY=:99')
	sudo("wget -q -O - https://jenkins-ci.org/debian/jenkins-ci.org.key | sudo apt-key add -")
	sudo("sudo sh -c 'echo deb http://pkg.jenkins-ci.org/debian binary/ > /etc/apt/sources.list.d/jenkins.list'")
	apt_update()
	apt_get("jenkins")
	sudo("groupadd www")
	sudo("usermod -a -G www jenkins")
	sudo("chown -R root:www /var/www/html")
	sudo("chmod -R 775 /var/www/html")
	sudo("rm /var/www/html/index.html")
	sudo("service jenkins restart")
	sudo("apt-get -y purge firefox")
	sudo("apt-get -y install firefox=28.0+build2-0ubuntu2")
	sudo("apt-mark hold firefox")
	apt_get("ruby-full", "nodejs")
	sudo("gem install jekyll")
	apt_get("zlib1g-dev")
	sudo("gem install html-proofer")
	sudo('echo installing docker')
    sudo("wget -qO- https://get.docker.com/ | sh")
	
def hello():
	print("Hello world!")