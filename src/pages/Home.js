import PCard from "../components/UI/PaddingCard/PCard";
import HomeFirst from "../components/HomeFirstDiv/HomeFirst";
import HomeSecond from "../components/HomeSecond/HomeSecond";
import HomeThird from "../components/HomeThird/HomeThird";
import Bg from "../components/UI/Background/Bg";

const Home = () => {
  return (
    <>
      <Bg />
      <PCard>
        <HomeFirst />
        <HomeSecond />
        <HomeThird />
      </PCard>
    </>
  );
};

export default Home;
