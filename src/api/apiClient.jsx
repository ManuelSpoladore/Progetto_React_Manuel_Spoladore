import React from "react";
import axios from "axios";

const API_KEY = "DLjZ5aJ1pCn62VToWjAwZQEP35gj4IFV";
const BASE_URL = "https://api.nytimes.com/svc/topstories/v2";

const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    "api-key": API_KEY,
  },
  timeout: 5000,
});

export default apiClient;
