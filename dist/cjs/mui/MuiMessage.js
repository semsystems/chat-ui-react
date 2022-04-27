"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MuiMessage = MuiMessage;

var _core = require("@material-ui/core");

var _react = _interopRequireDefault(require("react"));

function MuiMessage({
  id,
  message,
  showDateTime
}) {
  if (message.deletedAt) {
    return /*#__PURE__*/_react.default.createElement("div", {
      id: id
    });
  }

  const dispDate = message.updatedAt ? message.updatedAt : message.createdAt;

  const ChatAvator = /*#__PURE__*/_react.default.createElement(_core.Box, {
    minWidth: 0,
    flexShrink: 0,
    ml: message.self ? 1 : 0,
    mr: message.self ? 0 : 1
  }, /*#__PURE__*/_react.default.createElement(_core.Avatar, {
    alt: message.username,
    src: message.avatar
  }));

  const ChatUsername = /*#__PURE__*/_react.default.createElement(_core.Box, {
    maxWidth: "100%",
    mx: 1
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "body2",
    align: message.self ? 'right' : 'left'
  }, message.username));

  const ChatDate = /*#__PURE__*/_react.default.createElement(_core.Box, {
    maxWidth: "100%",
    mx: 1
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "body2",
    align: message.self ? 'right' : 'left',
    color: "textSecondary"
  }, dispDate === null || dispDate === void 0 ? void 0 : dispDate.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  })));

  return /*#__PURE__*/_react.default.createElement(_core.Grow, {
    in: true
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    id: id,
    maxWidth: "100%",
    flex: "0 1 auto",
    my: 1,
    pl: message.self ? '20%' : 0,
    pr: message.self ? 0 : '20%',
    display: "flex",
    justifyContent: message.self ? 'flex-end' : 'flex-start',
    style: {
      overflowWrap: 'break-word'
    }
  }, message.avatar && !message.self && ChatAvator, /*#__PURE__*/_react.default.createElement(_core.Box, {
    minWidth: 0,
    display: "flex",
    flexDirection: "column"
  }, message.username && ChatUsername, /*#__PURE__*/_react.default.createElement(_core.Box, {
    maxWidth: "100%",
    py: 1,
    px: 2,
    bgcolor: message.self ? 'primary.main' : 'background.paper',
    color: message.self ? 'primary.contrastText' : 'text.primary',
    borderRadius: 16,
    boxShadow: 2
  }, message.type === 'text' && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      flex: '0 1 0%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "body1",
    style: {
      overflowWrap: 'break-word',
      whiteSpace: 'pre-wrap',
      display: 'flex',
      alignItems: 'center',
      maxWidth: '510px'
    }
  }, message.content), message.buttons), message.type === 'jsx' && /*#__PURE__*/_react.default.createElement("div", null, message.content)), showDateTime && ChatDate), message.avatar && message.self && ChatAvator));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tdWkvTXVpTWVzc2FnZS50c3giXSwibmFtZXMiOlsiTXVpTWVzc2FnZSIsImlkIiwibWVzc2FnZSIsInNob3dEYXRlVGltZSIsImRlbGV0ZWRBdCIsImRpc3BEYXRlIiwidXBkYXRlZEF0IiwiY3JlYXRlZEF0IiwiQ2hhdEF2YXRvciIsInNlbGYiLCJ1c2VybmFtZSIsImF2YXRhciIsIkNoYXRVc2VybmFtZSIsIkNoYXREYXRlIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiaG91ciIsIm1pbnV0ZSIsIm92ZXJmbG93V3JhcCIsInR5cGUiLCJmbGV4IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwid2hpdGVTcGFjZSIsImNvbnRlbnQiLCJidXR0b25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFJTyxTQUFTQSxVQUFULENBQW9CO0FBQ3pCQyxFQUFBQSxFQUR5QjtBQUV6QkMsRUFBQUEsT0FGeUI7QUFHekJDLEVBQUFBO0FBSHlCLENBQXBCLEVBUWdCO0FBQ3JCLE1BQUlELE9BQU8sQ0FBQ0UsU0FBWixFQUF1QjtBQUNyQix3QkFBTztBQUFLLE1BQUEsRUFBRSxFQUFFSDtBQUFULE1BQVA7QUFDRDs7QUFFRCxRQUFNSSxRQUFRLEdBQUdILE9BQU8sQ0FBQ0ksU0FBUixHQUFvQkosT0FBTyxDQUFDSSxTQUE1QixHQUF3Q0osT0FBTyxDQUFDSyxTQUFqRTs7QUFFQSxRQUFNQyxVQUFVLGdCQUNkLDZCQUFDLFNBQUQ7QUFDRSxJQUFBLFFBQVEsRUFBRSxDQURaO0FBRUUsSUFBQSxVQUFVLEVBQUUsQ0FGZDtBQUdFLElBQUEsRUFBRSxFQUFFTixPQUFPLENBQUNPLElBQVIsR0FBZSxDQUFmLEdBQW1CLENBSHpCO0FBSUUsSUFBQSxFQUFFLEVBQUVQLE9BQU8sQ0FBQ08sSUFBUixHQUFlLENBQWYsR0FBbUI7QUFKekIsa0JBTUUsNkJBQUMsWUFBRDtBQUFRLElBQUEsR0FBRyxFQUFFUCxPQUFP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VSxFQUFFLFVBQTFDO0FBQXNESCxNQUFBQSxPQUFPLEVBQUUsTUFBL0Q7QUFBdUVFLE1BQUFBLFVBQVUsRUFBRTtBQUFuRjtBQUZULEtBR0twQixPQUFPLENBQUNzQixPQUhiLENBREYsRUFNR3RCLE9BQU8sQ0FBQ3VCLE9BTlgsQ0FWSixFQW1CR3ZCLE9BQU8sQ0FBQ2dCLElBQVIsS0FBaUIsS0FBakIsaUJBQTBCLDBDQUFNaEIsT0FBTyxDQUFDc0IsT0FBZCxDQW5CN0IsQ0FGRixFQXVCR3JCLFlBQVksSUFBSVUsUUF2Qm5CLENBWkYsRUFxQ0dYLE9BQU8sQ0FBQ1MsTUFBUixJQUFrQlQsT0FBTyxDQUFDTyxJQUExQixJQUFrQ0QsVUFyQ3JDLENBREYsQ0FERjtBQTJDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF2YXRhciwgQm94LCBHcm93LCBUeXBvZ3JhcGh5LCBCdXR0b24sIFRoZW1lLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTWVzc2FnZSwgTWVzc2FnZUNvbnRlbnQgfSBmcm9tICcuLi9jaGF0LXR5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIE11aU1lc3NhZ2Uoe1xuICBpZCxcbiAgbWVzc2FnZSxcbiAgc2hvd0RhdGVUaW1lLFxufToge1xuICBpZDogc3RyaW5nO1xuICBtZXNzYWdlOiBNZXNzYWdlPE1lc3NhZ2VDb250ZW50PjtcbiAgc2hvd0RhdGVUaW1lOiBib29sZWFuO1xufSk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGlmIChtZXNzYWdlLmRlbGV0ZWRBdCkge1xuICAgIHJldHVybiA8ZGl2IGlkPXtpZH0gLz47XG4gIH1cblxuICBjb25zdCBkaXNwRGF0ZSA9IG1lc3NhZ2UudXBkYXRlZEF0ID8gbWVzc2FnZS51cGRhdGVkQXQgOiBtZXNzYWdlLmNyZWF0ZWRBdDtcblxuICBjb25zdCBDaGF0QXZhdG9yID0gKFxuICAgIDxCb3hcbiAgICAgIG1pbldpZHRoPXswfVxuICAgICAgZmxleFNocmluaz17MH1cbiAgICAgIG1sPXttZXNzYWdlLnNlbGYgPyAxIDogMH1cbiAgICAgIG1yPXttZXNzYWdlLnNlbGYgPyAwIDogMX1cbiAgICA+XG4gICAgICA8QXZhdGFyIGFsdD17bWVzc2FnZS51c2VybmFtZX0gc3JjPXttZXNzYWdlLmF2YXRhcn0gLz5cbiAgICA8L0JveD5cbiAgKTtcblxuICBjb25zdCBDaGF0VXNlcm5hbWUgPSAoXG4gICAgPEJveCBtYXhXaWR0aD1cIjEwMCVcIiBteD17MX0+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBhbGlnbj17bWVzc2FnZS5zZWxmID8gJ3JpZ2h0JyA6ICdsZWZ0J30+XG4gICAgICAgIHttZXNzYWdlLnVzZXJuYW1lfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIDwvQm94PlxuICApO1xuXG4gIGNvbnN0IENoYXREYXRlID0gKFxuICAgIDxCb3ggbWF4V2lkdGg9XCIxMDAlXCIgbXg9ezF9PlxuICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcbiAgICAgICAgYWxpZ249e21lc3NhZ2Uuc2VsZiA/ICdyaWdodCcgOiAnbGVmdCd9XG4gICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXG4gICAgICA+XG4gICAgICAgIHtkaXNwRGF0ZT8udG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7XG4gICAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgICB9KX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICA8L0JveD5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxHcm93IGluPlxuICAgICAgPEJveFxuICAgICAgICBpZD17aWR9XG4gICAgICAgIG1heFdpZHRoPVwiMTAwJVwiXG4gICAgICAgIGZsZXg9XCIwIDEgYXV0b1wiXG4gICAgICAgIG15PXsxfVxuICAgICAgICBwbD17bWVzc2FnZS5zZWxmID8gJzIwJScgOiAwfVxuICAgICAgICBwcj17bWVzc2FnZS5zZWxmID8gMCA6ICcyMCUnfVxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGp1c3RpZnlDb250ZW50PXttZXNzYWdlLnNlbGYgPyAnZmxleC1lbmQnIDogJ2ZsZXgtc3RhcnQnfVxuICAgICAgICBzdHlsZT17eyBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyB9fVxuICAgICAgPlxuICAgICAgICB7bWVzc2FnZS5hdmF0YXIgJiYgIW1lc3NhZ2Uuc2VsZiAmJiBDaGF0QXZhdG9yfVxuICAgICAgICA8Qm94IG1pbldpZHRoPXswfSBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICB7bWVzc2FnZS51c2VybmFtZSAmJiBDaGF0VXNlcm5hbWV9XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgbWF4V2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIHB5PXsxfVxuICAgICAgICAgICAgcHg9ezJ9XG4gICAgICAgICAgICBiZ2NvbG9yPXttZXNzYWdlLnNlbGYgPyAncHJpbWFyeS5tYWluJyA6ICdiYWNrZ3JvdW5kLnBhcGVyJ31cbiAgICAgICAgICAgIGNvbG9yPXttZXNzYWdlLnNlbGYgPyAncHJpbWFyeS5jb250cmFzdFRleHQnIDogJ3RleHQucHJpbWFyeSd9XG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9ezE2fVxuICAgICAgICAgICAgYm94U2hhZG93PXsyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHttZXNzYWdlLnR5cGUgPT09ICd0ZXh0JyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OiAnMCAxIDAlJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnLCB3aGl0ZVNwYWNlOiAncHJlLXdyYXAnLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XG4gICAgICAgICAgICAgICAgICAgIHttZXNzYWdlLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIHttZXNzYWdlLmJ1dHRvbnN9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHttZXNzYWdlLnR5cGUgPT09ICdqc3gnICYmIDxkaXY+e21lc3NhZ2UuY29udGVudH08L2Rpdj59XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAge3Nob3dEYXRlVGltZSAmJiBDaGF0RGF0ZX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIHttZXNzYWdlLmF2YXRhciAmJiBtZXNzYWdlLnNlbGYgJiYgQ2hhdEF2YXRvcn1cbiAgICAgIDwvQm94PlxuICAgIDwvR3Jvdz5cbiAgKTtcbn1cbiJdfQ==