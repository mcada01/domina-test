// TaskService.ts
import axios from "axios";

export const createTask = async (title: string, description: string) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/tasks`,
      { title, description },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const getTasks = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/tasks`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const updateTask = async (
  id: number,
  title: string,
  description: string
) => {
  try {
    const response = await axios.patch(
      `${process.env.REACT_APP_API_URL}/tasks`,
      { id, title, description },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const deleteTask = async (id: number) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/tasks/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };
