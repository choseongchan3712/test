// import Box from "./components/Box";
// import "./style.css";
import Contents from "./components/myself/Contents";
import "./components/myself/style.css";

const listArr = [
  {
    img: "https://images-kr.amoremall.com/products/111040000029/111040000029_01.png?1703428352597&format=webp&resize=634:634",
    text: "상품1",
  },
  {
    img: "https://images-kr.amoremall.com/products/310050000323/310050000323_01.png?1677740486006&format=webp&resize=634:634",
    text: "상품2",
  },
  {
    img: "https://images-kr.amoremall.com/products/111970001223/111970001223_00.png?1725980173965&format=webp&resize=634:634",
    text: "상품3",
  },
];


function App() {
  // const list = [
  //   {
  //     id: 0,
  //     img: "gray",
  //     text: "상품1",
  //   },
  //   {
  //     id: 1,
  //     img: "red",
  //     text: "상품2",
  //   },
  //   {
  //     id: 2,
  //     img: "blue",
  //     text: "상품3",
  //   },
  //   {
  //     id: 3,
  //     img: "yellow",
  //     text: "상품4",
  //   },
  //   {
  //     id: 4,
  //     img: "salmon",
  //     text: "상품5",
  //   },
  // ];

  return (
    // <div className="wrap">
    //   {/* <Box img={list[0].img} text={list[0].text}></Box>
    //   <Box img={list[1].img} text={list[1].text}></Box>
    //   <Box img={list[2].img} text={list[2].text}></Box>
    //   <Box img={list[3].img} text={list[3].text}></Box>
    //   <Box img={list[4].img} text={list[4].text}></Box> */}
    //   {list.map((item, index) => (
    //     <Box key={index} img={item.img} text={item.text}></Box>
    //   ))}
    // </div>
    <>
      <Contents list = {listArr}></Contents>
    </>
  );
}

export default App;
