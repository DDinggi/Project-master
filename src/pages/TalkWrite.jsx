import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostWrite from "../components/PostWrite";

const TalkWrite = ({ onAddPost }) => {
  const navigate = useNavigate();

  const handlePostSubmit = (title, content) => {
    onAddPost(title, content, "talk"); // "talk" 카테고리 전달
    navigate("/talk");
  };

  return (
    <div>
      <Header />
      <PostWrite onAddPost={handlePostSubmit} category="talk" /> {/* 카테고리 전달 */}
      <Footer />
    </div>
  );
};

export default TalkWrite;


