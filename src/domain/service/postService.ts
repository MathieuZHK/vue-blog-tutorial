import { httpClient } from "./httpClient";

import { Post } from "@/domain/model/Post";
import { CreatePostData } from "@/domain/model/CreatePostData";

class PostService {
  static readonly POSTS_ENDPOINT = "/api/posts";

  async getPosts(): Promise<Post[]> {
    return await httpClient.get(PostService.POSTS_ENDPOINT);
  }

  async createPost(newPost: CreatePostData): Promise<Post> {
    return await httpClient.post(PostService.POSTS_ENDPOINT, newPost);
  }

  async deletePost(postId: number): Promise<void> {
    await httpClient.delete(`${PostService.POSTS_ENDPOINT}/${postId}`);
  }
}

export const postService = new PostService();
