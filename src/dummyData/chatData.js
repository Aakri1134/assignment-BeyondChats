const data = [
  {
    id: "1",
    name: "Name 1",
    chats: [
      {
        type: "recieved",
        msg: "I have a complaint!!",
        time: Date.now() - 40 * 60 * 1000, // to show 40 minutes ago
      },
      {
        type: "sent",
        msg: "Please Elaborate Further!?",
        time: Date.now() - 39 * 60 * 1000, // to show 40 minutes ago
      },
      {
        type: "sent",
        msg: "Hello??",
        time: Date.now() - 10 * 60 * 1000,
      },
      {
        type: "recieved",
        msg: "Don't do that! Don't give me hope!! ",
        time: Date.now() - 9 * 60 * 1000,
      },
    ],
  },
{
    id: "2",
    name: "Name 2",
    chats: [
      {
        type: "recieved",
        msg: "I have a complaint!!",
        time: Date.now() - 40 * 60 * 1000, // to show 40 minutes ago
      },
      {
        type: "sent",
        msg: "Please Elaborate Further!?",
        time: Date.now() - 39 * 60 * 1000, // to show 40 minutes ago
      },
      {
        type: "sent",
        msg: "Hello??",
        time: Date.now() - 10 * 60 * 1000,
      },
      {
        type: "recieved",
        msg: "Don't do that! Don't give me hope!! ",
        time: Date.now() - 10 * 60 * 1000,
      },
    ],
  },
{
    id: "3",
    name: "Name 3",
    chats: [
      {
        type: "recieved",
        msg: "I have a complaint!!",
        time: Date.now() - 40 * 60 * 1000, // to show 40 minutes ago
      },
      {
        type: "sent",
        msg: "Please Elaborate Further!?",
        time: Date.now() - 39 * 60 * 1000, // to show 40 minutes ago
      },
      {
        type: "sent",
        msg: "Hello??",
        time: Date.now() - 10 * 60 * 1000,
      },
      {
        type: "recieved",
        msg: "Don't do that! Don't give me hope!! ",
        time: Date.now() - 10 * 60 * 1000,
      },
    ],
  },
]
export const fetchChatUsingID = (id) => {
  return data.find(obj => obj.id === id) || { err: "Invalid ID" };
}
