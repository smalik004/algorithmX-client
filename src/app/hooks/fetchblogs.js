import { useState, useEffect } from "react";
import axiosHttp from "../utils/httpConfig";

const useFetchBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const response = await axiosHttp.get("/blog/get-blogs?status=published");

      const allBlogs = response?.data?.data || [];
      setBlogs(allBlogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);

  return blogs;
};

export default useFetchBlogs;
