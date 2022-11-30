import styles from "./Profile.module.css";
const Profile = (props) => {
  let user = props.function();
  // console.log(user);
  return (
    <div className="row">
      <div className="col-sm-3">
        <img src={user.avatar} width={"100%"} />
      </div>
      <div className="col-sm-9">
        <h1 style={{ backgroundColor: "lightblue" }}>
          {user.name} {user.lastname}
        </h1>
        <h2 className={styles.about}>{user.about}</h2>
        <p>email: {user.email}</p>
        <p>id: {user.id}</p>
        <p className={styles.paragraph}>Lorem ipsum dolor sit consectetur.</p>
      </div>
    </div>
  );
};
export default Profile;
