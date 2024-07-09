
import "../css/usercard.css";
import User from './User';

const userData = [
  {
    name: "james",
    city: "new york",
    description: "front-end developer",
    skills: ["UI/UX", "html", "css", "mongodb", "sql","Node.js", "MongoDB",],
    online: false,
    profile: "images/img1.jpg",
  },
  {
    name: "Emily",
    city: "Los Angeles",
    description: "Full-stack developer",
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "SQL"],
    online: true,
    profile: "images/img2.jpg",
  },
  {
    name: "Michael",
    city: "Chicago",
    description: "Backend developer",
    skills: ["Java", "Spring Boot", "Node.js", "MongoDB","MySQL", "AWS"],
    online: false,
    profile: "images/img3.jpg",
  },
];


const UserCard = () => {
  return (
    <>
      {userData.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          profile={user.profile}
          description={user.description}
          online={user.online}
          skills={user.skills}
        />
      ))}
    </>
  );

  //     <User name="james" city="new york" description="front developer"
  //    skills={["html","css","java","js","mongodb"]} online={true} profile="images/img2.jpg" />
};



export default UserCard;
