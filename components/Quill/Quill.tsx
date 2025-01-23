"use client";

import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import "./Quill.scss";

function QuillEditor() {
  const [value, setValue] = useState("");

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}

export default QuillEditor;
