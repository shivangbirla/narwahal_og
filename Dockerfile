FROM node:alpine AS builder

# Declaring env
ENV NODE_ENV production

# Setting up the work directory
WORKDIR /app

# Installing dependencies
COPY ./package.json ./app/package.json
RUN npm install

# Copying all the files in our project
COPY . /app

# Building our application
CMD ["npm", "run", "start"]