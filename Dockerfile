FROM jenkins/jenkins:lts

USER root

# Cài đặt Docker CLI trong container
RUN apt-get update && apt-get install -y docker.io

USER jenkins
