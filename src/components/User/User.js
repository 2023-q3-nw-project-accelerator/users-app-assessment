import "./User.css";

const User = ({ user, expand, handleSingleExpand, handleSingleCollapse }) => {
  const { about, age, company, country, name, photo, id } = user;

  return (
    <section className="User">
      <div className="User__avatar">
        <img src={photo} alt={name} />
      </div>
      <div className="User__info">
        <ul>
          <li className="User__name">{name}</li>
          <li>Age: {age}</li>
          <li>Country: {country}</li>
          <li>Company: {company}</li>
        </ul>
        {expand && (
          <div className="User__about">
            <h3>About {name.split(" ")[0]}:</h3>
            <p>{about}</p>
          </div>
        )}
      </div>
      <div className="User__controls">
        {expand ? (
          <button value={id} onClick={handleSingleCollapse}>
            Show Less
          </button>
        ) : (
          <button value={id} onClick={handleSingleExpand}>
            Show More
          </button>
        )}
      </div>
    </section>
  );
};

export default User;
