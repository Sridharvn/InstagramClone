import "../styles/story.scss"
import React from 'react'
import ProfileIcon from "./ProfileIcon"
import users from "../data/users"

function Story() {
    let accountName = users[Math.floor(Math.random() * users.length)].username;
    if (accountName.length > 10) {
        accountName = accountName.substring(0, 10)+"...";
    }
  return (
      <div className="story">
          <ProfileIcon iconsize="big" storyBorder="true" />
          <span className="accountName">{accountName}</span>
    </div>
  )
}

export default Story