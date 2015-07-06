ubuntu@ip-172-31-36-219:~/bitnami-docker-apache$ docker ps
CONTAINER ID        IMAGE               COMMAND                CREATED             STATUS              PORTS                                      NAMES
3b39367732ab        bitnami/apache      "/entrypoint.sh http   14 minutes ago      Up 14 minutes       0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp   usfoodrecall
ubuntu@ip-172-31-36-219:~/bitnami-docker-apache$ ps -eaf | grep -i apache
root     10801  4879  0 15:57 ?        00:00:00 /opt/bitnami/apache2/bin/httpd.bin -DFOREGROUND -f /opt/bitnami/apache2/conf/httpd.conf
daemon   10818 10801  0 15:57 ?        00:00:00 /opt/bitnami/apache2/bin/httpd.bin -DFOREGROUND -f /opt/bitnami/apache2/conf/httpd.conf
daemon   10819 10801  0 15:57 ?        00:00:00 /opt/bitnami/apache2/bin/httpd.bin -DFOREGROUND -f /opt/bitnami/apache2/conf/httpd.conf
daemon   10820 10801  0 15:57 ?        00:00:00 /opt/bitnami/apache2/bin/httpd.bin -DFOREGROUND -f /opt/bitnami/apache2/conf/httpd.conf
daemon   10908 10801  0 15:57 ?        00:00:00 /opt/bitnami/apache2/bin/httpd.bin -DFOREGROUND -f /opt/bitnami/apache2/conf/httpd.conf
 