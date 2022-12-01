import pageImg from "../assets/img/catsmall2.jpg";
import textBackground from "../assets/img/catsmall.png";

const Messages = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <img src={pageImg} alt="" width={"100%"} />
        </div>
        <div className="col-md-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quia
          quidem aspernatur itaque mollitia hic sapiente consectetur minus unde
          cum incidunt similiqus voluptatem ea libero! Minus placeat atque,
          commodi iusto.
        </div>
      </div>
      <div className="row mt-4">
        <div
          className="col-md-6 offset-6"
          style={{ backgroundImage: `url(${textBackground})` }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fugiat
          dignissimos sapiente delectus minus saepe voluptatum excepturi id sit
          numquam!
        </div>
      </div>
    </>
  );
};
export default Messages;
