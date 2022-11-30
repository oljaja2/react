import styles from "./Profile.module.css";
const Profile = () => {
  return (
    <div className="row">
      <div className="col-sm-3">
        <img
          src="https://www.seekpng.com/png/full/356-3562377_personal-user.png"
          alt=""
          width={"100%"}
        />
      </div>
      <div className="col-sm-9">
        <h1 style={{ backgroundColor: "lightblue" }}>Фамилия имя</h1>
        <h2 className={styles.about}>о себе</h2>
        <p>email 555@mail.ru</p>
        <p>id: 2</p>
        <p className={styles.paragraph}>Lorem ipsum dolor sit consectetur.</p>
      </div>
    </div>
  );
};
export default Profile;
