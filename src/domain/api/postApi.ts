import { httpClient } from "./httpClient";

import { Post } from "@/domain/model/Post";
import { CreatePostData } from "@/domain/model/CreatePostData";

const POSTS_ENDPOINT = "/api/posts";

const getPosts = async (): Promise<Post[]> => {
  return await httpClient.get(POSTS_ENDPOINT);
};

const createPost = async (newPost: CreatePostData): Promise<Post> => {
  return await httpClient.post(POSTS_ENDPOINT, newPost);
};

const deletePost = async (postId: number): Promise<void> => {
  await httpClient.delete(`${POSTS_ENDPOINT}/${postId}`);
};

export const postApi = { getPosts, createPost, deletePost };
