import { Button, Divider, List, ListItem, ListItemIcon, Typography, makeStyles } from '@material-ui/core';
import { AttachFile as AttachFileIcon, Folder as FolderIcon, Send as SendIcon } from '@material-ui/icons';
import React from 'react';
const useStyles = makeStyles(theme => ({
  container: {
    flex: '1 1 auto',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      flex: '0 0 auto',
      maxWidth: '100%'
    },
    '& > * + *': {
      marginTop: theme.spacing(1)
    }
  },
  buttons: {
    display: 'flex',
    '& > *': {
      flex: '1 1 auto',
      minWidth: 0
    },
    '& > * + *': {
      marginLeft: theme.spacing(1)
    }
  }
}));
export function MuiFileInput({
  chatController,
  actionRequest
}) {
  const classes = useStyles();
  const chatCtl = chatController;
  const [files, setFiles] = React.useState([]);
  const handleFileChange = React.useCallback(fileList => {
    // Convert FileList to File[]
    const fileArray = [];

    if (fileList) {
      for (let i = 0; i < fileList.length; i += 1) {
        const file = fileList.item(i);

        if (file) {
          fileArray.push(file);
        }
      }
    }

    setFiles(fileArray);
  }, []);
  const setResponse = React.useCallback(() => {
    if (files.length > 0) {
      const value = files.map(f => f.name).toString();
      const res = {
        type: 'file',
        value,
        files
      };
      chatCtl.setActionResponse(actionRequest, res);
    }
  }, [actionRequest, chatCtl, files]);
  const sendButtonText = actionRequest.sendButtonText ? actionRequest.sendButtonText : 'Send';
  return /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React.createElement(List, null, files.map(f => /*#__PURE__*/React.createElement("div", {
    key: `${f.name}-${f.size}`
  }, /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(ListItem, {
    key: f.name
  }, /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(AttachFileIcon, null)), /*#__PURE__*/React.createElement(Typography, {
    style: {
      overflowWrap: 'break-word',
      minWidth: 0
    }
  }, f.name))))), /*#__PURE__*/React.createElement("div", {
    className: classes.buttons
  }, /*#__PURE__*/React.createElement(Button, {
    disabled: false,
    component: "label",
    variant: "contained",
    color: "primary",
    startIcon: /*#__PURE__*/React.createElement(FolderIcon, null)
  }, "Select file", /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: actionRequest.accept,
    multiple: actionRequest.multiple,
    onChange: e => handleFileChange(e.target.files),
    style: {
      display: 'none'
    }
  })), /*#__PURE__*/React.createElement(Button, {
    type: "button",
    onClick: setResponse,
    disabled: files.length === 0,
    variant: "contained",
    color: "primary",
    startIcon: /*#__PURE__*/React.createElement(SendIcon, null)
  }, sendButtonText)));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tdWkvTXVpRmlsZUlucHV0LnRzeCJdLCJuYW1lcyI6WyJCdXR0b24iLCJEaXZpZGVyIiwiTGlzdCIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1JY29uIiwiVHlwb2dyYXBoeSIsIm1ha2VTdHlsZXMiLCJBdHRhY2hGaWxlIiwiQXR0YWNoRmlsZUljb24iLCJGb2xkZXIiLCJGb2xkZXJJY29uIiwiU2VuZCIsIlNlbmRJY29uIiwiUmVhY3QiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsImNvbnRhaW5lciIsImZsZXgiLCJtYXhXaWR0aCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwic3BhY2luZyIsImJ1dHRvbnMiLCJtaW5XaWR0aCIsIm1hcmdpbkxlZnQiLCJNdWlGaWxlSW5wdXQiLCJjaGF0Q29udHJvbGxlciIsImFjdGlvblJlcXVlc3QiLCJjbGFzc2VzIiwiY2hhdEN0bCIsImZpbGVzIiwic2V0RmlsZXMiLCJ1c2VTdGF0ZSIsImhhbmRsZUZpbGVDaGFuZ2UiLCJ1c2VDYWxsYmFjayIsImZpbGVMaXN0IiwiZmlsZUFycmF5IiwiaSIsImxlbmd0aCIsImZpbGUiLCJpdGVtIiwicHVzaCIsInNldFJlc3BvbnNlIiwidmFsdWUiLCJtYXAiLCJmIiwibmFtZSIsInRvU3RyaW5nIiwicmVzIiwidHlwZSIsInNldEFjdGlvblJlc3BvbnNlIiwic2VuZEJ1dHRvblRleHQiLCJzaXplIiwib3ZlcmZsb3dXcmFwIiwiYWNjZXB0IiwibXVsdGlwbGUiLCJlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiQUFBQSxTQUNFQSxNQURGLEVBRUVDLE9BRkYsRUFHRUMsSUFIRixFQUlFQyxRQUpGLEVBS0VDLFlBTEYsRUFPRUMsVUFQRixFQVFFQyxVQVJGLFFBU08sbUJBVFA7QUFVQSxTQUNFQyxVQUFVLElBQUlDLGNBRGhCLEVBRUVDLE1BQU0sSUFBSUMsVUFGWixFQUdFQyxJQUFJLElBQUlDLFFBSFYsUUFJTyxvQkFKUDtBQUtBLE9BQU9DLEtBQVAsTUFBa0IsT0FBbEI7QUFLQSxNQUFNQyxTQUFTLEdBQUdSLFVBQVUsQ0FBRVMsS0FBRCxLQUFtQjtBQUM5Q0MsRUFBQUEsU0FBUyxFQUFFO0FBQ1RDLElBQUFBLElBQUksRUFBRSxVQURHO0FBRVRDLElBQUFBLFFBQVEsRUFBRSxNQUZEO0FBR1RDLElBQUFBLE9BQU8sRUFBRSxNQUhBO0FBSVRDLElBQUFBLGFBQWEsRUFBRSxRQUpOO0FBS1QsYUFBUztBQUNQSCxNQUFBQSxJQUFJLEVBQUUsVUFEQztBQUVQQyxNQUFBQSxRQUFRLEVBQUU7QUFGSCxLQUxBO0FBU1QsaUJBQWE7QUFDWEcsTUFBQUEsU0FBUyxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBYyxDQUFkO0FBREE7QUFUSixHQURtQztBQWM5Q0MsRUFBQUEsT0FBTyxFQUFFO0FBQ1BKLElBQUFBLE9BQU8sRUFBRSxNQURGO0FBRVAsYUFBUztBQUNQRixNQUFBQSxJQUFJLEVBQUUsVUFEQztBQUVQTyxNQUFBQSxRQUFRLEVBQUU7QUFGSCxLQUZGO0FBTVAsaUJBQWE7QUFDWEMsTUFBQUEsVUFBVSxFQUFFVixLQUFLLENBQUNPLE9BQU4sQ0FBYyxDQUFkO0FBREQ7QUFOTjtBQWRxQyxDQUFuQixDQUFELENBQTVCO0FBMEJBLE9BQU8sU0FBU0ksWUFBVCxDQUFzQjtBQUMzQkMsRUFBQUEsY0FEMkI7QUFFM0JDLEVBQUFBO0FBRjJCLENBQXRCLEVBTWdCO0FBQ3JCLFFBQU1DLE9BQU8sR0FBR2YsU0FBUyxFQUF6QjtBQUNBLFFBQU1nQixPQUFPLEdBQUdILGNBQWhCO0FBQ0EsUUFBTSxDQUFDSSxLQUFELEVBQVFDLFFBQVIsSUFBb0JuQixLQUFLLENBQUNvQixRQUFOLENBQXVCLEVBQXZCLENBQTFCO0FBRUEsUUFBTUMsZ0JBQWdCLEdBQUdyQixLQUFLLENBQUNzQixXQUFOLENBQ3RCQyxRQUFELElBQXFDO0FBQ25DO0FBQ0EsVUFBTUMsU0FBaUIsR0FBRyxFQUExQjs7QUFDQSxRQUFJRCxRQUFKLEVBQWM7QUFDWixXQUFLLElBQUlFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLFFBQVEsQ0FBQ0csTUFBN0IsRUFBcUNELENBQUMsSUFBSSxDQUExQyxFQUE2QztBQUMzQyxjQUFNRSxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjSCxDQUFkLENBQWI7O0FBQ0EsWUFBSUUsSUFBSixFQUFVO0FBQ1JILFVBQUFBLFNBQVMsQ0FBQ0ssSUFBVixDQUFlRixJQUFmO0FBQ0Q7QUFDRjtBQUNGOztBQUNEUixJQUFBQSxRQUFRLENBQUNLLFNBQUQsQ0FBUjtBQUNELEdBYnNCLEVBY3ZCLEVBZHVCLENBQXpCO0FBaUJBLFFBQU1NLFdBQVcsR0FBRzlCLEtBQUssQ0FBQ3NCLFdBQU4sQ0FBa0IsTUFBWTtBQUNoRCxRQUFJSixLQUFLLENBQUNRLE1BQU4sR0FBZSxDQUFuQixFQUFzQjtBQUNwQixZQUFNSyxLQUFLLEdBQUdiLEtBQUssQ0FBQ2MsR0FBTixDQUFXQyxDQUFELElBQU9BLENBQUMsQ0FBQ0MsSUFBbkIsRUFBeUJDLFFBQXpCLEVBQWQ7QUFDQSxZQUFNQyxHQUF1QixHQUFHO0FBQUVDLFFBQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCTixRQUFBQSxLQUFoQjtBQUF1QmIsUUFBQUE7QUFBdkIsT0FBaEM7QUFDQUQsTUFBQUEsT0FBTyxDQUFDcUIsaUJBQVIsQ0FBMEJ2QixhQUExQixFQUF5Q3FCLEdBQXpDO0FBQ0Q7QUFDRixHQU5tQixFQU1qQixDQUFDckIsYUFBRCxFQUFnQkUsT0FBaEIsRUFBeUJDLEtBQXpCLENBTmlCLENBQXBCO0FBUUEsUUFBTXFCLGNBQWMsR0FBR3hCLGFBQWEsQ0FBQ3dCLGNBQWQsR0FDbkJ4QixhQUFhLENBQUN3QixjQURLLEdBRW5CLE1BRko7QUFJQSxzQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFFdkIsT0FBTyxDQUFDYjtBQUF4QixrQkFDRSxvQkFBQyxJQUFELFFBQ0dlLEtBQUssQ0FBQ2MsR0FBTixDQUFXQyxDQUFELGlCQUNUO0FBQUssSUFBQSxHQUFHLEVBQUcsR0FBRUEsQ0FBQyxDQUFDQyxJQUFLLElBQUdELENBQUMsQ0FBQ08sSUFBSztBQUE5QixrQkFDRSxvQkFBQyxPQUFELE9BREYsZUFFRSxvQkFBQyxRQUFEO0FBQVUsSUFBQSxHQUFHLEVBQUVQLENBQUMsQ0FBQ0M7QUFBakIsa0JBQ0Usb0JBQUMsWUFBRCxxQkFDRSxvQkFBQyxjQUFELE9BREYsQ0FERixlQUlFLG9CQUFDLFVBQUQ7QUFBWSxJQUFBLEtBQUssRUFBRTtBQUFFTyxNQUFBQSxZQUFZLEVBQUUsWUFBaEI7QUFBOEI5QixNQUFBQSxRQUFRLEVBQUU7QUFBeEM7QUFBbkIsS0FDR3NCLENBQUMsQ0FBQ0MsSUFETCxDQUpGLENBRkYsQ0FERCxDQURILENBREYsZUFpQkU7QUFBSyxJQUFBLFNBQVMsRUFBRWxCLE9BQU8sQ0FBQ047QUFBeEIsa0JBQ0Usb0JBQUMsTUFBRDtBQUNFLElBQUEsUUFBUSxFQUFFLEtBRFo7QUFFRSxJQUFBLFNBQVMsRUFBQyxPQUZaO0FBR0UsSUFBQSxPQUFPLEVBQUMsV0FIVjtBQUlFLElBQUEsS0FBSyxFQUFDLFNBSlI7QUFLRSxJQUFBLFNBQVMsZUFBRSxvQkFBQyxVQUFEO0FBTGIsaUNBUUU7QUFDRSxJQUFBLElBQUksRUFBQyxNQURQO0FBRUUsSUFBQSxNQUFNLEVBQUVLLGFBQWEsQ0FBQzJCLE1BRnhCO0FBR0UsSUFBQSxRQUFRLEVBQUUzQixhQUFhLENBQUM0QixRQUgxQjtBQUlFLElBQUEsUUFBUSxFQUFHQyxDQUFELElBQWF2QixnQkFBZ0IsQ0FBQ3VCLENBQUMsQ0FBQ0MsTUFBRixDQUFTM0IsS0FBVixDQUp6QztBQUtFLElBQUEsS0FBSyxFQUFFO0FBQUVaLE1BQUFBLE9BQU8sRUFBRTtBQUFYO0FBTFQsSUFSRixDQURGLGVBaUJFLG9CQUFDLE1BQUQ7QUFDRSxJQUFBLElBQUksRUFBQyxRQURQO0FBRUUsSUFBQSxPQUFPLEVBQUV3QixXQUZYO0FBR0UsSUFBQSxRQUFRLEVBQUVaLEtBQUssQ0FBQ1EsTUFBTixLQUFpQixDQUg3QjtBQUlFLElBQUEsT0FBTyxFQUFDLFdBSlY7QUFLRSxJQUFBLEtBQUssRUFBQyxTQUxSO0FBTUUsSUFBQSxTQUFTLGVBQUUsb0JBQUMsUUFBRDtBQU5iLEtBUUdhLGNBUkgsQ0FqQkYsQ0FqQkYsQ0FERjtBQWdERCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJ1dHRvbixcbiAgRGl2aWRlcixcbiAgTGlzdCxcbiAgTGlzdEl0ZW0sXG4gIExpc3RJdGVtSWNvbixcbiAgVGhlbWUsXG4gIFR5cG9ncmFwaHksXG4gIG1ha2VTdHlsZXMsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7XG4gIEF0dGFjaEZpbGUgYXMgQXR0YWNoRmlsZUljb24sXG4gIEZvbGRlciBhcyBGb2xkZXJJY29uLFxuICBTZW5kIGFzIFNlbmRJY29uLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ2hhdENvbnRyb2xsZXIgfSBmcm9tICcuLi9jaGF0LWNvbnRyb2xsZXInO1xuaW1wb3J0IHsgRmlsZUFjdGlvblJlcXVlc3QsIEZpbGVBY3Rpb25SZXNwb25zZSB9IGZyb20gJy4uL2NoYXQtdHlwZXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+ICh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGZsZXg6ICcxIDEgYXV0bycsXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgJyYgPiAqJzoge1xuICAgICAgZmxleDogJzAgMCBhdXRvJyxcbiAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgICAnJiA+ICogKyAqJzoge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIH0sXG4gIH0sXG4gIGJ1dHRvbnM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgJyYgPiAqJzoge1xuICAgICAgZmxleDogJzEgMSBhdXRvJyxcbiAgICAgIG1pbldpZHRoOiAwLFxuICAgIH0sXG4gICAgJyYgPiAqICsgKic6IHtcbiAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGZ1bmN0aW9uIE11aUZpbGVJbnB1dCh7XG4gIGNoYXRDb250cm9sbGVyLFxuICBhY3Rpb25SZXF1ZXN0LFxufToge1xuICBjaGF0Q29udHJvbGxlcjogQ2hhdENvbnRyb2xsZXI7XG4gIGFjdGlvblJlcXVlc3Q6IEZpbGVBY3Rpb25SZXF1ZXN0O1xufSk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgY2hhdEN0bCA9IGNoYXRDb250cm9sbGVyO1xuICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IFJlYWN0LnVzZVN0YXRlPEZpbGVbXT4oW10pO1xuXG4gIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZmlsZUxpc3Q6IEZpbGVMaXN0IHwgbnVsbCk6IHZvaWQgPT4ge1xuICAgICAgLy8gQ29udmVydCBGaWxlTGlzdCB0byBGaWxlW11cbiAgICAgIGNvbnN0IGZpbGVBcnJheTogRmlsZVtdID0gW107XG4gICAgICBpZiAoZmlsZUxpc3QpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlTGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IGZpbGUgPSBmaWxlTGlzdC5pdGVtKGkpO1xuICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICBmaWxlQXJyYXkucHVzaChmaWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNldEZpbGVzKGZpbGVBcnJheSk7XG4gICAgfSxcbiAgICBbXSxcbiAgKTtcblxuICBjb25zdCBzZXRSZXNwb25zZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpOiB2b2lkID0+IHtcbiAgICBpZiAoZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBmaWxlcy5tYXAoKGYpID0+IGYubmFtZSkudG9TdHJpbmcoKTtcbiAgICAgIGNvbnN0IHJlczogRmlsZUFjdGlvblJlc3BvbnNlID0geyB0eXBlOiAnZmlsZScsIHZhbHVlLCBmaWxlcyB9O1xuICAgICAgY2hhdEN0bC5zZXRBY3Rpb25SZXNwb25zZShhY3Rpb25SZXF1ZXN0LCByZXMpO1xuICAgIH1cbiAgfSwgW2FjdGlvblJlcXVlc3QsIGNoYXRDdGwsIGZpbGVzXSk7XG5cbiAgY29uc3Qgc2VuZEJ1dHRvblRleHQgPSBhY3Rpb25SZXF1ZXN0LnNlbmRCdXR0b25UZXh0XG4gICAgPyBhY3Rpb25SZXF1ZXN0LnNlbmRCdXR0b25UZXh0XG4gICAgOiAnU2VuZCc7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgPExpc3Q+XG4gICAgICAgIHtmaWxlcy5tYXAoKGYpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17YCR7Zi5uYW1lfS0ke2Yuc2l6ZX1gfT5cbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtmLm5hbWV9PlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgIDxBdHRhY2hGaWxlSWNvbiAvPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3sgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcsIG1pbldpZHRoOiAwIH19PlxuICAgICAgICAgICAgICAgIHtmLm5hbWV9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgey8qIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17Zi5uYW1lfSAvPiAqL31cbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9MaXN0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uc30+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XG4gICAgICAgICAgY29tcG9uZW50PVwibGFiZWxcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgc3RhcnRJY29uPXs8Rm9sZGVySWNvbiAvPn1cbiAgICAgICAgPlxuICAgICAgICAgIFNlbGVjdCBmaWxlXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICBhY2NlcHQ9e2FjdGlvblJlcXVlc3QuYWNjZXB0fVxuICAgICAgICAgICAgbXVsdGlwbGU9e2FjdGlvblJlcXVlc3QubXVsdGlwbGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpOiB2b2lkID0+IGhhbmRsZUZpbGVDaGFuZ2UoZS50YXJnZXQuZmlsZXMpfVxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXtzZXRSZXNwb25zZX1cbiAgICAgICAgICBkaXNhYmxlZD17ZmlsZXMubGVuZ3RoID09PSAwfVxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgc3RhcnRJY29uPXs8U2VuZEljb24gLz59XG4gICAgICAgID5cbiAgICAgICAgICB7c2VuZEJ1dHRvblRleHR9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0=