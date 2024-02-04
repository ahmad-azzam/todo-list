import { LoadingOutlined, SmileOutlined } from "@ant-design/icons";
import { notification } from "antd";
import React from "react";

const Joke: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const getJoke = async () => {
    try {
      setIsLoading(true);
      const result = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?type=single"
      );
      const resultJson = await result.json();

      api.open({
        message: resultJson.joke,
        icon: <SmileOutlined style={{ color: "#108ee9" }} />,
        duration: 0,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {contextHolder}
      <button
        disabled={isLoading}
        onClick={getJoke}
        className="text-xs cursor-pointer mt-10 animate-bounce text-blue-500 opacity-50 hover:opacity-100"
      >
        {isLoading ? (
          <LoadingOutlined />
        ) : (
          "Click me if you bored with your task!"
        )}
      </button>
    </>
  );
};

export default Joke;
