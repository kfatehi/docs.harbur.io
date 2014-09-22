:title: Jenkins

Jenkins
=======

.. image:: /_static/images/jenkinsContainer.png
    :class: img-responsive img-thumbnail

What is Jenkins
---------------

Jenkins provides continuous integration services for software development. It is a server-based system running in a servlet container such as Apache Tomcat. It supports SCM tools including AccuRev, CVS, Subversion, Git, Mercurial, Perforce, Clearcase and RTC, and can execute Apache Ant and Apache Maven based projects as well as arbitrary shell scripts and Windows batch commands. Released under the MIT License, Jenkins is free software.

How is Jenkins Prepared
-----------------------

In the Jenkins installation we include the following preconfigurations:

Email configuration
-------------------

Jenkins is preconfigured to use a dedicated email account for Jenkins notifications. This way you don't have to setup anything from your side in order to get notifications by email.

Dedicated Domain Name
---------------------

We reserve a specific domain name for your Jenkins and we configure Jenkins with that domain name. This way Jenkins can generate your email notifications with references to the public domain name.


Jenkins Theme
-------------

Jenkins is now themable and we have dressed it appropriately! The design is more modern and clean

.. image:: /_static/images/jenkins.png
    :class: img-responsive img-thumbnail


Of course if you like the original design you can simply go to **Manage Jenkins - Configure System - Theme** Section and remove the CSS and JS field values.


Jenkins Plugins
---------------

The following plugins have been preinstalled on Jenkins:

- `JQuery Plugin <https://wiki.jenkins-ci.org/display/JENKINS/jQuery+Plugin>`__ ``v1.7.2-1``
- `Simple Theme Plugin <https://wiki.jenkins-ci.org/display/JENKINS/Simple+Theme+Plugin>`__ ``v0.3``
- `Gravatar Plugin <https://wiki.jenkins-ci.org/display/JENKINS/Gravatar+plugin>`__ ``v2.1``

Jenkins Immutable Server & Data Volumes
---------------------------------------

Jenkins is installed using prepackaged `Docker <http://www.docker.com/>`__ containers. This means that container is packaged, tested and then deployed identically to production. In the deployment the container and the data are separated in such way that the container can then be stopped, swapped with a new version and you'll be able to keep your data without sweat. Also this means that the data can be handled (snapshot/restore) easily as they are separated from the application.

Jenkins Slaves
--------------

TBD

CLI Commands
------------

Start Jenkins with a Jenkins Slave:

.. sourcecode:: bash

    docker run -d -P --name jenkins quay.io/harbur/jenkins
    docker run -d --privileged --link=jenkins:master -v /var/run/docker.sock:/var/run/docker.sock spiddy/dind-jenkins-slave