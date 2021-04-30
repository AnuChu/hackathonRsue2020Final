FROM node:14.3
ARG PACKAGE_DIR="/frontend"
WORKDIR $PACKAGE_DIR
CMD [ "bash" ]