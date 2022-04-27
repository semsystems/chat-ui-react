import { Avatar, Box, Grow, Typography, Button, Theme, makeStyles } from '@material-ui/core';
import React from 'react';

import { Message, MessageContent } from '../chat-types';

export function MuiMessage({
  id,
  message,
  showDateTime,
}: {
  id: string;
  message: Message<MessageContent>;
  showDateTime: boolean;
}): React.ReactElement {
  if (message.deletedAt) {
    return <div id={id} />;
  }

  const dispDate = message.updatedAt ? message.updatedAt : message.createdAt;

  const ChatAvator = (
    <Box
      minWidth={0}
      flexShrink={0}
      ml={message.self ? 1 : 0}
      mr={message.self ? 0 : 1}
    >
      <Avatar alt={message.username} src={message.avatar} />
    </Box>
  );

  const ChatUsername = (
    <Box maxWidth="100%" mx={1}>
      <Typography variant="body2" align={message.self ? 'right' : 'left'}>
        {message.username}
      </Typography>
    </Box>
  );

  const ChatDate = (
    <Box maxWidth="100%" mx={1}>
      <Typography
        variant="body2"
        align={message.self ? 'right' : 'left'}
        color="textSecondary"
      >
        {dispDate?.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </Typography>
    </Box>
  );

  return (
    <Grow in>
      <Box
        id={id}
        maxWidth="100%"
        flex="0 1 auto"
        my={1}
        pl={message.self ? '20%' : 0}
        pr={message.self ? 0 : '20%'}
        display="flex"
        justifyContent={message.self ? 'flex-end' : 'flex-start'}
        style={{ overflowWrap: 'break-word' }}
      >
        {message.avatar && !message.self && ChatAvator}
        <Box minWidth={0} display="flex" flexDirection="column">
          {message.username && ChatUsername}
          <Box
            maxWidth="100%"
            py={1}
            px={2}
            bgcolor={message.self ? 'primary.main' : 'background.paper'}
            color={message.self ? 'primary.contrastText' : 'text.primary'}
            borderRadius={16}
            boxShadow={2}
          >
            {message.type === 'text' && (
              <div style={{flex: '0 1 0%', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Typography
                  variant="body1"
                  style={{ overflowWrap: 'break-word', whiteSpace: 'pre-wrap', display: 'flex', alignItems: 'center', maxWidth: '510px'}}>
                    {message.content}
                </Typography>
                {message.buttons}
              </div>
            )}
            {message.type === 'jsx' && <div>{message.content}</div>}
          </Box>
          {showDateTime && ChatDate}
        </Box>
        {message.avatar && message.self && ChatAvator}
      </Box>
    </Grow>
  );
}
