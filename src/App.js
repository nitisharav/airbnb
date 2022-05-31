import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
// import Katie from "./images/katie_pic.png";
import data from "./data";

function App() {
  const card_data = data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
        //{...item}
        // src={`/images/${data.coverImg}`}
        // rating={data.stats.rating}
        // reviewCount={data.stats.reviewCount}
        // location={data.location}
        // title={data.title}
        // price={data.price}
        // openSpots={data.openSpots}
      />
    );
  });
  // console.log(card_data);
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Card
        src="/images/katie_pic.png"
        rating="5.0"
        reviewCount={6}
        location="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      /> */}
      <section className="cards--list">{card_data}</section>
    </div>
  );
}

export default App;
