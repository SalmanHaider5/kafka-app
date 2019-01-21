## Download Server JRE
http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html

## Download Zookeeper and extract
http://zookeeper.apache.org/releases.html

- Goto conf folder and rename "zoo_sample.cfg" to "zoo.cfg"
- Open this file in any editor
- Find and replace "dataDir=/tmp/zookeeper" to "dataDir=\zookeeper-3.4.12\data" (according to your version)
- Add System Variable ZOOKEEPER_HOME=C://zookeeper-3.4.12
- Edit the system variable named "Path" and add ";%ZOOKEEPER_HOME%\bin;"
- Go to bin folder and open cmd here
- Run "zkServer.cmd"
 (Zookeeper instance will be created and started)

## Download Kafka and extract
https://kafka.apache.org/downloads


- Goto config folder and edit the file "server.properties"
- Find and edit the line "log.dirs=/tmp/kafka-logs" to "log.dir= C:\kafka_2.11-2.1.0\kafka-logs" (according to your path)
- Go to your main directory of Kafka and open cmd here
- Run ".\bin\windows\kafka-server-start.bat .\config\server.properties"
- Kafka Server will be started

## Create Database

- Create MySQL Database "kafka-app"

## Running App

- npm install --global babel-cli
- npm install (To install all dependencies)
- npm start
(App will be running on port 3000)

## URLs
- GET - / -->(If you are running it first time, this will create database tables)
- POST - /data --> (to Post Data on Darabase and Kafka Server)
- GET - /data --> (to retrieve data from server)