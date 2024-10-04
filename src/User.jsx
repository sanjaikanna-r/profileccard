import React from 'react'; // Make sure to import React

const userData = [
    {
        name: "Virat Kholi",
        city: "Bangalore",
        description: "Batsman",
        skills: ["Batsman","fielder"],
        profile: "images/vk.png",
        online: true,
    },
    {
        name: "Dhoni",
        city: "CSK",
        description: "CSK TEAM CAPTAIN",
        skills: ["Batsman", "Captain", "Leader"],
        profile: "images/msd.webp",
        online: false,
    },
    {
        name: "Rohit",
        city: "Mumbai",
        description: "INDIAN TEAM CAPTAIN",
        skills: ["Batsman", "Captain", "Leader"],
        profile: "images/rohit.webp",
        online: false,
    },
];

function UserProfile(props) {
    return (
        <div className="Card-container">
            <span className={props.online ? "pro online" : "prooffline"}>
                {props.online ? "online" : "offline"}
            </span>
            <img src={props.profile} alt={props.name} className='hit' />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.description}</p>
            <div className='buttons'>
                <button className='primary'>Message</button>
                <button className='primary outline'>Following</button>
            </div>
            <div className='skills'>
                <h6>Skills</h6>
                <ul>
                    {props.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

const User = () => {
    return (
        <>
            {userData.map((user, index) => (
                <UserProfile 
                    key={index} 
                    name={user.name} 
                    city={user.city} 
                    description={user.description} 
                    skills={user.skills} 
                    profile={user.profile}
                    online={user.online} 
                />
            ))}
        </>
    );
}

export default User; // Ensure it's a default export
