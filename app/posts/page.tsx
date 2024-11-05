import path from 'path';
import fs from 'fs';
import Link from 'next/link';

const PostsPage = () => {
  const postsDirectory = path.join(process.cwd(), 'public/posts');
  const filenames = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.mdx'));

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {filenames.map((filename) => {
          const postSlug = filename.replace('.mdx', '');
          return (
            <li key={postSlug}>
              <Link href={`/posts/${postSlug}`}>{postSlug}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default PostsPage;
