# ****************************
# **      Build stage       **
# ****************************
FROM node:18.16.0-bookworm AS build-stage

# Working directory
WORKDIR /app

# Install NodeJS packages
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Add project files
COPY . .

# Set Node environment variable to production
ENV NODE_ENV=production

# Validate that .env.production exists
RUN test -f .env.production || (echo '.env.production file missing!' && exit 1)

# Source environment variables and build
RUN export $(egrep -v '^#' .env.production | xargs) && yarn build

# ****************************
# **    Production stage    **
# ****************************
FROM node:18.16.0-bookworm

# Base packages
RUN apt-get update -qq && apt-get install -y vim less

# Convenient alias
RUN echo "alias ll='ls -lah --color'" >> /root/.bashrc

# Working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install only production dependencies
RUN yarn install --frozen-lockfile --production

# Copy built files from builder stage
COPY --from=build-stage /app/.next ./.next
COPY --from=build-stage /app/public ./public
# Needed for images
COPY --from=build-stage /app/content ./content

# Start the application
EXPOSE 80
CMD ["yarn", "start", "-p", "80"]
