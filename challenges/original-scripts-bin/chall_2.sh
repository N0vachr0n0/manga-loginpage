#!/bin/bash

# Remove .htaccess to have "Page Not Found" when reloading the page
rm -f /var/www/manga/.htaccess
history -c