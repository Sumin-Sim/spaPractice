import { Link } from "react-router-dom";
import "./ProductItem.css";

export default function ProductItem({ course }) {
  

  return (
    <figure className="pic">
      <img src={course.photoUrl} alt={course.title}/>
      <figcaption>
        <dl>
          <dt><Link to={course.slug}>{course.title}</Link></dt>
          <dd>{course.summary}</dd>
        </dl>
      </figcaption>
    </figure>
  );
}