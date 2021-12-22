import { ActionRequest, ActionResponse, ChatOption, Message, MessageContent, OnActionChanged, OnActionResponsed, OnMessagesChanged } from './chat-types';
export declare class ChatController {
    private state;
    private defaultOption;
    private emptyAction;
    private defaultActionRequest;
    constructor(option?: ChatOption);
    addMessage(message: Message<MessageContent>): Promise<number>;
    updateMessage(index: number, message: Message<MessageContent>): void;
    removeMessage(index: number): void;
    getMessages(): Message<MessageContent>[];
    setMessages(messages: Message<MessageContent>[]): void;
    clearMessages(): void;
    private callOnMessagesChanged;
    addOnMessagesChanged(callback: OnMessagesChanged): void;
    removeOnMessagesChanged(callback: OnMessagesChanged): void;
    setActionRequest<T extends ActionRequest>(request: T, onResponse?: OnActionResponsed): Promise<ActionResponse>;
    cancelActionRequest(): void;
    getActionRequest(): ActionRequest | undefined;
    setActionResponse(request: ActionRequest, response: ActionResponse): Promise<void>;
    getActionResponses(): ActionResponse[];
    private callOnActionChanged;
    addOnActionChanged(callback: OnActionChanged): void;
    removeOnActionChanged(callback: OnActionChanged): void;
    getOption(): ChatOption;
}
