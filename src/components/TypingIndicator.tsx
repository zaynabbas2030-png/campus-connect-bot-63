export function TypingIndicator() {
  return (
    <div className="flex w-full justify-start mb-4">
      <div className="bg-chat-bot-bg border border-chat-border rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
        <div className="flex items-center space-x-1">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-campus-text-muted rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-campus-text-muted rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-campus-text-muted rounded-full animate-bounce"></div>
          </div>
          <span className="text-xs text-campus-text-muted ml-2">Campus Assistant is typing...</span>
        </div>
      </div>
    </div>
  );
}