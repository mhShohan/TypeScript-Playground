import {
  useGetPostQuery,
  useCreatePostMutation,
  useDeletePostMutation,
} from '../store/services/postApi';

const Posts = () => {
  /// data fetching hook
  const { isLoading, data, refetch } = useGetPostQuery();

  // create new data hook
  const [createPost] = useCreatePostMutation();

  const createNewPost = async () => {
    const newPost = {
      title: 'new title' + Date.now(),
      body: 'body' + Date.now(),
    };

    await createPost(newPost);
    refetch();
  };

  // delete post hook
  const [deletePost] = useDeletePostMutation();
  const deletePostHandler = async (id: number) => {
    await deletePost(id);
    refetch();
  };

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      <ul className='list'>
        {data?.map((item) => (
          <li key={item.id}>
            <span>
              {item.id}-{item.title}
            </span>
            <button onClick={() => deletePostHandler(item.id)}>X</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={createNewPost}>Add Post</button>
      </div>
    </div>
  );
};

export default Posts;
