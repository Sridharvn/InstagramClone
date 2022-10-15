import "../styles/suggestions.scss"
import React from 'react'
import Profile from "./Profile"

function Suggestions() {
  return (
      <div className="suggestions">
          <div className="titleContainer">
              <div className="title">Suggestions for you</div>
              <a href="/">See all</a>
          </div>
          <Profile caption="Followed by abcd and 3 more" urlText="Follow" iconSize="medium" captionSize="small" storyBorder={true} />
    </div>
  )
}

export default Suggestions