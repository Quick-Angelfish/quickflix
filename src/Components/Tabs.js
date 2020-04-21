import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TabItem = styled.button`
  background-color: rgba(20, 20, 20, 0.5);
  border: none;
  color: white;
  padding: 15px 30px;
  margin-left: 20px;
  border-radius: 5px 5px 0px 0px;
  font-size: 16px;
`;

const ItemContainer = styled.div`
  background-color: rgba(20, 20, 20, 0.5);
  margin-left: 20px;
  width: 50%;
  height: 45%;
  border-radius: 0px 15px 15px 15px;
  overflow: auto;
  font-size: 16px;
`;

const Paragraph = styled.p`
  display: block;
  padding-top: 20px;
  padding-left: 20px;
`;

const Anchor = styled.a``;

const Container = styled.div`
  font-size: 12px;
`;

const SeasonContainer = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: 0.2s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const useData = (objectsArray) => {
  const [video, setVideo] = useState({ data: [] });
  const [product, setProduct] = useState({ data: [] });
  const [season, setSeason] = useState({ data: [] });
  const [page, setPage] = useState(0);
  const takeData = () => {
    setVideo({
      name: "Videos",
      data: objectsArray[0],
    });
    setProduct({
      name: "Products",
      data: objectsArray[1],
    });
    if (objectsArray.length === 3) {
      setSeason({
        name: "Seasons",
        data: objectsArray[2],
      });
    }
  };
  useEffect(() => {
    takeData();
  }, []);
  const allData = [video, product, season];
  return { allData, page, setPage };
};

const Tabs = (objectsArray) => {
  const { allData, page, setPage } = useData(objectsArray);
  if (!allData[2].name) {
    allData.pop();
  }
  return (
    <>
      {allData.map((item, index) => (
        <TabItem key={index} onClick={() => setPage(index)}>
          {item.name}
        </TabItem>
      ))}
      <ItemContainer>
        {page === 0 && allData[page].data.length !== 0 ? (
          allData[page].data.map((items, index) => (
            <Paragraph key={index}>
              <Anchor
                href={`https://www.youtube.com/watch?v=${items.key}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link - {items.type}
              </Anchor>
            </Paragraph>
          ))
        ) : page === 1 && allData[page].data.length !== 0 ? (
          allData[page].data.map((items, index) => (
            <Paragraph key={index}>
              {items.name}
              {items.origin_country ? `-${items.origin_country}` : null}
            </Paragraph>
          ))
        ) : page === 2 && allData[page].data.length !== 0 ? (
          <SeasonContainer>
            {allData[page].data.map((item) => (
              <Container>
                <ImageContainer>
                  <Image
                    bgUrl={
                      item.poster_path
                        ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
                        : require("../assets/NoPoster.png")
                    }
                  ></Image>
                </ImageContainer>
                <Title>
                  {item.name.length > 18
                    ? `${item.name.substring(0, 18)}...`
                    : item.name}
                </Title>
              </Container>
            ))}
          </SeasonContainer>
        ) : (
          "Not found :("
        )}
      </ItemContainer>
    </>
  );
};

export default Tabs;
