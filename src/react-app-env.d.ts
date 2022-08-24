export interface PostDataType {
  id: number,
  title: string,
  body: string,
}

export interface Comment {
  id?: number,
  postId: number,
  body: string,
}
