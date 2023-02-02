import React from "react";

const Text = (props) => {
  // Change ® into <span>®</span>
  function convertText(props) {
    var convert = props;
    if (props.text) {
      convert = props.text;
    }

    return convert
      .toString()
      .replace(/®/g, "<span class='copywrite sup'>®</span>")
      .replace(/™/g, "<span class='copywrite sup'>™</span>");
  }
  return (
    <span
      className="text"
      dangerouslySetInnerHTML={{ __html: convertText(props) }}
    />
  );
};

export default Text;
