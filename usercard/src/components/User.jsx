
import PropTypes from 'prop-types';

const User = (props) => {
    return (
      <div className="card-container">
        <span className={props.online ? "pro online" : "pro offline"}>
          {props.online ? "Online" : "Offline"}
        </span>
        <img src={props.profile} className="img" alt="user" />
        <h2>{props.name}</h2>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="buttons">
          <button className="primary">message</button>
          <button className="primary outline">following</button>
        </div>
        <div className="skills">
          <h6>skills</h6>
          <ul>
            {props.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  User.propTypes={
    name:PropTypes.string.isRequired,
    city:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    skills:PropTypes.arrayOf(PropTypes.string).isRequired,
    online:PropTypes.bool.isRequired,
    profile:PropTypes.string.isRequired

  }

export default User