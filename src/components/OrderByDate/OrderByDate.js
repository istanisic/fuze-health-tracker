import React, {useState, useEffect} from 'react';

export function OrderByDate( {onOrderBy} ) {

  const [sortBy, setSortBy] = useState("newest");

  const handleOnChange = e => {
    setSortBy(e.target.value);
  }

  useEffect(() => onOrderBy(sortBy));

  return (
    <select value={sortBy} onChange={handleOnChange} className="form-control">
      <option value="newest">Date: newest first</option>
      <option value="oldest">Date: oldest first</option>
    </select>
  );
}
