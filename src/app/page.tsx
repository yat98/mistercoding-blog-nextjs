import PageTitle from '@/components/ui/PageTitle';
import Posts from '@/features/posts/Posts';

// Cache for 1 hour
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <PageTitle title="Post" subtitle="The latest post list" />
      <Posts />
    </>
  );
}
