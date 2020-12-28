import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Squirtle',
            username: 'ashesFAVpokemon',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://cdn.bulbagarden.net/upload/4/4b/Ash_Squirtle.png"
        })
        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://cdn.bulbagarden.net/upload/4/4b/Ash_Squirtle.png" />
                    <input 
                    onChange={(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage}
                    type="text" 
                    placeholder="What's happening?"/>
                </div>
                    <input 
                    onChange={(e) => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__imageInput" 
                    type="text" 
                    placeholder="Enter image URL"/>
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;