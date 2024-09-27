# Base image
FROM node:16-alpine

# Create app directory
WORKDIR /job_finding

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install 

RUN npm i -g @nestjs/cli@10.0.3

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

# Start the server using the production build
CMD [ "node", "dist/main.js" ]