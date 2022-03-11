import { Link } from "wouter";
import './Gif.css'

export default function Gif({ title, url, id }) {
  if(title === '') {
    title = `Gif!!`
  }
  return (
    <Link className="gif" to={`/gif/${id}`}>
      <img src={url} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
}
