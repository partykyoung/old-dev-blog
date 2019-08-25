import React from 'react';
import { Link } from "gatsby";

interface PageContextProps {
  currentPage: number;
  numPages: number;
}

const Pagination = ({pageContext}: any) => {
  const { currentPage, numPages} = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <ul>
      {
        !isFirst &&
        <li><Link to={prevPage}>이전</Link></li>
      }
      {
        Array.from({length: numPages}, (_, i) => (
          <li key={`[agination-${i}`}>
            <Link to={`/${i > 0 ? `${i + 1}` : ''}`}>{i + 1}</Link>
          </li>
        ))
      }
      {
        !isLast &&
        <li><Link to={nextPage}>다음</Link></li>
      }
    </ul>
  )
}

export default Pagination
