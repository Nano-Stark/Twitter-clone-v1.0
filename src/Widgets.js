import React from 'react'
import './Widgets.css'
import { 
  TwitterTimelineEmbed, 
  TwitterShareButton,
  TwitterTweetEmbed 
  } from "react-twitter-embed"
import { Search } from '@mui/icons-material'

const Widgets = () => {
  return (
    <div className="widgets">
        <div className="widgets_input">
          <Search className="widgets_searchIcon" />
          <input placeholder="Search Twitter" type="text" />
        </div>

        <div className="widgets_container">
          <h2>What's happening</h2>

          <TwitterTweetEmbed tweetId={'933354946111705097'}/>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="saurabhnemade"
            options={{height: 400}}
          />

          <TwitterShareButton
            url={'https://facebook.com/saurabhnemade'}
            options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
          />
        </div>
    </div>
  )
}

export default Widgets