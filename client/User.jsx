import React from "react";

const User = () => {
    return (
        <div id="User-div">
            <img id="profile-pic" src="https://pbs.twimg.com/profile_images/1608530902400786433/PHkgWWBA_400x400.jpg"></img>
            <div id="user-bio">
                <div id="bio-left">
                    <h1>Bio:</h1>
                    <h1>Location:</h1>
                    <h1>Role:</h1>
                    <h1>ProPoints</h1>
                    <h1>Last Event Placement:</h1>
                </div>
                <div id="bio-right">
                    <div className="social">
                    <p>BattleNet - @JReysBack#9871915</p>
                    </div>
                    <div className="social">
                        <img src="https://i.ibb.co/LCtKfBz/removal-ai-a8163b0d-82dd-4988-a20d-02c3541c22e2-twitchlogo.png"></img>
                        <a href="https://www.twitch.tv/jreydoesitall">JReyDoesItAll</a>
                    </div>
                    <div className="social">
                        <img src="https://i.ibb.co/xL97m6X/removal-ai-cd384c76-3f4b-4af7-817e-a8a46ec970fa-xlogo.png"></img>
                        <a target="_blank" href="https://www.x.com/JreysBack">@JreysBack</a>
                    </div>
                    <div className="social">
                        <img src="https://i.ibb.co/qYKkMCY/removal-ai-bdba2967-545d-4295-9490-dc7b0bbb7cf8-discord.png"></img>
                        <p>JRey#9306</p>
                    </div>
                    <p>FaceIT - </p>
                    <p>Cmg - </p>
                    <p>CodAgent - </p>
                </div>
            </div>
        </div>
        
    )
}

export default User;