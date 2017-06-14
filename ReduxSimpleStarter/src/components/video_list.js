import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = (props) => {
    // function componentlerde propsu yukardan geçirmen lazım
    // refaktor ederken classlarda props u o yüzden this.props olarak refaktor et

    const videoItems = props.videos.map((video) =>{
        return <VideoListItem key={video.etag} video = {video}/>
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;