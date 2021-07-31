import { Box, Grow, Typography } from '@material-ui/core';
import React from 'react';
import { Message, MessageContent } from '../chat-types';
import { Button, message } from 'antd';
import { SoundOutlined } from "@ant-design/icons";



export function MuiMessage({
  id,
  message,
}: {
  id: string;
  message: Message<MessageContent>;
}): React.ReactElement {
  if (message.deletedAt) {
    return <div id={id} />;
  }

  const l = message.self ? '20%' : 0;
  const r = message.self ? 0 : '20%';
  const bgcolor = message.self ? 'primary.main' : 'background.paper';
  const color = message.self ? 'primary.contrastText' : 'text.primary';
  const justifyContent = message.self ? 'flex-end' : 'flex-start';

  const playSoundContent = async () => {
    if (message.audio) {
        const sound = new Audio('data:audio/wav;base64,' + message.audio);
        await sound.play();
    }
  };

  return (
    <Grow in>
      <Box
        id={id}
        flex="0 0 auto"
        my={1}
        pl={l}
        pr={r}
        display="flex"
        justifyContent={justifyContent}
      >
        <Box
          minWidth={0}
          py={1}
          px={2}
          bgcolor={bgcolor}
          color={color}
          borderRadius={16}
          boxShadow={2}
        >
          {message.type === 'text' && (
            <Typography
              variant="body1"
              style={{ overflowWrap: 'break-word', whiteSpace: 'pre-wrap' }}
            >
              {message.content}
            </Typography>
          )}
          {message.type ==='text_audio' && (
            <div style={{flex: '0 1 0%', display: 'flex', flexDirection: 'row'}}>
            <Typography
              variant="body1"
              style={{ overflowWrap: 'break-word', whiteSpace: 'pre-wrap' }}
            >
              {message.content}
            </Typography>
            <Button 
            icon={<SoundOutlined className={'soundOutlined'} style={{ margin: '3px', fontSize: '16px'}}/>}
            style= {{flex: '1 0 0%', display: 'flex',flexDirection: 'row', border: '0px', color: 'rgba(205,220,250,1)',
            borderRadius: '50%', margin: '0px 0px 5px 10px', height: '25px', width: '25px', boxShadow: '1px 1px 2px rgba(0,0,0,.3)', marginTop:'auto'}}
            onClick={playSoundContent}
          />
            </div>
          )}
          {message.type === 'jsx' && (
            <div style={{ overflowWrap: 'break-word' }}>
              {message.content}
            </div>
          )}
        </Box>
      </Box>
    </Grow>
  );
}
