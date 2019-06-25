import React from "react";
import { Record } from '../../components/Record/Record';
import "./List.css";

export function List( {records, orderBy} ) {

  const sortBy = orderBy === "newest" ? (a, b) => b.date - a.date : (a, b) => a.date - b.date;

  return (
      <ul className="list">
        {records.sort(sortBy).map(record => (
          <Record
          key={record.id}
          type={record.type}
          desc={record.desc}
          date={record.date} />
        ))}
      </ul>
  );

}
