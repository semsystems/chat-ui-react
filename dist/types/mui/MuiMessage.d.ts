import React from 'react';
import { Message, MessageContent } from '../chat-types';
export declare function AudioMessageButton(props: any): JSX.Element;
export declare function MuiMessage({ id, message, showDateTime, }: {
    id: string;
    message: Message<MessageContent>;
    showDateTime: boolean;
}): React.ReactElement;
