# ****************************
# **      Build stage       **
# ****************************
FROM node:12.18.3-stretch AS build-stage

# Working directory
WORKDIR /website

# Install NodeJS packages
COPY package.json yarn.lock ./
RUN yarn install

# Add project files
COPY . .

# Build project
RUN ./node_modules/.bin/gatsby build

# ****************************
# **      Deploy stage      **
# ****************************
FROM nginx:1.19.1

# Base packages
RUN apt-get update -qq && apt-get install -y vim less

# Convenient alias
RUN echo "alias ll='ls -lah --color'" >> /root/.bashrc

# Working directory
WORKDIR /usr/share/nginx/html

# Copy project files
COPY --from=build-stage /website/public .

# Copy nginx configuration
COPY config/nginx/nginx.conf /etc/nginx/nginx.conf

# Container startup
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
