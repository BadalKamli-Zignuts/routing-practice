import Link from "next/link";

export default function ProductsList() {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Products list </h1>
      <h3>
        <Link href="products/1">Product 1</Link>
      </h3>
      <h3>
        <Link href="products/2">Product 2</Link>
      </h3>
      <h3>
        <Link href="products/3" replace>
          Product 3
        </Link>
      </h3>
    </>
  );
}
