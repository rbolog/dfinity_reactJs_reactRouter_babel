FROM gitpod/workspace-full:latest

USER root
RUN apt-get update 
RUN apt-get install -y rsync
RUN apt-get clean && rm -rf /var/cache/apt/* && rm -rf /var/lib/apt/lists/* && rm -rf /tmp/*

USER gitpod
RUN sh -c "$(curl -fsSL https://smartcontracts.org/install.sh)"
RUN echo "export PATH=\"\$PATH:/home/gitpod/bin\"" >> /home/gitpod/.bashrc