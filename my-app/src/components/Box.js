
const Box = ({ img, text }) => {
  return (
    <>
      <div className="box_wrap">
        <div className="img_box" style={{ backgroundColor: img }}></div>
        <div className="text">{text}</div>
      </div>
    </>
  );
};

export default Box;
