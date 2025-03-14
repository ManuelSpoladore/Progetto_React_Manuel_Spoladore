import React from "react";
import apiClient from "./apiClient";

export const newsCaller = async () => {
  try {
    const response = await apiClient.get("/home.json");
    return response.data.results;
  } catch (error) {
    console.log("Fetch Error:", error);
    return [];
  }
};
