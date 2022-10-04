import { useRouter } from 'next/router';

function ProductDetail() {
  const { query } = useRouter();
  console.log(query);
  return (
    <>
      <h1>Details {query.productId}</h1>
    </>
  );
}
export default ProductDetail;
