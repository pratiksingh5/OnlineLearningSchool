import React from 'react'

function Profile() {
    return (
        <div className="profile">
            <div className="profilepic"></div>
            <h5>Monika Geller</h5>
            <ul>
            <li>My Courses</li>
            <li>Report Card</li>
            <li>Activity</li>
            </ul>
            <button className="button">Logout</button>
        </div>
    )
}

export default Profile
