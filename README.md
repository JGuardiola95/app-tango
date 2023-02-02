# APP Tango Challenge

This project provides a fibonacci calculator app.

## Configuration

The project runs on port 3000. If port 3000 is already in use, NextJS will take charge on stablishing the connection on other port.

Before starting the project, make sure to install the dependencies.

If you end up changing the PORT constant on the API from port 80, you will have to change API_URL constant inside services/getFibonacciNumber

## Scripts

You can run the following scripts using npm:

- `npm run start` to build the project and start the server.
- `npm run dev` to enter dev mode, where you can watch changes on the fly.
- `npm run e2e` to open cypress and test the fibonacci calculator.

## Assumptions

The API is designed for small numbers, and performance may start to degrade for numbers greater than 40.
e2e was tested using cypress and selecting e2e testing and chrome as the browser.

## Scalability

To improve the project, the following possibilities can be considered:

- Using a validation library such as Joi to handle number input better.
- Implementing timeout middleware to handle requests that take too long.
- Adding a cache to store big Fibonacci numbers to improve performance.
- Add E2E testing using cypress or puppeteer.
