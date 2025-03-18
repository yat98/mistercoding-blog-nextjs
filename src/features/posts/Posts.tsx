import { getPosts } from '@/services/posts.service';
import PostItem from './PostItem';

export default async function Posts() {
  const { data } = await getPosts();

  return (
    <>
      <ul>
        {data.map((post, i) => (
          <PostItem post={post} key={i} />
        ))}
      </ul>
    </>
  );
}
