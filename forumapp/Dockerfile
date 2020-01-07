# Use a lighter version of Node as a parent image
FROM node:10

# Set the working directory to /forumapp
WORKDIR /forumapp

# copy package.json into the container at /forumapp
COPY package*.json /forumapp/

# install dependencies
RUN npm install

# Copy the current directory contents into the container at /forumapp
COPY . /forumapp/

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app when the container launches
CMD ["npm", "start"]