"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioMediaRecorder = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _audioRecorderPolyfill = _interopRequireDefault(require("audio-recorder-polyfill"));

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
class AudioMediaRecorder {
  static getInstance() {
    if (!this.instance) {
      this.instance = new AudioMediaRecorder();
    }

    return this.instance;
  }

  constructor() {
    (0, _defineProperty2.default)(this, "md", void 0);
    (0, _defineProperty2.default)(this, "recordChunks", void 0);

    if (!window.MediaRecorder) {
      window.MediaRecorder = _audioRecorderPolyfill.default;
    }

    this.recordChunks = [];
  }

  async initialize() {
    if (this.md) {
      return this;
    }

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });
    this.md = new MediaRecorder(stream);
    this.recordChunks = [];
    return this;
  }

  async startRecord() {
    return new Promise(resolve => {
      if (!this.md) {
        throw new Error('Must be initialized.');
      }

      this.recordChunks = [];
      this.md.addEventListener('start', () => {
        resolve();
      }); // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore

      this.md.addEventListener('dataavailable', e => {
        if (e.data.size > 0) {
          this.recordChunks.push(e.data);
        }
      });
      this.md.start();
    });
  }

  async stopRecord() {
    return new Promise(resolve => {
      if (!this.md) {
        throw new Error('Must be initialized.');
      }

      this.md.addEventListener('stop', () => {
        resolve(new Blob(this.recordChunks));
      });
      this.md.stop();
    });
  }

}

exports.AudioMediaRecorder = AudioMediaRecorder;
(0, _defineProperty2.default)(AudioMediaRecorder, "instance", void 0);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hdWRpby1tZWRpYS1yZWNvcmRlci50cyJdLCJuYW1lcyI6WyJBdWRpb01lZGlhUmVjb3JkZXIiLCJnZXRJbnN0YW5jZSIsImluc3RhbmNlIiwiY29uc3RydWN0b3IiLCJ3aW5kb3ciLCJNZWRpYVJlY29yZGVyIiwiQXVkaW9SZWNvcmRlciIsInJlY29yZENodW5rcyIsImluaXRpYWxpemUiLCJtZCIsInN0cmVhbSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwidmlkZW8iLCJzdGFydFJlY29yZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiRXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImRhdGEiLCJzaXplIiwicHVzaCIsInN0YXJ0Iiwic3RvcFJlY29yZCIsIkJsb2IiLCJzdG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBOztBQUZBO0FBQ0E7QUFHTyxNQUFNQSxrQkFBTixDQUF5QjtBQUdaLFNBQVhDLFdBQVcsR0FBdUI7QUFDdkMsUUFBSSxDQUFDLEtBQUtDLFFBQVYsRUFBb0I7QUFDbEIsV0FBS0EsUUFBTCxHQUFnQixJQUFJRixrQkFBSixFQUFoQjtBQUNEOztBQUVELFdBQU8sS0FBS0UsUUFBWjtBQUNEOztBQU1EQyxFQUFBQSxXQUFXLEdBQUc7QUFBQTtBQUFBOztBQUNaLFFBQUksQ0FBQ0MsTUFBTSxDQUFDQyxhQUFaLEVBQTJCO0FBQ3pCRCxNQUFBQSxNQUFNLENBQUNDLGFBQVAsR0FBdUJDLDhCQUF2QjtBQUNEOztBQUNELFNBQUtDLFlBQUwsR0FBb0IsRUFBcEI7QUFDRDs7QUFFZSxRQUFWQyxVQUFVLEdBQWdDO0FBQzlDLFFBQUksS0FBS0MsRUFBVCxFQUFhO0FBQ1gsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBTUMsTUFBTSxHQUFHLE1BQU1DLFNBQVMsQ0FBQ0MsWUFBVixDQUF1QkMsWUFBdkIsQ0FBb0M7QUFDdkRDLE1BQUFBLEtBQUssRUFBRSxJQURnRDtBQUV2REMsTUFBQUEsS0FBSyxFQUFFO0FBRmdELEtBQXBDLENBQXJCO0FBSUEsU0FBS04sRUFBTCxHQUFVLElBQUlKLGFBQUosQ0FBa0JLLE1BQWxCLENBQVY7QUFDQSxTQUFLSCxZQUFMLEdBQW9CLEVBQXBCO0FBRUEsV0FBTyxJQUFQO0FBQ0Q7O0FBRWdCLFFBQVhTLFdBQVcsR0FBa0I7QUFDakMsV0FBTyxJQUFJQyxPQUFKLENBQWFDLE9BQUQsSUFBYTtBQUM5QixVQUFJLENBQUMsS0FBS1QsRUFBVixFQUFjO0FBQ1osY0FBTSxJQUFJVSxLQUFKLENBQVUsc0JBQVYsQ0FBTjtBQUNEOztBQUVELFdBQUtaLFlBQUwsR0FBb0IsRUFBcEI7QUFFQSxXQUFLRSxFQUFMLENBQVFXLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLE1BQU07QUFDdENGLFFBQUFBLE9BQU87QUFDUixPQUZELEVBUDhCLENBVzlCO0FBQ0E7O0FBQ0EsV0FBS1QsRUFBTCxDQUFRVyxnQkFBUixDQUF5QixlQUF6QixFQUEyQ0MsQ0FBRCxJQUFrQjtBQUMxRCxZQUFJQSxDQUFDLENBQUNDLElBQUYsQ0FBT0MsSUFBUCxHQUFjLENBQWxCLEVBQXFCO0FBQ25CLGVBQUtoQixZQUFMLENBQWtCaUIsSUFBbEIsQ0FBdUJILENBQUMsQ0FBQ0MsSUFBekI7QUFDRDtBQUNGLE9BSkQ7QUFNQSxXQUFLYixFQUFMLENBQVFnQixLQUFSO0FBQ0QsS0FwQk0sQ0FBUDtBQXFCRDs7QUFFZSxRQUFWQyxVQUFVLEdBQWtCO0FBQ2hDLFdBQU8sSUFBSVQsT0FBSixDQUFhQyxPQUFELElBQWE7QUFDOUIsVUFBSSxDQUFDLEtBQUtULEVBQVYsRUFBYztBQUNaLGNBQU0sSUFBSVUsS0FBSixDQUFVLHNCQUFWLENBQU47QUFDRDs7QUFFRCxXQUFLVixFQUFMLENBQVFXLGdCQUFSLENBQXlCLE1BQXpCLEVBQWlDLE1BQU07QUFDckNGLFFBQUFBLE9BQU8sQ0FBQyxJQUFJUyxJQUFKLENBQVMsS0FBS3BCLFlBQWQsQ0FBRCxDQUFQO0FBQ0QsT0FGRDtBQUlBLFdBQUtFLEVBQUwsQ0FBUW1CLElBQVI7QUFDRCxLQVZNLENBQVA7QUFXRDs7QUF6RTZCOzs7OEJBQW5CNUIsa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgQXVkaW9SZWNvcmRlciBmcm9tICdhdWRpby1yZWNvcmRlci1wb2x5ZmlsbCc7XG5cbmV4cG9ydCBjbGFzcyBBdWRpb01lZGlhUmVjb3JkZXIge1xuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogQXVkaW9NZWRpYVJlY29yZGVyO1xuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBBdWRpb01lZGlhUmVjb3JkZXIge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBBdWRpb01lZGlhUmVjb3JkZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIHByaXZhdGUgbWQ/OiBNZWRpYVJlY29yZGVyO1xuXG4gIHByaXZhdGUgcmVjb3JkQ2h1bmtzOiBCbG9iW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKCF3aW5kb3cuTWVkaWFSZWNvcmRlcikge1xuICAgICAgd2luZG93Lk1lZGlhUmVjb3JkZXIgPSBBdWRpb1JlY29yZGVyO1xuICAgIH1cbiAgICB0aGlzLnJlY29yZENodW5rcyA9IFtdO1xuICB9XG5cbiAgYXN5bmMgaW5pdGlhbGl6ZSgpOiBQcm9taXNlPEF1ZGlvTWVkaWFSZWNvcmRlcj4ge1xuICAgIGlmICh0aGlzLm1kKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XG4gICAgICBhdWRpbzogdHJ1ZSxcbiAgICAgIHZpZGVvOiBmYWxzZSxcbiAgICB9KTtcbiAgICB0aGlzLm1kID0gbmV3IE1lZGlhUmVjb3JkZXIoc3RyZWFtKTtcbiAgICB0aGlzLnJlY29yZENodW5rcyA9IFtdO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhc3luYyBzdGFydFJlY29yZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmICghdGhpcy5tZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3QgYmUgaW5pdGlhbGl6ZWQuJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVjb3JkQ2h1bmtzID0gW107XG5cbiAgICAgIHRoaXMubWQuYWRkRXZlbnRMaXN0ZW5lcignc3RhcnQnLCAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLm1kLmFkZEV2ZW50TGlzdGVuZXIoJ2RhdGFhdmFpbGFibGUnLCAoZTogQmxvYkV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChlLmRhdGEuc2l6ZSA+IDApIHtcbiAgICAgICAgICB0aGlzLnJlY29yZENodW5rcy5wdXNoKGUuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLm1kLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBzdG9wUmVjb3JkKCk6IFByb21pc2U8QmxvYj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKCF0aGlzLm1kKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBiZSBpbml0aWFsaXplZC4nKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5tZC5hZGRFdmVudExpc3RlbmVyKCdzdG9wJywgKCkgPT4ge1xuICAgICAgICByZXNvbHZlKG5ldyBCbG9iKHRoaXMucmVjb3JkQ2h1bmtzKSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5tZC5zdG9wKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==