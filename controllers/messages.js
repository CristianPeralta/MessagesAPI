'use strict';
const messages = [
  {
    id: 0,
    user: {
      username: 'Albert',
      photo: 'https://picsum.photos/id/45/200/200',
      country: 'Australia'
    },
    text: 'This is a message'
  },
  {
    id: 1,
    user: {
      username: 'Rous',
      photo: 'https://picsum.photos/id/15/200/200',
      country: 'Swaziland'
    },
    text: 'Hello guys'
  },
  {
    id: 2,
    user: {
      username: 'Luka',
      photo: 'https://picsum.photos/id/87/200/200',
      country: 'Kenya'
    },
    text: 'Hi, I\'m Luka'
  },
];

module.exports = {
  
  async getAllMessages(req, res) {
    res.json(messages);
  },

  async createNewMessage(req, res) {
    const id = messages.length;
    const newMessage = {
      id,
      ...req.body,
    };
    messages.push(newMessage);

    res.json(newMessage);
  },
};