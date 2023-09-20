import React from 'react';
import Card from '../components/Card';
import dummyData from "../dummyData.json"; // To be replaced with your api response data


export const Home = () => {
  return (
    <>
      <h1>Space X Ships</h1>
      <div className="App" style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", rowGap: "10px", columnGap: "20px"}}>
        <Card image={dummyData.image} name={dummyData.name} home_port={dummyData.home_port} roles={dummyData.roles} />
      </div>
    </>
  );
};

export default Home;