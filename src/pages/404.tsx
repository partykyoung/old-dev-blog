import React from 'react';
import { Link } from "gatsby";

const NotFound = () => {
  return (
    <div>
      앗, 없는 페이지 입니다. X_X
      <Link to="/">첫 페이지로 돌아가기</Link>
    </div>
  )
}

export default NotFound;
