import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <h1>home</h1>
      <ul>
        <Link href="/posts">
          <li>posts</li>
        </Link>
      </ul>
    </div>
  );
};

export default Page;
