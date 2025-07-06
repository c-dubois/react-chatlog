import ChatEntry from "./ChatEntry";
import PropTypes from "prop-types";
import "./ChatLog.css";

const ChatLog = (props) => {
    const chatEntries = props.messages.map((message) => {
        return (
            <ChatEntry
                key={message.id}
                sender={message.sender}
                body={message.body}
                timeStamp={message.timeStamp}
            />
        );
    });

    return (
        <div className="chat-log">
            {chatEntries}
        </div>
    );
};

ChatLog.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ChatLog;