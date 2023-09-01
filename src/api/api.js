import courses from "./data.json";

export function getCourse(keyword) {
  if(!keyword) return courses;
  return filterbyKeyword(courses,keyword);
}

function filterbyKeyword(items,keyword) {
  const lowered = keyword.toLowerCase();
  return items.filter(({title}) => title.toLowerCase().includes(lowered));
}

export function getCourseBySlug(courseSlug) {
  return courses.find((course) => course.slug === courseSlug);
}

// 검증 이름, 속성

const WISHLIST_KEY = 'wishlist';
const wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY) || '{}');

export function getWishList() {
  return courses.filter((course) => wishlist[course.slug])
}
export function addWishList(courseSlug) {
  wishlist[courseSlug] = true;
  localStorage.setItem(WISHLIST_KEY,JSON.stringify(wishlist));
}
export function deleteWishList(courseSlug) {
  delete wishlist[courseSlug];
  localStorage.setItem(WISHLIST_KEY,JSON.stringify(wishlist));
}