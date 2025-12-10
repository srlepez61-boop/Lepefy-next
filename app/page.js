import SongList from "../components/SongList";
import { songs } from "../lib/songs";

export default function HomePage() {
  return (
    <div>
      <h2 className="page-title">Home · Featured</h2>
      <SongList songs={songs} />
    </div>
  );
}
