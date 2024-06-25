// src/utils/api.js
export const fetchData = async (endpoint) => {
    const response = await fetch(`${process.env.REACT_APP_PROFILE_APP_API_URL}${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_PROFILE_APP_API_URL}`
      }
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    return response.json();
  };
  