import React from "react";

const Text = (text) => {
  // Change ® into <span>®</span>
  function convertText(text) {
    console.log(text);
    var convert = text;
    if (text.text) {
      convert = text.text;
    }

    return convert
      .toString()
      .replace(/®/g, "<span class='copywrite sup'>®</span>");
  }
  return <span dangerouslySetInnerHTML={{ __html: convertText(text) }} />;
};

export default Text;
