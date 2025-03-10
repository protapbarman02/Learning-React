function MessageTable() {
  const message = {
    id: 1,
    message: "First message",
  };

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Message No.</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{message.id}</td>
          <td>{message.message}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default MessageTable;
