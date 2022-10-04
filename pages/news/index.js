import React from 'react';

const NewsList = ({ news }) => {
  return (
    <>
      <div>
        <h1>News List</h1>
        {news.map((item) => {
          return (
            <div key={item.id}>
              {item.title} | {item.category}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NewsList;

export async function getServerSideProps() {
  const response = await fetch('http://localhost:4000/news');
  const data = await response.json();

  return {
    props: {
      news: data,
    },
  };
}
