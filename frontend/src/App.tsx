import { useEffect, useState } from "react";

// Vite はトランスパイル時に import.meta.env のプロパティを VITE_ から始まる環境変数に置換する
// これを利用して本番環境と開発環境で Fetch API のリクエスト先を切り替えられる
// 参考: https://ja.vitejs.dev/guide/env-and-mode.html
const getMessagesApi = `${import.meta.env.VITE_API_ENDPOINT}/messages`;
const postSendApi = `${import.meta.env.VITE_API_ENDPOINT}/send`;

type Message = { id: number; content: string };

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessageContent, setNewMessageContent] = useState("");

  // コンポーネント読み込み時に処理を実行するには useEffect フックを使う
  useEffect(() => {
    const timerId = setInterval(async () => {
      const response = await fetch(getMessagesApi);
      setMessages(await response.json());
    }, 1000 * 5);

    // useEffect フックに指定した関数の戻り値に指定した関数はコンポーネントの破棄時に実行される
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.content}</li>
        ))}
      </ul>
      <input
        value={newMessageContent}
        onChange={(e) => {
          setNewMessageContent(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={async () => {
          await fetch(postSendApi, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content: newMessageContent }),
          });
        }}
      >
        送信
      </button>
    </>
  );
}

export default App;
