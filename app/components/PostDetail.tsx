type PostDetailProps = {
    title: string;
    body: string;
  };
  
  const PostDetail = ({ title, body }: PostDetailProps) => {
    return (
      <div className="p-6 bg-white rounded shadow-md max-w-2xl mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <p className="text-gray-700">{body}</p>
      </div>
    );
  };
  
  export default PostDetail;
  