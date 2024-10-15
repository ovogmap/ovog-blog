import { promises as fs } from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  console.log('process');
  console.log('process', process.cwd());
  const filePath = path.join(
    process.cwd(),
    'src',
    'app',
    'blog',
    `${params.slug}.mdx`
  );
  const source = await fs.readFile(filePath, 'utf8');

  return <MDXRemote source={source} />;
}
