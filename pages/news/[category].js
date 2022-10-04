import React from 'react';

const CategoryList = ({ news, category }) => {
  return (
    <>
      <div>CategoryList {category}</div>
      {news.map((item) => {
        return (
          <div key={item.id}>
            {item.title} | {item.category}
          </div>
        );
      })}
    </>
  );
};

export default CategoryList;

export async function getServerSideProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/news?category=${params.category}`
  );
  const data = await response.json();

  return {
    props: {
      news: data,
      category: params.category,
    },
  };
}
