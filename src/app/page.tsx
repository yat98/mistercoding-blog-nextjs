import PageTitle from '@/components/ui/PageTitle';
import Posts from '@/features/posts/Posts';

// Revalidate 1m
export const revalidate = 60;

export default function Home() {
  return (
    <>
      <div className="my-4!">
        <PageTitle title="Post" />
        <Posts />
      </div>
    </>
  );
}
