import React from "react";

const Roster = () => {
    return (
        <div id="roster-div">
            <div id="roster-heading">
                <p>Current Roster</p>
            </div>
            <div id="roster-contents">
                <div className="roster-member">
                    <p>JRey</p>
                    <img src="https://pbs.twimg.com/profile_images/1608530902400786433/PHkgWWBA_400x400.jpg"></img>
                </div>
                <div className="roster-member">
                    <p>Scumpii</p>
                    <img src="https://pbs.twimg.com/profile_images/1501339063143436289/ieXhQHs9_400x400.jpg"></img>
                </div>
                <div className="roster-member">
                    <p>Formal</p>
                    <img src="https://pbs.twimg.com/profile_images/899467334649344003/3k_bojps_400x400.jpg"></img>
                </div>
                <div className="roster-member">
                    <p>Attach</p>
                    <img src="https://pbs.twimg.com/media/GA8MoLIXMAAybP9?format=jpg&name=large"></img>
                </div>
            </div>
        </div>
    )
}

export default Roster;