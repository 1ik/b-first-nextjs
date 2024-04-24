import React from "react";
import Header from "../components/Header/Header";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import BackToTop from "../components/BackToTop/BackToTop";
import Footer from "../components/Footer/Footer";
import Editor from "../components/Editor/Editor";

function editor() {
  return (
    <>
      <Header />
      <MobileMenu/>
      <Editor/>
      <BackToTop />
      <Footer/>
    </>
  );
}

export default editor;
