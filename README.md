# Prerequisite 
  > Java - 1.8.0 need tobe installed and Path need to be configured
  > Maven - apache-maven-3.5-2.4 need to be installed and Path need to be configured
  
  > In case need to import project to eclipse:
      > Install Eclipse
      > Install Eclipse Maven Plugin
      > Install Eclipse TestNG Plugin
      > Install eclipse cucumber plug-in



# Execution Guide

Execute from Command Prompt:

  > Download or clone this folder to local drive

  > Open Command Prompt. Goto base folder and run maven command - mvn clkean install
    Ex: C:\MyRepo-master\bdd-sel-mvn>mvn clean install

  > This will download all dependancies first, then execute the test cases.

  > After completion of test, please open the reports under:
    target\advanced-reports\featurereport.html

Execute from Eclipse:

  > Import project as a Maven Project
  
  > Right click on POM.XML -> Run as -> Maven Clean
    Right click on POM.XML -> Run as -> Maven Install
  
  > After completion of test, please open the reports under:
    target\advanced-reports\featurereport.html
