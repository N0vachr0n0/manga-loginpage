#!/bin/bash

# Close Apache port | Website inaccessible
firewall-cmd --remove-port=80/tcp --permanent
firewall-cmd --reload
history -c