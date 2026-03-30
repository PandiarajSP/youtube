
const ChatMessage = ({ name, message }: { name: string, message: string }) => {
    return (
        <div className="flex items-center">
            <img 
            className="h-5 w-5"
            alt="comment-profile" 
            src="https://yt3.ggpht.com/jEh-GLa0VeT7J8D3IhnDH9WqfdPNTp0OthFle0NNtpU6b2nVHUr3vS_trVXlBeYROz-36bAQYw=s88-c-k-c0x00ffffff-no-rj" />
            <span className="font-bold px-2">{name}</span>
            <span>{message}</span>
        </div>

    )
}

export default ChatMessage