import { promises as fs } from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Title from './components/title';

export default async function Post({ params }: { params: { slug: string } }) {
  console.log('process');
  console.log('process', process.cwd());
  const filePath = path.join(
    process.cwd(),
    'public',
    'posts',
    `${params.slug}.mdx`
  );
  const source = await fs.readFile(filePath, 'utf8');

  return (
    <MDXRemote
      source={source}
      components={{
        Title: () => <Title title={params.slug} />,
      }}
    />
  );
}
