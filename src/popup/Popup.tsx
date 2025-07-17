import React from "react";
import { createRoot } from "react-dom/client";

// 导出组件以支持 Fast Refresh
export default function Popup() {
  return (
    <div className="fixed top-0 left-0 h-[100vh] box-border flex flex-col text-[14px] w-[400px]">
      <div className="border-l w-full h-[100vh] bg-white ">
        <div className="w-full h-[40px] flex items-center justify-between">
          <div className=" ml-[2%] flex items-center">
            <a>ai write</a>
          </div>
          <div className=" flex items-center justify-end">
            <div> test</div>
            <svg
              className="AI_WRITER_CHATGPT_header-close AI_WRITER_CHATGPT_icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3557"
              width="24"
              height="24"
            >
              <path
                d="M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z"
                fill="#8a8a8a"
                p-id="3558"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// 渲染逻辑保留在同一文件
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Popup />);
}
