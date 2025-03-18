import PageTitle from '@/components/ui/PageTitle';
import Posts from '@/features/posts/Posts';

// Revalidate 1m
export const revalidate = 60;

export default function Home() {
  return (
    <>
      <PageTitle title="Post" />
      <Posts />
    </>
  );
}
