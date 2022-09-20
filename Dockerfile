#Specify a base image , alpine is a term for an image that is small and compact
FROM node:alpine 

#Install some dependencies
COPY ./ ./
RUN npm install


#Default command
CMD [ "npm" , "start" ]