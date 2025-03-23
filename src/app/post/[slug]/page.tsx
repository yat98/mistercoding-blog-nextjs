import PageTitle from '@/components/ui/PageTitle';
import RenderPost from '@/features/posts/RenderPost';
import { getPost } from '@/services/posts.service';

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const { data } = await getPost(slug);

  return (
    <div className="my-4">
      <PageTitle title={data.title} />
      <RenderPost post={data} />
    </div>
  );
}
