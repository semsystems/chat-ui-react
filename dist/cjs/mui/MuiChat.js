"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MuiChat = MuiChat;

var _core = require("@material-ui/core");

var _react = _interopRequireDefault(require("react"));

var _MuiAudioInput = require("./MuiAudioInput");

var _MuiFileInput = require("./MuiFileInput");

var _MuiMessage = require("./MuiMessage");

var _MuiMultiSelectInput = require("./MuiMultiSelectInput");

var _MuiSelectInput = require("./MuiSelectInput");

var _MuiTextInput = require("./MuiTextInput");

const useStyles = (0, _core.makeStyles)(theme => ({
  container: {
    height: '100%',
    width: '100%',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      maxWidth: '100%'
    },
    '& > * + *': {
      marginTop: theme.spacing(1)
    }
  },
  messages: {
    flex: '1 1 0%',
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch',
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      maxWidth: '100%'
    }
  },
  action: {
    flex: '0 1 auto',
    display: 'flex',
    alignContent: 'flex-end',
    '& > *': {
      minWidth: 0
    }
  }
}));

function MuiChat({
  chatController
}) {
  const classes = useStyles();
  const chatCtl = chatController;

  const [messages, setMessages] = _react.default.useState(chatCtl.getMessages());

  const [actReq, setActReq] = _react.default.useState(chatCtl.getActionRequest());

  const msgRef = _react.default.useRef(null);

  const scroll = _react.default.useCallback(() => {
    if (msgRef.current) {
      msgRef.current.scrollTop = msgRef.current.scrollHeight; // msgRef.current.scrollIntoView(true);
    }
  }, [msgRef]);

  _react.default.useEffect(() => {
    function handleMassagesChanged() {
      setMessages([...chatCtl.getMessages()]);
      scroll();
    }

    function handleActionChanged() {
      setActReq(chatCtl.getActionRequest());
      scroll();
    }

    chatCtl.addOnMessagesChanged(handleMassagesChanged);
    chatCtl.addOnActionChanged(handleActionChanged);
  }, [chatCtl, scroll]);

  const CustomComponent = _react.default.useMemo(() => {
    if (!actReq || actReq.type !== 'custom') {
      return null;
    }

    return actReq.Component;
  }, [actReq]);

  const unknownMsg = {
    type: 'text',
    content: 'Unknown message.',
    self: false
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.messages,
    ref: msgRef
  }, messages.map(msg => {
    if (msg.type === 'text' || msg.type === 'jsx') {
      return /*#__PURE__*/_react.default.createElement(_MuiMessage.MuiMessage, {
        key: messages.indexOf(msg),
        id: `cu-msg-${messages.indexOf(msg) + 1}`,
        message: msg,
        showDateTime: !!chatCtl.getOption().showDateTime
      });
    }

    return /*#__PURE__*/_react.default.createElement(_MuiMessage.MuiMessage, {
      key: messages.indexOf(msg),
      id: `cu-msg-${messages.indexOf(msg) + 1}`,
      message: unknownMsg,
      showDateTime: !!chatCtl.getOption().showDateTime
    });
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.action
  }, actReq && actReq.type === 'text' && /*#__PURE__*/_react.default.createElement(_MuiTextInput.MuiTextInput, {
    chatController: chatCtl,
    actionRequest: actReq
  }), actReq && actReq.type === 'select' && /*#__PURE__*/_react.default.createElement(_MuiSelectInput.MuiSelectInput, {
    chatController: chatCtl,
    actionRequest: actReq
  }), actReq && actReq.type === 'multi-select' && /*#__PURE__*/_react.default.createElement(_MuiMultiSelectInput.MuiMultiSelectInput, {
    chatController: chatCtl,
    actionRequest: actReq
  }), actReq && actReq.type === 'file' && /*#__PURE__*/_react.default.createElement(_MuiFileInput.MuiFileInput, {
    chatController: chatCtl,
    actionRequest: actReq
  }), actReq && actReq.type === 'audio' && /*#__PURE__*/_react.default.createElement(_MuiAudioInput.MuiAudioInput, {
    chatController: chatCtl,
    actionRequest: actReq
  }), actReq && actReq.type === 'custom' && /*#__PURE__*/_react.default.createElement(CustomComponent, {
    chatController: chatCtl,
    actionRequest: actReq
  })));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tdWkvTXVpQ2hhdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwidGhlbWUiLCJjb250YWluZXIiLCJoZWlnaHQiLCJ3aWR0aCIsInBhZGRpbmciLCJzcGFjaW5nIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtYXhXaWR0aCIsIm1hcmdpblRvcCIsIm1lc3NhZ2VzIiwiZmxleCIsIm92ZXJmbG93WSIsIldlYmtpdE92ZXJmbG93U2Nyb2xsaW5nIiwiYWN0aW9uIiwiYWxpZ25Db250ZW50IiwibWluV2lkdGgiLCJNdWlDaGF0IiwiY2hhdENvbnRyb2xsZXIiLCJjbGFzc2VzIiwiY2hhdEN0bCIsInNldE1lc3NhZ2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImdldE1lc3NhZ2VzIiwiYWN0UmVxIiwic2V0QWN0UmVxIiwiZ2V0QWN0aW9uUmVxdWVzdCIsIm1zZ1JlZiIsInVzZVJlZiIsInNjcm9sbCIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsInVzZUVmZmVjdCIsImhhbmRsZU1hc3NhZ2VzQ2hhbmdlZCIsImhhbmRsZUFjdGlvbkNoYW5nZWQiLCJhZGRPbk1lc3NhZ2VzQ2hhbmdlZCIsImFkZE9uQWN0aW9uQ2hhbmdlZCIsIkN1c3RvbUNvbXBvbmVudCIsInVzZU1lbW8iLCJ0eXBlIiwiQ29tcG9uZW50IiwidW5rbm93bk1zZyIsImNvbnRlbnQiLCJzZWxmIiwibWFwIiwibXNnIiwiaW5kZXhPZiIsImdldE9wdGlvbiIsInNob3dEYXRlVGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBYUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLHNCQUFZQyxLQUFELEtBQW1CO0FBQzlDQyxFQUFBQSxTQUFTLEVBQUU7QUFD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Y29yZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDaGF0Q29udHJvbGxlciB9IGZyb20gJy4uL2NoYXQtY29udHJvbGxlcic7XG5pbXBvcnQge1xuICBBY3Rpb25SZXF1ZXN0LFxuICBBdWRpb0FjdGlvblJlcXVlc3QsXG4gIEN1c3RvbUFjdGlvblJlcXVlc3QsXG4gIEZpbGVBY3Rpb25SZXF1ZXN0LFxuICBNdWx0aVNlbGVjdEFjdGlvblJlcXVlc3QsXG4gIFNlbGVjdEFjdGlvblJlcXVlc3QsXG4gIFRleHRBY3Rpb25SZXF1ZXN0LFxufSBmcm9tICcuLi9jaGF0LXR5cGVzJztcblxuaW1wb3J0IHsgTXVpQXVkaW9JbnB1dCB9IGZyb20gJy4vTXVpQXVkaW9JbnB1dCc7XG5pbXBvcnQgeyBNdWlGaWxlSW5wdXQgfSBmcm9tICcuL011aUZpbGVJbnB1dCc7XG5pbXBvcnQgeyBNdWlNZXNzYWdlIH0gZnJvbSAnLi9NdWlNZXNzYWdlJztcbmltcG9ydCB7IE11aU11bHRpU2VsZWN0SW5wdXQgfSBmcm9tICcuL011aU11bHRpU2VsZWN0SW5wdXQnO1xuaW1wb3J0IHsgTXVpU2VsZWN0SW5wdXQgfSBmcm9tICcuL011aVNlbGVjdElucHV0JztcbmltcG9ydCB7IE11aVRleHRJbnB1dCB9IGZyb20gJy4vTXVpVGV4dElucHV0JztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PiAoe1xuICBjb250YWluZXI6IHtcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgJyYgPiAqJzoge1xuICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICAgICcmID4gKiArIConOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgfSxcbiAgfSxcbiAgbWVzc2FnZXM6IHtcbiAgICBmbGV4OiAnMSAxIDAlJyxcbiAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogJ3RvdWNoJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgJyYgPiAqJzoge1xuICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICB9LFxuICBhY3Rpb246IHtcbiAgICBmbGV4OiAnMCAxIGF1dG8nLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgJyYgPiAqJzoge1xuICAgICAgbWluV2lkdGg6IDAsXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGZ1bmN0aW9uIE11aUNoYXQoe1xuICBjaGF0Q29udHJvbGxlcixcbn06IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPHtcbiAgY2hhdENvbnRyb2xsZXI6IENoYXRDb250cm9sbGVyO1xufT4pOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IGNoYXRDdGwgPSBjaGF0Q29udHJvbGxlcjtcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSBSZWFjdC51c2VTdGF0ZShjaGF0Q3RsLmdldE1lc3NhZ2VzKCkpO1xuICBjb25zdCBbYWN0UmVxLCBzZXRBY3RSZXFdID0gUmVhY3QudXNlU3RhdGUoY2hhdEN0bC5nZXRBY3Rpb25SZXF1ZXN0KCkpO1xuXG4gIGNvbnN0IG1zZ1JlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHNjcm9sbCA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpOiB2b2lkID0+IHtcbiAgICBpZiAobXNnUmVmLmN1cnJlbnQpIHtcbiAgICAgIG1zZ1JlZi5jdXJyZW50LnNjcm9sbFRvcCA9IG1zZ1JlZi5jdXJyZW50LnNjcm9sbEhlaWdodDtcbiAgICAgIC8vIG1zZ1JlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHRydWUpO1xuICAgIH1cbiAgfSwgW21zZ1JlZl0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGhhbmRsZU1hc3NhZ2VzQ2hhbmdlZCgpOiB2b2lkIHtcbiAgICAgIHNldE1lc3NhZ2VzKFsuLi5jaGF0Q3RsLmdldE1lc3NhZ2VzKCldKTtcbiAgICAgIHNjcm9sbCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVBY3Rpb25DaGFuZ2VkKCk6IHZvaWQge1xuICAgICAgc2V0QWN0UmVxKGNoYXRDdGwuZ2V0QWN0aW9uUmVxdWVzdCgpKTtcbiAgICAgIHNjcm9sbCgpO1xuICAgIH1cbiAgICBjaGF0Q3RsLmFkZE9uTWVzc2FnZXNDaGFuZ2VkKGhhbmRsZU1hc3NhZ2VzQ2hhbmdlZCk7XG4gICAgY2hhdEN0bC5hZGRPbkFjdGlvbkNoYW5nZWQoaGFuZGxlQWN0aW9uQ2hhbmdlZCk7XG4gIH0sIFtjaGF0Q3RsLCBzY3JvbGxdKTtcblxuICB0eXBlIEN1c3RvbUNvbXBvbmVudFR5cGUgPSBSZWFjdC5GQzx7XG4gICAgY2hhdENvbnRyb2xsZXI6IENoYXRDb250cm9sbGVyO1xuICAgIGFjdGlvblJlcXVlc3Q6IEFjdGlvblJlcXVlc3Q7XG4gIH0+O1xuICBjb25zdCBDdXN0b21Db21wb25lbnQgPSBSZWFjdC51c2VNZW1vKCgpOiBDdXN0b21Db21wb25lbnRUeXBlID0+IHtcbiAgICBpZiAoIWFjdFJlcSB8fCBhY3RSZXEudHlwZSAhPT0gJ2N1c3RvbScpIHtcbiAgICAgIHJldHVybiBudWxsIGFzIHVua25vd24gYXMgQ3VzdG9tQ29tcG9uZW50VHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIChhY3RSZXEgYXMgQ3VzdG9tQWN0aW9uUmVxdWVzdClcbiAgICAgIC5Db21wb25lbnQgYXMgdW5rbm93biBhcyBDdXN0b21Db21wb25lbnRUeXBlO1xuICB9LCBbYWN0UmVxXSk7XG5cbiAgY29uc3QgdW5rbm93bk1zZyA9IHtcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgY29udGVudDogJ1Vua25vd24gbWVzc2FnZS4nLFxuICAgIHNlbGY6IGZhbHNlLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2VzfSByZWY9e21zZ1JlZn0+XG4gICAgICAgIHttZXNzYWdlcy5tYXAoKG1zZyk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XG4gICAgICAgICAgaWYgKG1zZy50eXBlID09PSAndGV4dCcgfHwgbXNnLnR5cGUgPT09ICdqc3gnKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TXVpTWVzc2FnZVxuICAgICAgICAgICAgICAgIGtleT17bWVzc2FnZXMuaW5kZXhPZihtc2cpfVxuICAgICAgICAgICAgICAgIGlkPXtgY3UtbXNnLSR7bWVzc2FnZXMuaW5kZXhPZihtc2cpICsgMX1gfVxuICAgICAgICAgICAgICAgIG1lc3NhZ2U9e21zZ31cbiAgICAgICAgICAgICAgICBzaG93RGF0ZVRpbWU9eyEhY2hhdEN0bC5nZXRPcHRpb24oKS5zaG93RGF0ZVRpbWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE11aU1lc3NhZ2VcbiAgICAgICAgICAgICAga2V5PXttZXNzYWdlcy5pbmRleE9mKG1zZyl9XG4gICAgICAgICAgICAgIGlkPXtgY3UtbXNnLSR7bWVzc2FnZXMuaW5kZXhPZihtc2cpICsgMX1gfVxuICAgICAgICAgICAgICBtZXNzYWdlPXt1bmtub3duTXNnfVxuICAgICAgICAgICAgICBzaG93RGF0ZVRpbWU9eyEhY2hhdEN0bC5nZXRPcHRpb24oKS5zaG93RGF0ZVRpbWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb259PlxuICAgICAgICB7YWN0UmVxICYmIGFjdFJlcS50eXBlID09PSAndGV4dCcgJiYgKFxuICAgICAgICAgIDxNdWlUZXh0SW5wdXRcbiAgICAgICAgICAgIGNoYXRDb250cm9sbGVyPXtjaGF0Q3RsfVxuICAgICAgICAgICAgYWN0aW9uUmVxdWVzdD17YWN0UmVxIGFzIFRleHRBY3Rpb25SZXF1ZXN0fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHthY3RSZXEgJiYgYWN0UmVxLnR5cGUgPT09ICdzZWxlY3QnICYmIChcbiAgICAgICAgICA8TXVpU2VsZWN0SW5wdXRcbiAgICAgICAgICAgIGNoYXRDb250cm9sbGVyPXtjaGF0Q3RsfVxuICAgICAgICAgICAgYWN0aW9uUmVxdWVzdD17YWN0UmVxIGFzIFNlbGVjdEFjdGlvblJlcXVlc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2FjdFJlcSAmJiBhY3RSZXEudHlwZSA9PT0gJ211bHRpLXNlbGVjdCcgJiYgKFxuICAgICAgICAgIDxNdWlNdWx0aVNlbGVjdElucHV0XG4gICAgICAgICAgICBjaGF0Q29udHJvbGxlcj17Y2hhdEN0bH1cbiAgICAgICAgICAgIGFjdGlvblJlcXVlc3Q9e2FjdFJlcSBhcyBNdWx0aVNlbGVjdEFjdGlvblJlcXVlc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2FjdFJlcSAmJiBhY3RSZXEudHlwZSA9PT0gJ2ZpbGUnICYmIChcbiAgICAgICAgICA8TXVpRmlsZUlucHV0XG4gICAgICAgICAgICBjaGF0Q29udHJvbGxlcj17Y2hhdEN0bH1cbiAgICAgICAgICAgIGFjdGlvblJlcXVlc3Q9e2FjdFJlcSBhcyBGaWxlQWN0aW9uUmVxdWVzdH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7YWN0UmVxICYmIGFjdFJlcS50eXBlID09PSAnYXVkaW8nICYmIChcbiAgICAgICAgICA8TXVpQXVkaW9JbnB1dFxuICAgICAgICAgICAgY2hhdENvbnRyb2xsZXI9e2NoYXRDdGx9XG4gICAgICAgICAgICBhY3Rpb25SZXF1ZXN0PXthY3RSZXEgYXMgQXVkaW9BY3Rpb25SZXF1ZXN0fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHthY3RSZXEgJiYgYWN0UmVxLnR5cGUgPT09ICdjdXN0b20nICYmIChcbiAgICAgICAgICA8Q3VzdG9tQ29tcG9uZW50XG4gICAgICAgICAgICBjaGF0Q29udHJvbGxlcj17Y2hhdEN0bH1cbiAgICAgICAgICAgIGFjdGlvblJlcXVlc3Q9e2FjdFJlcSBhcyBDdXN0b21BY3Rpb25SZXF1ZXN0fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ==