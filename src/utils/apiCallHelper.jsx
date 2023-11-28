import axios from 'axios';

// Define a generic type for the response data
const ApiResponse = {
    data: null,
    status: 0,
    statusText: '',
};

// Define a generic type for the API call function
const ApiCallFunction = (config) => {
    return axios(config)
        .then((response) => {
            // Return a simplified response object
            return {
                data: response.data,
                status: response.status,
                statusText: response.statusText,
            };
        })
        .catch((error) => {
            // Handle errors and return a simplified error response
            if (error.response) {
                // The request was made and the server responded with a status code
                return {
                    data: error.response.data,
                    status: error.response.status,
                    statusText: error.response.statusText,
                };
            } else if (error.request) {
                // The request was made but no response was received
                return {
                    data: null,
                    status: 0,
                    statusText: 'No response received',
                };
            } else {
                // Something happened in setting up the request that triggered an Error
                return {
                    data: null,
                    status: 0,
                    statusText: error.message || 'Unknown error',
                };
            }
        });
};

export default ApiCallFunction;
