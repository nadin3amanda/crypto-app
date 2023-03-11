import React from "react";
import CoinList from "../components/CoinList";
import Header from "../components/Header";
import homeStore from "../stores/homeStore";

export default function Home() {
  const store: any = homeStore();

  React.useEffect(() => {
    store.fetchCoins();
  }, []);

  return (
    <div>
      <Header />
      <header className="home-search">
        <h2>Search for a coin</h2>
        <div className="width">
          <input type="text" value={store.query} onChange={store.setQuery} />
        </div>
      </header>
        <div className="trending-h2">
          <h2>Trending today</h2>
        </div>
      <div className="home-crypto">
        <div className="width">
          {store.coins.map((coin: any) => {
            return <CoinList key={coin.id} coin={coin} />;
          })}
        </div>
      </div>
    </div>
  );
}
