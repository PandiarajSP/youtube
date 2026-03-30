import { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState<any>();

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const result = await data.json();
    console.log(result);
    setVideos(result.items);
  }
  return (
    <div className='flex flex-wrap'>
      {videos && videos.map((video: any) =>
        <Link to={"watch?v=" + video.id}><VideoCard info={video} key={video.id} /></Link>
      )}

    </div>
  )
}

export default VideoContainer