const Contents = ({ list }) => {
  return (
    <>
      <div className="content_box">
        <div className="img_box">
          <img src={list[0].img} alt="img" />
        </div>
        <div className="text">{list[0].text}</div>
      </div>
      <div className="content_box">
        <div className="img_box">
          <img src={list[1].img} alt="img" />
        </div>
        <div className="text">{list[1].text}</div>
      </div>
      <div className="content_box">
        <div className="img_box">
          <img src={list[2].img} alt="img" />
        </div>
        <div className="text">{list[2].text}</div>
      </div>
    </>
  );
};

export default Contents;
