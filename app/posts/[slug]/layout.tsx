import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Link href="/posts">뒤로가기</Link>
      {children}
    </section>
  );
}
