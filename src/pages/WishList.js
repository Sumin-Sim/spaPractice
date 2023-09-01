import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import "./WishList.css";
import { deleteWishList, getWishList } from "../api/api";

export default function WishList() {
  const [courses,setCourses] = useState([]);
  const handleDelete = (courseSlug) => {
    deleteWishList(courseSlug);
    const nextCourses = getWishList();
    setCourses(nextCourses);
  };

  useEffect(() => {
    const NextCourses = getWishList();
    setCourses(NextCourses);
  })

  return (
    <div className="wishList">
      <ul>
        {
          courses.map((course) => (
            <li key={course.slug}>
              <ProductItem course={course}/>
              <p><button type="button" onClick={() => handleDelete(course.slug)}>버리기</button></p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}