import menu from "./util/menu";

const Home = ({ name }) => {
  return (
    <div className="home-container">
      <h1>Welcome,</h1>
      <h2>{name}</h2>
      {menu.map((item) => {
        return (
          <>
            <h3>{item.category}</h3>
            <ul>
              {item.items.map((item) => {
                return <li>{item.name}</li>;
              })}
            </ul>
          </>
        );
      })}
    </div>
  );
};
export default Home;
