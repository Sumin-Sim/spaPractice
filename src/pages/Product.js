import { useParams } from "react-router-dom";
import { addWishList, getCourseBySlug } from "../api/api";
import styled from "styled-components";
import "./Product.css";
const StyleButton = styled.button`
  width: 200px; height: 60px;
  border: none;
  background-color: orange;
  color: #fff;
`



export default function Product() {
  const {courseSlug} = useParams();
  const course = getCourseBySlug(courseSlug);

  const handleAddWishList = () => {
    addWishList(course.slug)
  }

  return (
    <>
    <div id="productItem">
        <h2>{course.title}</h2>
        <p><StyleButton type="button" onClick={handleAddWishList}>추가하기</StyleButton></p>
        <p>{course.summary}</p>
    </div>

    <div className="topic">
      {
      course.topics.map(({topic}) => (
        <dl key={topic.slug}>
          <dt>{topic.title}</dt>
          <dd>{topic.summary}</dd>
        </dl>
      ))
      }
    </div>
    </>
  );
}