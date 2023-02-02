//wistia provider and player
import { WistiaPlayer } from "@wistia/react-embeds";

const Video = (props) => {
  const wistiaId = props.wistiaId;
  return <>{wistiaId && <WistiaPlayer hashedId={wistiaId} />}</>;
};

export default Video;
