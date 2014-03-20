
This example demostrates how Apache makes websocket proxy to Nodejs

Requirements:

- Nodejs
- Node package socket.io
- Apache 2.4.5+


Installation (Ubuntu)

1) install Nodejs

sudo apt-get update
sudo apt-get install -y python-software-properties python g++ make
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs


2) install Apache 2.4.9


Download httpd-2.4.9.tar.gz
http://httpd.apache.org/download.cgi

Download apr-1.5.0.tar.gz
Download apr-util-1.5.3.tar.gz
http://apr.apache.org/download.cgi

Download pcre-8.34.tar.gz
http://sourceforge.net/projects/pcre/files/pcre/8.34/

Install PCRE
./configure
make
sudo make install


Extract httpd-2.4.9.tar.gz to somewhere , say /home/user/httpd-2.4.9
Extract apr and apr-util to /home/user/httpd-2.4.9/srclib
It looks like:
/home/user/httpd-2.4.9/srclib/apr
/home/user/httpd-2.4.9/srclib/apr-util

go into /home/user/httpd-2.4.9
./configure --with-included-apr
make
sudo make install

go to /usr/local/apache2/lib
sudo cp /usr/local/lib/libpcre.so.1 .
sudo cp /usr/local/lib/libpcre.so .

Edit httpd.conf

ServerName ??????
LoadModule proxy_module modules/mod_proxy.so
LoadModule proxy_http_module modules/mod_proxy_http.so
LoadModule proxy_wstunnel_module modules/mod_proxy_wstunnel.so

ProxyPass /socket.io/1/websocket/ ws://127.0.0.1:8899/socket.io/1/websocket/
ProxyPass /socket.io/ http://127.0.0.1:8899/socket.io/

3) Start server.js
node server.js

4) Start Apache
/usr/local/apache2/bin/httpd -k start


