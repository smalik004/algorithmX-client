"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Home from "../home";
import Navbar from "../../asample/naviagtion";
import axiosHttp from "../../../app/utils/httpConfig";

const Page = () => {
  const params = useParams();
  const id = params.id;
  const blogId = Number(id);

  const [data, setData] = useState(null);

  const getGlossaryById = async () => {
    try {
      const response = await axiosHttp.get(`/glossary/glossaries/${blogId}`);
      console.log("Blog API Response:", response);

      const blogData = response?.data?.data || null;
      setData(blogData);
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  useEffect(() => {
    if (id) getGlossaryById();
  }, [id]);
  console.log("GET ID", data);
  return (
    <div>
      <Navbar />
      <Home data={data} />
    </div>
  );
};

export default Page;
