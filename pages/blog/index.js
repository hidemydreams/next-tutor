import Link from 'next/link';

function Blog({ posts }) {
  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => {
        return (
          <p>
            <Link href={`blog/${post.id}`} key={post.id}>
              {post.title}
            </Link>
          </p>
        );
      })}
    </>
  );
}

export default Blog;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}
