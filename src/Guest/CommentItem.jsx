const CommentItem = ({ comment, onDelete }) => {
  const currentUserId = localStorage.getItem("userId"); // assuming this is stored after login

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "5px",
        marginTop: "5px",
        borderRadius: "5px",
        backgroundColor: "white",
      }}
    >
      <p>{comment.comment}</p>
      <small style={{ color: "gray" }}>
        by {comment.username} on {new Date(comment.created_at).toLocaleString()}
      </small>
      <br />
      {String(comment.user_id) === currentUserId && (
        <button
          onClick={() => onDelete(comment.id)}
          style={{
            marginTop: "5px",
            color: "white",
            background: "red",
            border: "none",
            padding: "5px 10px",
            borderRadius: "5px",
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default CommentItem;
