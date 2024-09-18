import "./Tag.css";

const Tag = ({ tagName, seletedTags, checkedTags }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    JS: { backgroundColor: "#ffd12c" },
    REACT: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "white" },
  };
  return (
    <>
      <button
        type="button"
        className="tag"
        style={checkedTags === true ? tagStyle[tagName] : tagStyle.default}
        onClick={() => {
          seletedTags(tagName);
        }}
      >
        {tagName}
      </button>
    </>
  );
};

export default Tag;
