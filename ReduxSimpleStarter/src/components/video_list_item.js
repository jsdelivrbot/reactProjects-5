import React from "react";

// const VideoListItem = (props) => {
//     const video = props.video;
//     return (
//         <li></li>
//     );
// };

//short hand for props // ES6 syntax
// parametre olarak fonksiyona {} içinde geçtiğin değer içerde
// const video = props.video; yapmış gibi kullanıyorsun
const VideoListItem = ({video}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img src={imageUrl} alt="" className="media-object"/>
                </div>

                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>

            </div>
        </li>
    );
};

export default VideoListItem;