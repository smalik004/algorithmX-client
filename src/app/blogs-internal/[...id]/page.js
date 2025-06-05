"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Home from "../home";
import Navbar from "../../asample/naviagtion";
import BlogCardsLayout from "../main";
import axiosHttp from "../../../app/utils/httpConfig";

const Page = () => {
  const params = useParams();
  const id = params.id;
  const blogId = Number(id);

  const [data, setData] = useState(null);

  const getBlogById = async () => {
    try {
      const response = await axiosHttp.get(`/blog/${blogId}`);

      const blogData = response?.data?.data || null;
      setData(blogData);
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  function generateRandomToken() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (char) {
        const rand = (Math.random() * 16) | 0;
        const value = char === "x" ? rand : (rand & 0x3) | 0x8;
        return value.toString(16);
      }
    );
  }

  const blogView = async () => {
    const tokenKey = `viewBToken-${blogId}`;
    if (!localStorage.getItem(tokenKey)) {
      const token = generateRandomToken();
      localStorage.setItem(tokenKey, token);

      await axiosHttp.post(`/blog/blog-view/${blogId}`, {
        device_token: token,
      });
    }
  };

  useEffect(() => {
    if (id) {
      getBlogById();
      blogView();
    }
  }, [id]);

  return (
    <div>
      <Navbar />
      <Home data={data} />
    </div>
  );
};

export default Page;
