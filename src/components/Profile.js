import React from 'react';

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img id="wall" src="http://elitefon.ru/pic/201302/1920x1080/elitefon.ru-32867.jpg"></img>
            </div>
            <div>
                <img id="icon" src="https://image.flaticon.com/icons/png/512/4481/4481101.png"></img>
            </div>

            <div>
                Dmitry K.
            </div>
            <div>
                <div>Date of Birth: 2 january</div>
                <div>City: Minsk</div>
                <div>Education: BSU '11</div>
                <div>Web Site: https://it-kamasutra.com</div>
            </div>
            <div>
                My posts
            </div>
            {/*<input type="text">your news..</input>*/}
            <button>Send</button>
        </div>
    );
}

export default Profile;