"use client";

import {
  Edit2,
  MessageCircle,
  Moon,
  Paperclip,
  Sun,
  Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { ScrollArea } from "~/components/ui/scroll-area";

type Message = {
  id: number;
  user: string;
  content: string;
  timestamp: Date;
  pattern?: string;
};

const patterns = [
  "bg-orange-100 dark:bg-orange-900",
  "bg-teal-100 dark:bg-teal-900",
  "bg-violet-100 dark:bg-violet-900",
  "bg-amber-100 dark:bg-amber-900",
];

export default function PublicChatRoom() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      user: "Alice",
      content: "Hey everyone!",
      timestamp: new Date("2023-05-20T10:00:00"),
      pattern: patterns[0],
    },
    {
      id: 2,
      user: "Bob",
      content: "Hi Alice, how are you?",
      timestamp: new Date("2023-05-20T10:01:00"),
      pattern: patterns[1],
    },
    {
      id: 3,
      user: "Charlie",
      content: "Welcome to the chat!",
      timestamp: new Date("2023-05-20T10:02:00"),
      pattern: patterns[2],
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() !== "") {
      const message: Message = {
        id: messages.length + 1,
        user: "You",
        content: newMessage,
        timestamp: new Date(),
        pattern: patterns[Math.floor(Math.random() * patterns.length)],
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleAttachment = () => {
    // Implement attachment functionality here
    console.log("Attachment button clicked");
  };

  const handleEdit = (id: number) => {
    // Implement edit functionality here
    console.log("Edit message", id);
  };

  const handleDelete = (id: number) => {
    // Implement delete functionality here
    console.log("Delete message", id);
  };

  const handleReply = (id: number) => {
    // Implement reply functionality here
    console.log("Reply to message", id);
  };

  return (
    <div className="flex h-screen flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex items-center justify-between bg-white p-4 shadow-md dark:bg-gray-800">
        <h1 className="text-2xl font-bold">Public Chat Room</h1>
        <Button
          variant="outline"
          size="icon"
          onClick={toggleDarkMode}
          className="text-gray-900 dark:text-gray-100"
        >
          {darkMode ? (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          )}
        </Button>
      </div>
      <ScrollArea className="flex-grow p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`group mb-4 flex items-start space-x-2 rounded-lg p-3 ${message.pattern}`}
          >
            <Avatar className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">
              <AvatarImage
                src={`https://api.dicebear.com/6.x/initials/svg?seed=${message.user}`}
              />
              <AvatarFallback>{message.user[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-grow flex-col">
              <div className="flex items-baseline space-x-2">
                <span className="font-semibold">{message.user}</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
              <p className="mt-1">{message.content}</p>
            </div>
            <div className="hidden space-x-2 group-hover:flex">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleEdit(message.id)}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                <Edit2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDelete(message.id)}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleReply(message.id)}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </ScrollArea>
      <form
        onSubmit={handleSendMessage}
        className="bg-white p-4 shadow-md dark:bg-gray-800"
      >
        <div className="flex space-x-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={handleAttachment}
            className="text-gray-600 dark:text-gray-400"
          >
            <Paperclip className="h-5 w-5" />
          </Button>
          <Input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-grow bg-gray-100 text-gray-900 placeholder-gray-500 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400"
          />
          <Button
            type="submit"
            className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
