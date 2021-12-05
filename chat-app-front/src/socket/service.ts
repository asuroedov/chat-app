export const handleCreateChatSuccess = (payload: { message: string }) => {
  const { message } = payload;
  console.log(message);
};
