import React from 'react'
import { useParams } from 'react-router-dom'
import showStore from '../stores/showStore'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Header from '../components/Header';
import Footer from './Footer';
import styled from 'styled-components';

const Show = () => {

  const store: any = showStore()
  const params: any = useParams()

  React.useEffect(() => {
    store.fetchData(params.id)
  }, [params.id, store]); 

  if (!store.data) return <></>;

  return (
    <ShowContainer>
    <Header back/>
    <CryptoIconContainer>
      <CryptoIcon src={store.data.image.large} alt='icon' />
      <h2>{store.data.name} ({store.data.symbol})</h2>
      <MobileNotification>
          View this graph better on desktop
        </MobileNotification>
    </CryptoIconContainer>
      <LineChartContainer>
      <LineChart
          width={500}
          height={300}
          data={store.graphData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Legend />
              <Line type="monotone" dataKey="Price" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d"  />
        </LineChart>
      </LineChartContainer>
    <Details>
      <DetailsBox>
      <h4>Market cap rank</h4>
      <span>{store.data.market_cap_rank}</span>
      </DetailsBox>
      <DetailsBox>
      <h4>24 high</h4>
      <span>$ {store.data.market_data.high_24h.php}</span>
      </DetailsBox>
      <DetailsBox>
      <h4>24 low</h4>
      <span>$ {store.data.market_data.low_24h.php}</span>
      </DetailsBox>
      <DetailsBox>
      <h4>Circulating Supply</h4>
      <span>$ {store.data.market_data.circulating_supply.toLocaleString()} </span>
      </DetailsBox>
      <DetailsBox>
      <h4>Current Price</h4>
      <span>$ {store.data.market_data.current_price.php} </span>
      </DetailsBox>
      <DetailsBox>
      <h4>1-year Change</h4>
      <span>$ {store.data.market_data.price_change_percentage_1y.toFixed(2)}% </span>
      </DetailsBox>
    </Details>
    <Footer />
    </ShowContainer>
  )
}

export default Show;

const ShowContainer = styled.div`
   @media only screen and (max-device-width: 480px) {
    overflow-x: hidden;
   }
`;

const LineChartContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-family: 'Quicksand', sans-serif;

  @media only screen and (max-device-width: 480px) {
    height: 70px;
    margin: 70px 0px 100px 0px;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: rgba(49, 175, 183, 1);
}
`;
const CryptoIconContainer = styled.div`
  align-items: center;
  padding: 20px auto;
  margin: 40px 0px 50px 0px;
  display: inline-block;
  text-align: center;
  width: 100%;
`;
const CryptoIcon = styled.img`
  width: 100px;
  height: 100px;
`;

const MobileNotification = styled.div`
    display: none;

  @media only screen and (max-device-width: 480px) {
      margin: -10px 0px 10px 0px;
      display: block;
      width: 100%;
      text-align: center;
      font-size: 14px;
      font-family: 'Quicksand', sans-serif;
      font-style: italic;
      color: #dddd;
  }
`;

const Details = styled.div`
  display: flex;
  width: 100%;
  padding-top: 50px;
  align-items: center;
  text-align: center;
  animation: fadeIn 3s;

  @keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

  @media only screen and (max-device-width: 480px) {
    flex-direction: column;
  }

`;

const DetailsBox = styled.div`
    border: 1px solid #ddd;
    border-radius: 12px;
    padding: 20px;
    margin: 30px;
    background-color: #353535;
    font-family: 'Quicksand', sans-serif;
    font-size: 18px;
    letter-spacing: 1.3px;
    color: white;

  h4 {
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    font-size: 28px;
    letter-spacing: 1px;
    color: rgba(49, 175, 183, 1);
  }

  @media only screen and (max-device-width: 480px) {
    margin: 10px;
    width: 250px;
    text-align: center;
    h4 {
      font-size: 20px;
    }
}
`;