import ProductItem from "../components/ProductItem";

import "./ProductList.css";

import { getCourse } from "../api/api";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function ProductList() {
  const [searchParam,setSearchParam] = useSearchParams();
  const initKeyword = searchParam.get('keyword');
  const [keyword,setKeyword] = useState(initKeyword || "");

  const courses = getCourse(initKeyword);

  const hangelKeywordChange = (e) => setKeyword(e.target.value);
  const handSubmit = (e) => {
    e.preventDefault();
    setSearchParam(keyword ? {keyword} : {})
  }


  return (
    <div id="product">
      <h2>title</h2>

      <form onSubmit={handSubmit}>
        <input type="text" placeholder="검색으로 상품 찾기" onChange={hangelKeywordChange} />
        <button type="submit">검색</button>
      </form>

      <div id="container">
          <p>총 {courses.length}개가 검색되었습니다.</p>
          <div>
            {
              courses.map((course) => (<ProductItem key={course.id} course={course} />))
            }
          </div>
      </div>
    </div>
  );
}