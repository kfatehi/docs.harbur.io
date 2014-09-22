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

The following plugins have been preinstalled on Jenkins. You can find the documentation of each one on the links below:

- `Static Code Analysis <https://wiki.jenkins-ci.org/display/JENKINS/Static+Code+Analysis+Plug-ins>`__
- `DRY Plugin <https://wiki.jenkins-ci.org/display/JENKINS/DRY+Plugin>`__
- `PMD Plugin <https://wiki.jenkins-ci.org/display/JENKINS/PMD+Plugin>`__
- `FindBugs Plugin <https://wiki.jenkins-ci.org/display/JENKINS/FindBugs+Plugin>`__
- `Checkstyle Plugin <https://wiki.jenkins-ci.org/display/JENKINS/Checkstyle+Plugin>`__
- `M2 Release Plugin <https://wiki.jenkins-ci.org/display/JENKINS/M2+Release+Plugin>`__
- `Redmine Plugin <https://wiki.jenkins-ci.org/display/JENKINS/Redmine+Plugin>`__
- `Git Plugin <https://wiki.jenkins-ci.org/display/JENKINS/Git+Plugin>`__
- `Claim Plugin <https://wiki.jenkins-ci.org/display/JENKINS/Claim+plugin>`__
- `The Continuous Integration Game Plugin <https://wiki.jenkins-ci.org/display/JENKINS/The+Continuous+Integration+Game+plugin>`__
- `Sonar Plugin <https://wiki.jenkins-ci.org/display/JENKINS/Sonar+plugin>`__
- `Delivery Pipeline Plugin <https://wiki.jenkins-ci.org/display/JENKINS/Delivery+Pipeline+Plugin>`__
- `AnsiColor Plugin <https://wiki.jenkins-ci.org/display/JENKINS/AnsiColor+Plugin>`__
- `BitBucket Plugin <https://wiki.jenkins-ci.org/display/JENKINS/BitBucket+Plugin>`__
- `Swarm Plugin <https://wiki.jenkins-ci.org/display/JENKINS/Swarm+Plugin>`__
- `Simple Theme Plugin <https://wiki.jenkins-ci.org/display/JENKINS/Simple+Theme+Plugin>`__

Jenkins Immutable Server & Data Volumes
---------------------------------------

Jenkins is installed using prepackaged `Docker <http://www.docker.com/>`__ containers. This means that container is packaged, tested and then deployed identically to production. In the deployment the container and the data are separated in such way that the container can then be stopped, swapped with a new version and you'll be able to keep your data without sweat. Also this means that the data can be handled (snapshot/restore) easily as they are separated from the application.

Jenkins Slaves
--------------

In order to keep Jenkins master as clean as possible it is recommended that all build executions are done on slave machines. There is a prepared container that can snap to the master during start-up and serve as Jenkins Docker-aware slave instance without any master preparation. To achieve this, swarm plugin is used. This makes the possibility to dynamically register slave machines.

To start Jenkins docker-aware slave execute the following (replace ``<master_container_instance_name>`` with actual value)

.. sourcecode:: bash

    docker run -d --privileged --link=<master_container_instance_name>:master -v /var/run/docker.sock:/var/run/docker.sock spiddy/dind-jenkins-slave
