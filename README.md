# HubRise Website

## Initial Setup

1. **Copy Environment File**:  
   Run `cp .env.example .env` in your terminal.

2. **Install Dependencies**:  
   Execute `yarn install`.  
   *Note: Make sure Node.js and Yarn are installed on your system.*

## Running the Server

- **Development Mode**:  
  Run `yarn dev`. The server will start at `http://localhost:3000`.

## Run the Test Suites

- **End-to-End Tests**:  
  Run `yarn cypress:run`. This will execute end-to-end tests to simulate user behavior on the website.

- **Unit Tests**:  
  Run `yarn test`. This focuses on individual components.

---

### Notes for Technical Writers

To run the server and tests, you need to have Node.js and Yarn installed on your system. If you don't have them installed, follow the instructions below.

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

This server uses two types of test suites. The `yarn cypress:run` command runs end-to-end tests, useful for verifying the entire workflow of the application. On the other hand, `yarn test` runs unit and integration tests that focus on specific parts or interactions in the application.