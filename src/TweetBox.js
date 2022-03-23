import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import './TweetBox.css'
import db from './firebase'

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Peter Parker",
            username: "peterparker",
            verified: true,
            text: tweetMessage,
            avatar: "https://i.pinimg.com/originals/a3/b5/eb/a3b5ebed2986d043b5b457b0b8450e2d.gif",
            image: tweetImage
        });
        setTweetMessage("");
        setTweetImage("");
    }

  return (
    <div className="tweetBox">
        <form>
            <div className="tweetBox_input">
                <Avatar
                    style={{ width: 36, height: 36 }}
                    src=""
                />
                <input
                    placeholder="What's happening?"
                    type="text"
                    value={tweetMessage}
                    onChange={e => setTweetMessage(e.target.value)}
                />
            </div>
            <input
                className="tweetBox_imageInput"
                placeholder="Optional: Enter image URL"
                type="text"
                value={tweetImage}
                onChange={e => setTweetImage(e.target.value)}
                />
            <Button 
                type="submit" 
                onClick={e => sendTweet(e)}
                className="tweetBox_button"
            >Tweet
            </Button>
        </form>
    </div>
  )
}

export default TweetBox