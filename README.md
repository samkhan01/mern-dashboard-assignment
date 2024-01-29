# MERN Dashboard Assignment

This project is a node.js & react.js dashboard assignment that provides functionality for filtering and displaying data in cards and charts. Follow the steps below to set up and run the project.

## Installation

Make sure to install the required modules by running the following command:

### npm i


## Running the Backend Server

To start the backend server, use the following command:

### npm run dev

The server will start running.

## Running the Frontend

After starting the backend server, initiate the frontend by executing the following command:

### npm run start

This command will load the page.

## Filtering and Data Handling

The application provides features to filter and display data in cards based on specific criteria. The filter cases are as follows:

1. **On First Load:**
   - The initial state is selected.
   - The minimum and maximum dates are determined based on the selected state.

2. **State Change:**
   - When the user changes the state, the minimum and maximum dates dynamically adjust according to the selected state.

3. **Date Selection:**
   - If the user chooses dates (either minimum or maximum), the results change accordingly, and the data is updated in both charts and cards.

4. **State Re-selection After Date Change:**
   - After changing the dates, if the user selects a state again, the minimum and maximum dates are bound based on the selected state, and the data appears accordingly.

If you encounter any issues or have questions, please refer to the documentation or contact to me.