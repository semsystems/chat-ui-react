"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatController = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

class ChatController {
  constructor(option) {
    (0, _defineProperty2.default)(this, "state", void 0);
    (0, _defineProperty2.default)(this, "defaultOption", {
      delay: 300
    });
    (0, _defineProperty2.default)(this, "emptyAction", {
      request: {
        type: 'empty'
      },
      responses: [],
      onResnponsed: []
    });
    (0, _defineProperty2.default)(this, "defaultActionRequest", {
      always: false,
      addMessage: true
    });
    this.state = {
      option: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, this.defaultOption), option),
      messages: [],
      action: this.emptyAction,
      actionHistory: [],
      onMessagesChanged: [],
      onActionChanged: []
    };
  }

  addMessage(message) {
    return new Promise(resolve => {
      setTimeout(() => {
        const len = this.state.messages.push(message);
        const idx = len - 1;
        this.state.messages[idx].createdAt = new Date();
        this.callOnMessagesChanged();
        resolve(idx);
      }, this.state.option.delay);
    });
  }

  updateMessage(index, message) {
    if (message !== this.state.messages[index]) {
      const {
        createdAt
      } = this.state.messages[index];
      this.state.messages[index] = message;
      this.state.messages[index].createdAt = createdAt;
    }

    this.state.messages[index].updatedAt = new Date();
    this.callOnMessagesChanged();
  }

  removeMessage(index) {
    this.state.messages[index].deletedAt = new Date();
    this.callOnMessagesChanged();
  }

  getMessages() {
    return this.state.messages;
  }

  setMessages(messages) {
    this.clearMessages();
    this.state.messages = [...messages];
    this.callOnMessagesChanged();
  }

  clearMessages() {
    this.state.messages = [];
    this.callOnMessagesChanged();
  }

  callOnMessagesChanged() {
    this.state.onMessagesChanged.map(h => h(this.state.messages));
  }

  addOnMessagesChanged(callback) {
    this.state.onMessagesChanged.push(callback);
  }

  removeOnMessagesChanged(callback) {
    const idx = this.state.onMessagesChanged.indexOf(callback); // eslint-disable-next-line @typescript-eslint/no-empty-function

    this.state.onActionChanged[idx] = () => {};
  }

  setActionRequest(request, onResponse) {
    const action = {
      request: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, this.defaultActionRequest), request),
      responses: [],
      onResnponsed: []
    }; // See setActionResponse method

    return new Promise((resolve, reject) => {
      if (!request.always) {
        const returnResponse = response => {
          if (!response.error) {
            resolve(response);
          } else {
            reject(response.error);
          }
        };

        action.onResnponsed.push(returnResponse);
      }

      if (onResponse) {
        action.onResnponsed.push(onResponse);
      }

      this.state.action = action;
      this.state.actionHistory.push(action);
      this.callOnActionChanged(action.request);

      if (request.always) {
        resolve({
          type: 'text',
          value: 'dummy'
        });
      }
    });
  }

  cancelActionRequest() {
    this.state.action = this.emptyAction;
    this.callOnActionChanged(this.emptyAction.request);
  }

  getActionRequest() {
    const {
      request,
      responses
    } = this.state.action;

    if (!request.always && responses.length > 0) {
      return undefined;
    }

    return request;
  }

  async setActionResponse(request, response) {
    const {
      request: origReq,
      responses,
      onResnponsed
    } = this.state.action;

    if (request !== origReq) {
      throw new Error('Invalid action.');
    }

    if (!request.always && onResnponsed.length === 0) {
      throw new Error('onResponsed is not set.');
    }

    responses.push(response);
    this.callOnActionChanged(request, response);

    if (request.addMessage) {
      await this.addMessage({
        type: 'text',
        content: response.value,
        self: true
      });
    }

    onResnponsed.map(h => h(response));
  }

  getActionResponses() {
    return this.state.action.responses;
  }

  callOnActionChanged(request, response) {
    this.state.onActionChanged.map(h => h(request, response));
  }

  addOnActionChanged(callback) {
    this.state.onActionChanged.push(callback);
  }

  removeOnActionChanged(callback) {
    const idx = this.state.onActionChanged.indexOf(callback); // eslint-disable-next-line @typescript-eslint/no-empty-function

    this.state.onActionChanged[idx] = () => {};
  }

  getOption() {
    return this.state.option;
  }

}

exports.ChatController = ChatController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGF0LWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiQ2hhdENvbnRyb2xsZXIiLCJjb25zdHJ1Y3RvciIsIm9wdGlvbiIsImRlbGF5IiwicmVxdWVzdCIsInR5cGUiLCJyZXNwb25zZXMiLCJvblJlc25wb25zZWQiLCJhbHdheXMiLCJhZGRNZXNzYWdlIiwic3RhdGUiLCJkZWZhdWx0T3B0aW9uIiwibWVzc2FnZXMiLCJhY3Rpb24iLCJlbXB0eUFjdGlvbiIsImFjdGlvbkhpc3RvcnkiLCJvbk1lc3NhZ2VzQ2hhbmdlZCIsIm9uQWN0aW9uQ2hhbmdlZCIsIm1lc3NhZ2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJsZW4iLCJwdXNoIiwiaWR4IiwiY3JlYXRlZEF0IiwiRGF0ZSIsImNhbGxPbk1lc3NhZ2VzQ2hhbmdlZCIsInVwZGF0ZU1lc3NhZ2UiLCJpbmRleCIsInVwZGF0ZWRBdCIsInJlbW92ZU1lc3NhZ2UiLCJkZWxldGVkQXQiLCJnZXRNZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiY2xlYXJNZXNzYWdlcyIsIm1hcCIsImgiLCJhZGRPbk1lc3NhZ2VzQ2hhbmdlZCIsImNhbGxiYWNrIiwicmVtb3ZlT25NZXNzYWdlc0NoYW5nZWQiLCJpbmRleE9mIiwic2V0QWN0aW9uUmVxdWVzdCIsIm9uUmVzcG9uc2UiLCJkZWZhdWx0QWN0aW9uUmVxdWVzdCIsInJlamVjdCIsInJldHVyblJlc3BvbnNlIiwicmVzcG9uc2UiLCJlcnJvciIsImNhbGxPbkFjdGlvbkNoYW5nZWQiLCJ2YWx1ZSIsImNhbmNlbEFjdGlvblJlcXVlc3QiLCJnZXRBY3Rpb25SZXF1ZXN0IiwibGVuZ3RoIiwidW5kZWZpbmVkIiwic2V0QWN0aW9uUmVzcG9uc2UiLCJvcmlnUmVxIiwiRXJyb3IiLCJjb250ZW50Iiwic2VsZiIsImdldEFjdGlvblJlc3BvbnNlcyIsImFkZE9uQWN0aW9uQ2hhbmdlZCIsInJlbW92ZU9uQWN0aW9uQ2hhbmdlZCIsImdl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U0FBSzdCLEtBQUwsQ0FBV08sZUFBWCxDQUEyQk0sSUFBM0IsQ0FBZ0NnQixRQUFoQztBQUNEOztBQUVEdUIsRUFBQUEscUJBQXFCLENBQUN2QixRQUFELEVBQWtDO0FBQ3JELFVBQU1mLEdBQUcsR0FBRyxLQUFLZCxLQUFMLENBQVdPLGVBQVgsQ0FBMkJ3QixPQUEzQixDQUFtQ0YsUUFBbkMsQ0FBWixDQURxRCxDQUVyRDs7QUFDQSxTQUFLN0IsS0FBTCxDQUFXTyxlQUFYLENBQTJCTyxHQUEzQixJQUFrQyxNQUFZLENBQUUsQ0FBaEQ7QUFDRDs7QUFFRHVDLEVBQUFBLFNBQVMsR0FBZTtBQUN0QixXQUFPLEtBQUtyRCxLQUFMLENBQVdSLE1BQWxCO0FBQ0Q7O0FBM0x5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFjdGlvblJlcXVlc3QsXG4gIEFjdGlvblJlc3BvbnNlLFxuICBDaGF0T3B0aW9uLFxuICBNZXNzYWdlLFxuICBNZXNzYWdlQ29udGVudCxcbiAgT25BY3Rpb25DaGFuZ2VkLFxuICBPbkFjdGlvblJlc3BvbnNlZCxcbiAgT25NZXNzYWdlc0NoYW5nZWQsXG59IGZyb20gJy4vY2hhdC10eXBlcyc7XG5cbmludGVyZmFjZSBDaGF0U3RhdGUge1xuICBvcHRpb246IENoYXRPcHRpb247XG4gIG1lc3NhZ2VzOiBNZXNzYWdlPE1lc3NhZ2VDb250ZW50PltdO1xuICBhY3Rpb246IEFjdGlvbjtcbiAgYWN0aW9uSGlzdG9yeTogQWN0aW9uW107XG4gIG9uTWVzc2FnZXNDaGFuZ2VkOiBPbk1lc3NhZ2VzQ2hhbmdlZFtdO1xuICBvbkFjdGlvbkNoYW5nZWQ6IE9uQWN0aW9uQ2hhbmdlZFtdO1xufVxuXG5pbnRlcmZhY2UgQWN0aW9uIHtcbiAgcmVxdWVzdDogQWN0aW9uUmVxdWVzdDtcbiAgcmVzcG9uc2VzOiBBY3Rpb25SZXNwb25zZVtdO1xuICBvblJlc25wb25zZWQ6IE9uQWN0aW9uUmVzcG9uc2VkW107XG59XG5cbmV4cG9ydCBjbGFzcyBDaGF0Q29udHJvbGxlciB7XG4gIHByaXZhdGUgc3RhdGU6IENoYXRTdGF0ZTtcblxuICBwcml2YXRlIGRlZmF1bHRPcHRpb246IENoYXRPcHRpb24gPSB7XG4gICAgZGVsYXk6IDMwMCxcbiAgfTtcblxuICBwcml2YXRlIGVtcHR5QWN0aW9uOiBBY3Rpb24gPSB7XG4gICAgcmVxdWVzdDogeyB0eXBlOiAnZW1wdHknIH0sXG4gICAgcmVzcG9uc2VzOiBbXSxcbiAgICBvblJlc25wb25zZWQ6IFtdLFxuICB9O1xuXG4gIHByaXZhdGUgZGVmYXVsdEFjdGlvblJlcXVlc3QgPSB7XG4gICAgYWx3YXlzOiBmYWxzZSxcbiAgICBhZGRNZXNzYWdlOiB0cnVlLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbj86IENoYXRPcHRpb24pIHtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3B0aW9uOiB7IC4uLnRoaXMuZGVmYXVsdE9wdGlvbiwgLi4ub3B0aW9uIH0sXG4gICAgICBtZXNzYWdlczogW10sXG4gICAgICBhY3Rpb246IHRoaXMuZW1wdHlBY3Rpb24sXG4gICAgICBhY3Rpb25IaXN0b3J5OiBbXSxcbiAgICAgIG9uTWVzc2FnZXNDaGFuZ2VkOiBbXSxcbiAgICAgIG9uQWN0aW9uQ2hhbmdlZDogW10sXG4gICAgfTtcbiAgfVxuXG4gIGFkZE1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZTxNZXNzYWdlQ29udGVudD4pOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxlbiA9IHRoaXMuc3RhdGUubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICAgICAgY29uc3QgaWR4ID0gbGVuIC0gMTtcbiAgICAgICAgdGhpcy5zdGF0ZS5tZXNzYWdlc1tpZHhdLmNyZWF0ZWRBdCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMuY2FsbE9uTWVzc2FnZXNDaGFuZ2VkKCk7XG5cbiAgICAgICAgcmVzb2x2ZShpZHgpO1xuICAgICAgfSwgdGhpcy5zdGF0ZS5vcHRpb24uZGVsYXkpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlTWVzc2FnZShpbmRleDogbnVtYmVyLCBtZXNzYWdlOiBNZXNzYWdlPE1lc3NhZ2VDb250ZW50Pik6IHZvaWQge1xuICAgIGlmIChtZXNzYWdlICE9PSB0aGlzLnN0YXRlLm1lc3NhZ2VzW2luZGV4XSkge1xuICAgICAgY29uc3QgeyBjcmVhdGVkQXQgfSA9IHRoaXMuc3RhdGUubWVzc2FnZXNbaW5kZXhdO1xuICAgICAgdGhpcy5zdGF0ZS5tZXNzYWdlc1tpbmRleF0gPSBtZXNzYWdlO1xuICAgICAgdGhpcy5zdGF0ZS5tZXNzYWdlc1tpbmRleF0uY3JlYXRlZEF0ID0gY3JlYXRlZEF0O1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUubWVzc2FnZXNbaW5kZXhdLnVwZGF0ZWRBdCA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5jYWxsT25NZXNzYWdlc0NoYW5nZWQoKTtcbiAgfVxuXG4gIHJlbW92ZU1lc3NhZ2UoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUubWVzc2FnZXNbaW5kZXhdLmRlbGV0ZWRBdCA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5jYWxsT25NZXNzYWdlc0NoYW5nZWQoKTtcbiAgfVxuXG4gIGdldE1lc3NhZ2VzKCk6IE1lc3NhZ2U8TWVzc2FnZUNvbnRlbnQ+W10ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLm1lc3NhZ2VzO1xuICB9XG5cbiAgc2V0TWVzc2FnZXMobWVzc2FnZXM6IE1lc3NhZ2U8TWVzc2FnZUNvbnRlbnQ+W10pOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyTWVzc2FnZXMoKTtcbiAgICB0aGlzLnN0YXRlLm1lc3NhZ2VzID0gWy4uLm1lc3NhZ2VzXTtcbiAgICB0aGlzLmNhbGxPbk1lc3NhZ2VzQ2hhbmdlZCgpO1xuICB9XG5cbiAgY2xlYXJNZXNzYWdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlLm1lc3NhZ2VzID0gW107XG4gICAgdGhpcy5jYWxsT25NZXNzYWdlc0NoYW5nZWQoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2FsbE9uTWVzc2FnZXNDaGFuZ2VkKCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUub25NZXNzYWdlc0NoYW5nZWQubWFwKChoKSA9PiBoKHRoaXMuc3RhdGUubWVzc2FnZXMpKTtcbiAgfVxuXG4gIGFkZE9uTWVzc2FnZXNDaGFuZ2VkKGNhbGxiYWNrOiBPbk1lc3NhZ2VzQ2hhbmdlZCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUub25NZXNzYWdlc0NoYW5nZWQucHVzaChjYWxsYmFjayk7XG4gIH1cblxuICByZW1vdmVPbk1lc3NhZ2VzQ2hhbmdlZChjYWxsYmFjazogT25NZXNzYWdlc0NoYW5nZWQpOiB2b2lkIHtcbiAgICBjb25zdCBpZHggPSB0aGlzLnN0YXRlLm9uTWVzc2FnZXNDaGFuZ2VkLmluZGV4T2YoY2FsbGJhY2spO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb25cbiAgICB0aGlzLnN0YXRlLm9uQWN0aW9uQ2hhbmdlZFtpZHhdID0gKCk6IHZvaWQgPT4ge307XG4gIH1cblxuICBzZXRBY3Rpb25SZXF1ZXN0PFQgZXh0ZW5kcyBBY3Rpb25SZXF1ZXN0PihcbiAgICByZXF1ZXN0OiBULFxuICAgIG9uUmVzcG9uc2U/OiBPbkFjdGlvblJlc3BvbnNlZCxcbiAgKTogUHJvbWlzZTxBY3Rpb25SZXNwb25zZT4ge1xuICAgIGNvbnN0IGFjdGlvbjogQWN0aW9uID0ge1xuICAgICAgcmVxdWVzdDogeyAuLi50aGlzLmRlZmF1bHRBY3Rpb25SZXF1ZXN0LCAuLi5yZXF1ZXN0IH0sXG4gICAgICByZXNwb25zZXM6IFtdLFxuICAgICAgb25SZXNucG9uc2VkOiBbXSxcbiAgICB9O1xuXG4gICAgLy8gU2VlIHNldEFjdGlvblJlc3BvbnNlIG1ldGhvZFxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXJlcXVlc3QuYWx3YXlzKSB7XG4gICAgICAgIGNvbnN0IHJldHVyblJlc3BvbnNlID0gKHJlc3BvbnNlOiBBY3Rpb25SZXNwb25zZSk6IHZvaWQgPT4ge1xuICAgICAgICAgIGlmICghcmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QocmVzcG9uc2UuZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgYWN0aW9uLm9uUmVzbnBvbnNlZC5wdXNoKHJldHVyblJlc3BvbnNlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uUmVzcG9uc2UpIHtcbiAgICAgICAgYWN0aW9uLm9uUmVzbnBvbnNlZC5wdXNoKG9uUmVzcG9uc2UpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnN0YXRlLmFjdGlvbiA9IGFjdGlvbjtcbiAgICAgIHRoaXMuc3RhdGUuYWN0aW9uSGlzdG9yeS5wdXNoKGFjdGlvbik7XG4gICAgICB0aGlzLmNhbGxPbkFjdGlvbkNoYW5nZWQoYWN0aW9uLnJlcXVlc3QpO1xuXG4gICAgICBpZiAocmVxdWVzdC5hbHdheXMpIHtcbiAgICAgICAgcmVzb2x2ZSh7IHR5cGU6ICd0ZXh0JywgdmFsdWU6ICdkdW1teScgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjYW5jZWxBY3Rpb25SZXF1ZXN0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUuYWN0aW9uID0gdGhpcy5lbXB0eUFjdGlvbjtcbiAgICB0aGlzLmNhbGxPbkFjdGlvbkNoYW5nZWQodGhpcy5lbXB0eUFjdGlvbi5yZXF1ZXN0KTtcbiAgfVxuXG4gIGdldEFjdGlvblJlcXVlc3QoKTogQWN0aW9uUmVxdWVzdCB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgeyByZXF1ZXN0LCByZXNwb25zZXMgfSA9IHRoaXMuc3RhdGUuYWN0aW9uO1xuICAgIGlmICghcmVxdWVzdC5hbHdheXMgJiYgcmVzcG9uc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcXVlc3Q7XG4gIH1cblxuICBhc3luYyBzZXRBY3Rpb25SZXNwb25zZShcbiAgICByZXF1ZXN0OiBBY3Rpb25SZXF1ZXN0LFxuICAgIHJlc3BvbnNlOiBBY3Rpb25SZXNwb25zZSxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgeyByZXF1ZXN0OiBvcmlnUmVxLCByZXNwb25zZXMsIG9uUmVzbnBvbnNlZCB9ID0gdGhpcy5zdGF0ZS5hY3Rpb247XG4gICAgaWYgKHJlcXVlc3QgIT09IG9yaWdSZXEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhY3Rpb24uJyk7XG4gICAgfVxuICAgIGlmICghcmVxdWVzdC5hbHdheXMgJiYgb25SZXNucG9uc2VkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdvblJlc3BvbnNlZCBpcyBub3Qgc2V0LicpO1xuICAgIH1cblxuICAgIHJlc3BvbnNlcy5wdXNoKHJlc3BvbnNlKTtcbiAgICB0aGlzLmNhbGxPbkFjdGlvbkNoYW5nZWQocmVxdWVzdCwgcmVzcG9uc2UpO1xuXG4gICAgaWYgKHJlcXVlc3QuYWRkTWVzc2FnZSkge1xuICAgICAgYXdhaXQgdGhpcy5hZGRNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBjb250ZW50OiByZXNwb25zZS52YWx1ZSxcbiAgICAgICAgc2VsZjogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUmVzbnBvbnNlZC5tYXAoKGgpID0+IGgocmVzcG9uc2UpKTtcbiAgfVxuXG4gIGdldEFjdGlvblJlc3BvbnNlcygpOiBBY3Rpb25SZXNwb25zZVtdIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5hY3Rpb24ucmVzcG9uc2VzO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxsT25BY3Rpb25DaGFuZ2VkKFxuICAgIHJlcXVlc3Q6IEFjdGlvblJlcXVlc3QsXG4gICAgcmVzcG9uc2U/OiBBY3Rpb25SZXNwb25zZSxcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZS5vbkFjdGlvbkNoYW5nZWQubWFwKChoKSA9PiBoKHJlcXVlc3QsIHJlc3BvbnNlKSk7XG4gIH1cblxuICBhZGRPbkFjdGlvbkNoYW5nZWQoY2FsbGJhY2s6IE9uQWN0aW9uQ2hhbmdlZCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUub25BY3Rpb25DaGFuZ2VkLnB1c2goY2FsbGJhY2spO1xuICB9XG5cbiAgcmVtb3ZlT25BY3Rpb25DaGFuZ2VkKGNhbGxiYWNrOiBPbkFjdGlvbkNoYW5nZWQpOiB2b2lkIHtcbiAgICBjb25zdCBpZHggPSB0aGlzLnN0YXRlLm9uQWN0aW9uQ2hhbmdlZC5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uXG4gICAgdGhpcy5zdGF0ZS5vbkFjdGlvbkNoYW5nZWRbaWR4XSA9ICgpOiB2b2lkID0+IHt9O1xuICB9XG5cbiAgZ2V0T3B0aW9uKCk6IENoYXRPcHRpb24ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLm9wdGlvbjtcbiAgfVxufVxuIl19