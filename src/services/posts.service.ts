import { Post } from '@/models/post';
import api from '@/utils/api';

export const getPosts = async () => {
  return await api.get<Post[]>('/api/posts', {
    params: {
      populate: '*',
    },
    transformResponse: (res) => {
      const resData = JSON.parse(res);
      return resData.data;
    },
  });
};

export const getPost = async (slug: string) => {
  return await api.get<Post>(`/api/posts`, {
    params: {
      populate: '*',
      'filters[slug][$eq]': slug,
    },
    transformResponse: (res) => {
      const resData = JSON.parse(res);
      return resData.data[0] ?? {};
    },
  });
};
