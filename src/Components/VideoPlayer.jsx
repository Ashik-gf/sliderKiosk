
import ReactPlayer from 'react-player'
import video from "./../assets/test.mp4"
const VideoPlayer = () => {
  return (
    <div className='player-wrapper'>
    <ReactPlayer
      className='react-player'
    url={video}
    config={{
        youtube: {
          playerVars: { showinfo: 1 }
        }}}
      width='100%'
      height='100%'
      muted={true}
      playing={true}
      loop={true}

    />
  </div>
  )
}

export default VideoPlayer