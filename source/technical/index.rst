:title: Technical FAQ


Technical FAQ
=============


What is a ship?
---------------

Harbur calls its virtual servers, ships; each ship that you spin up is a new virtual server for your personal use. On each ship you can deploy unlimited number of Apps.

What is an app?
---------------

An app is a docker container or cluster of containers that provides a specific application.

How do I board inside a ship?
-----------------------------

To board inside a ship (SSH to the server), go to the panel and click on the Terminal, it will prompt you the SSH command to board the ship. Note that you need to have installed the SSH private key in your machine in order to be able to login.

The command will look like this (replace **<ship_ip_address>** with actual value)

.. sourcecode:: bash

    ssh core@<ship_ip_address>

How to enter inside an App's container?
---------------------------------------

Once you board the ship, if you want to enter inside the container of an App, you can do it with **nsenter**. nsenter is already pre-installed, execute the following command to enter inside the container (replace **<container_name_or_id>** with actual value)

.. sourcecode:: bash

    sudo nsenter --target $(docker inspect --format {{.State.Pid}} <container_name_or_id>) --mount --uts --ipc --net --pid

*WARNING*: When you enter inside an App's container, you break the seal of the container. Either you should really know what you're doing or you're advised not enter. Any changes that are done directly on the container are not portable/upgradable/scalable. Installing/configuring things directly on the container is not persistent in time. Entering inside the container should be used for forensic analysis only.