#!/bin/bash

# Change selinux policy so apache can't connect to backend | can't login to app
setsebool -P httpd_can_network_connect off
history -c