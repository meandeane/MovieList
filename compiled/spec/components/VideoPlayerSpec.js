import VideoPlayer from '../../src/components/VideoPlayer.js';

describe('VideoPlayer', function () {
  var {
    renderIntoDocument,
    findRenderedDOMComponentWithClass
  } = React.addons.TestUtils;

  var cuteCatVideo, superCuteCatVideo, hackReactorVideo;

  // In order to leverage React's test utility function `findRenderedDOMComponentWithClass`
  // for stateless functional components, we must wrap them in a class component
  // Wrapper.jsx defined a Wrapper component to use in our tests
  // Read more here: https://github.com/facebook/react/issues/4972

  beforeEach(function () {
    cuteCatVideo = renderIntoDocument(React.createElement(
      Wrapper,
      null,
      React.createElement(VideoPlayer, { video: window.fakeVideoData[0] })
    ));

    superCuteCatVideo = renderIntoDocument(React.createElement(
      Wrapper,
      null,
      React.createElement(VideoPlayer, { video: window.fakeVideoData[1] })
    ));

    hackReactorVideo = renderIntoDocument(React.createElement(
      Wrapper,
      null,
      React.createElement(VideoPlayer, { video: window.fakeVideoData[2] })
    ));
  });

  it('should be a stateless functional component', function () {
    expect(React.Component.isPrototypeOf(VideoPlayer)).to.be.false;
  });

  it('should dynamically render a video', function () {
    var cuteCatVideoIFrameElement = findRenderedDOMComponentWithClass(cuteCatVideo, 'embed-responsive-item');
    var superCuteCatVideoIFrameElement = findRenderedDOMComponentWithClass(superCuteCatVideo, 'embed-responsive-item');
    var hackReactorVideoIFrameElement = findRenderedDOMComponentWithClass(hackReactorVideo, 'embed-responsive-item');

    expect(cuteCatVideoIFrameElement.src).to.equal('https://www.youtube.com/embed/000001');
    expect(superCuteCatVideoIFrameElement.src).to.equal('https://www.youtube.com/embed/000002');
    expect(hackReactorVideoIFrameElement.src).to.equal('https://www.youtube.com/embed/000003');
  });

  it('should dynamically render a video\'s title', function () {
    var cuteCatVideoTitleElement = findRenderedDOMComponentWithClass(cuteCatVideo, 'video-player-details');
    var superCuteCatVideoTitleElement = findRenderedDOMComponentWithClass(superCuteCatVideo, 'video-player-details');
    var hackReactorVideoTitleElement = findRenderedDOMComponentWithClass(hackReactorVideo, 'video-player-details');

    expect(cuteCatVideoTitleElement.children[0].innerHTML).to.equal('Cute cat video');
    expect(superCuteCatVideoTitleElement.children[0].innerHTML).to.equal('Super cute cat video');
    expect(hackReactorVideoTitleElement.children[0].innerHTML).to.equal('Hack Reactor opens extension school on Mars');
  });

  it('should dynamically render a video\'s description', function () {
    var cuteCatVideoDescriptionElement = findRenderedDOMComponentWithClass(cuteCatVideo, 'video-player-details');
    var superCuteCatVideoDescriptionElement = findRenderedDOMComponentWithClass(superCuteCatVideo, 'video-player-details');
    var hackReactorVideoDescriptionElement = findRenderedDOMComponentWithClass(hackReactorVideo, 'video-player-details');

    expect(cuteCatVideoDescriptionElement.children[1].innerHTML).to.equal('The best cat video on the internet!');
    expect(superCuteCatVideoDescriptionElement.children[1].innerHTML).to.equal('Better than the best cat video on the internet!');
    expect(hackReactorVideoDescriptionElement.children[1].innerHTML).to.equal('Watch the ribbon cutting of the first coding bootcamp in space');
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NwZWMvY29tcG9uZW50cy9WaWRlb1BsYXllclNwZWMuanN4Il0sIm5hbWVzIjpbIlZpZGVvUGxheWVyIiwiZGVzY3JpYmUiLCJyZW5kZXJJbnRvRG9jdW1lbnQiLCJmaW5kUmVuZGVyZWRET01Db21wb25lbnRXaXRoQ2xhc3MiLCJSZWFjdCIsImFkZG9ucyIsIlRlc3RVdGlscyIsImN1dGVDYXRWaWRlbyIsInN1cGVyQ3V0ZUNhdFZpZGVvIiwiaGFja1JlYWN0b3JWaWRlbyIsImJlZm9yZUVhY2giLCJ3aW5kb3ciLCJmYWtlVmlkZW9EYXRhIiwiaXQiLCJleHBlY3QiLCJDb21wb25lbnQiLCJpc1Byb3RvdHlwZU9mIiwidG8iLCJiZSIsImZhbHNlIiwiY3V0ZUNhdFZpZGVvSUZyYW1lRWxlbWVudCIsInN1cGVyQ3V0ZUNhdFZpZGVvSUZyYW1lRWxlbWVudCIsImhhY2tSZWFjdG9yVmlkZW9JRnJhbWVFbGVtZW50Iiwic3JjIiwiZXF1YWwiLCJjdXRlQ2F0VmlkZW9UaXRsZUVsZW1lbnQiLCJzdXBlckN1dGVDYXRWaWRlb1RpdGxlRWxlbWVudCIsImhhY2tSZWFjdG9yVmlkZW9UaXRsZUVsZW1lbnQiLCJjaGlsZHJlbiIsImlubmVySFRNTCIsImN1dGVDYXRWaWRlb0Rlc2NyaXB0aW9uRWxlbWVudCIsInN1cGVyQ3V0ZUNhdFZpZGVvRGVzY3JpcHRpb25FbGVtZW50IiwiaGFja1JlYWN0b3JWaWRlb0Rlc2NyaXB0aW9uRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixxQ0FBeEI7O0FBRUFDLFNBQVUsYUFBVixFQUF5QixZQUFXO0FBQ2xDLE1BQUk7QUFDRkMsc0JBREU7QUFFRkM7QUFGRSxNQUdBQyxNQUFNQyxNQUFOLENBQWFDLFNBSGpCOztBQUtBLE1BQUlDLFlBQUosRUFBa0JDLGlCQUFsQixFQUFxQ0MsZ0JBQXJDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQyxhQUFXLFlBQVc7QUFDcEJILG1CQUFl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QUFDRCxHQVJEO0FBU0QsQ0FsRUQiLCJmaWxlIjoiVmlkZW9QbGF5ZXJTcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZGVvUGxheWVyIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLmpzJztcblxuZGVzY3JpYmUgKCdWaWRlb1BsYXllcicsIGZ1bmN0aW9uKCkge1xuICB2YXIge1xuICAgIHJlbmRlckludG9Eb2N1bWVudCxcbiAgICBmaW5kUmVuZGVyZWRET01Db21wb25lbnRXaXRoQ2xhc3NcbiAgfSA9IFJlYWN0LmFkZG9ucy5UZXN0VXRpbHM7XG4gIFxuICB2YXIgY3V0ZUNhdFZpZGVvLCBzdXBlckN1dGVDYXRWaWRlbywgaGFja1JlYWN0b3JWaWRlbztcblxuICAvLyBJbiBvcmRlciB0byBsZXZlcmFnZSBSZWFjdCdzIHRlc3QgdXRpbGl0eSBmdW5jdGlvbiBgZmluZFJlbmRlcmVkRE9NQ29tcG9uZW50V2l0aENsYXNzYFxuICAvLyBmb3Igc3RhdGVsZXNzIGZ1bmN0aW9uYWwgY29tcG9uZW50cywgd2UgbXVzdCB3cmFwIHRoZW0gaW4gYSBjbGFzcyBjb21wb25lbnRcbiAgLy8gV3JhcHBlci5qc3ggZGVmaW5lZCBhIFdyYXBwZXIgY29tcG9uZW50IHRvIHVzZSBpbiBvdXIgdGVzdHNcbiAgLy8gUmVhZCBtb3JlIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvNDk3MlxuXG4gIGJlZm9yZUVhY2goZnVuY3Rpb24oKSB7XG4gICAgY3V0ZUNhdFZpZGVvID0gcmVuZGVySW50b0RvY3VtZW50KFxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxWaWRlb1BsYXllciB2aWRlbz17d2luZG93LmZha2VWaWRlb0RhdGFbMF19IC8+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcblxuICAgIHN1cGVyQ3V0ZUNhdFZpZGVvID0gcmVuZGVySW50b0RvY3VtZW50KFxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxWaWRlb1BsYXllciB2aWRlbz17d2luZG93LmZha2VWaWRlb0RhdGFbMV19IC8+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcblxuICAgIGhhY2tSZWFjdG9yVmlkZW8gPSByZW5kZXJJbnRvRG9jdW1lbnQoXG4gICAgICA8V3JhcHBlcj5cbiAgICAgICAgPFZpZGVvUGxheWVyIHZpZGVvPXt3aW5kb3cuZmFrZVZpZGVvRGF0YVsyXX0gLz5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGJlIGEgc3RhdGVsZXNzIGZ1bmN0aW9uYWwgY29tcG9uZW50JywgZnVuY3Rpb24oKSB7XG4gICAgZXhwZWN0KFJlYWN0LkNvbXBvbmVudC5pc1Byb3RvdHlwZU9mKFZpZGVvUGxheWVyKSkudG8uYmUuZmFsc2U7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgZHluYW1pY2FsbHkgcmVuZGVyIGEgdmlkZW8nLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgY3V0ZUNhdFZpZGVvSUZyYW1lRWxlbWVudCA9IGZpbmRSZW5kZXJlZERPTUNvbXBvbmVudFdpdGhDbGFzcyhjdXRlQ2F0VmlkZW8sICdlbWJlZC1yZXNwb25zaXZlLWl0ZW0nKTtcbiAgICB2YXIgc3VwZXJDdXRlQ2F0VmlkZW9JRnJhbWVFbGVtZW50ID0gZmluZFJlbmRlcmVkRE9NQ29tcG9uZW50V2l0aENsYXNzKHN1cGVyQ3V0ZUNhdFZpZGVvLCAnZW1iZWQtcmVzcG9uc2l2ZS1pdGVtJyk7XG4gICAgdmFyIGhhY2tSZWFjdG9yVmlkZW9JRnJhbWVFbGVtZW50ID0gZmluZFJlbmRlcmVkRE9NQ29tcG9uZW50V2l0aENsYXNzKGhhY2tSZWFjdG9yVmlkZW8sICdlbWJlZC1yZXNwb25zaXZlLWl0ZW0nKTtcblxuICAgIGV4cGVjdChjdXRlQ2F0VmlkZW9JRnJhbWVFbGVtZW50LnNyYykudG8uZXF1YWwoJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLzAwMDAwMScpO1xuICAgIGV4cGVjdChzdXBlckN1dGVDYXRWaWRlb0lGcmFtZUVsZW1lbnQuc3JjKS50by5lcXVhbCgnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvMDAwMDAyJyk7XG4gICAgZXhwZWN0KGhhY2tSZWFjdG9yVmlkZW9JRnJhbWVFbGVtZW50LnNyYykudG8uZXF1YWwoJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLzAwMDAwMycpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGR5bmFtaWNhbGx5IHJlbmRlciBhIHZpZGVvXFwncyB0aXRsZScsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBjdXRlQ2F0VmlkZW9UaXRsZUVsZW1lbnQgPSBmaW5kUmVuZGVyZWRET01Db21wb25lbnRXaXRoQ2xhc3MoY3V0ZUNhdFZpZGVvLCAndmlkZW8tcGxheWVyLWRldGFpbHMnKTtcbiAgICB2YXIgc3VwZXJDdXRlQ2F0VmlkZW9UaXRsZUVsZW1lbnQgPSBmaW5kUmVuZGVyZWRET01Db21wb25lbnRXaXRoQ2xhc3Moc3VwZXJDdXRlQ2F0VmlkZW8sICd2aWRlby1wbGF5ZXItZGV0YWlscycpO1xuICAgIHZhciBoYWNrUmVhY3RvclZpZGVvVGl0bGVFbGVtZW50ID0gZmluZFJlbmRlcmVkRE9NQ29tcG9uZW50V2l0aENsYXNzKGhhY2tSZWFjdG9yVmlkZW8sICd2aWRlby1wbGF5ZXItZGV0YWlscycpO1xuXG4gICAgZXhwZWN0KGN1dGVDYXRWaWRlb1RpdGxlRWxlbWVudC5jaGlsZHJlblswXS5pbm5lckhUTUwpLnRvLmVxdWFsKCdDdXRlIGNhdCB2aWRlbycpO1xuICAgIGV4cGVjdChzdXBlckN1dGVDYXRWaWRlb1RpdGxlRWxlbWVudC5jaGlsZHJlblswXS5pbm5lckhUTUwpLnRvLmVxdWFsKCdTdXBlciBjdXRlIGNhdCB2aWRlbycpO1xuICAgIGV4cGVjdChoYWNrUmVhY3RvclZpZGVvVGl0bGVFbGVtZW50LmNoaWxkcmVuWzBdLmlubmVySFRNTCkudG8uZXF1YWwoJ0hhY2sgUmVhY3RvciBvcGVucyBleHRlbnNpb24gc2Nob29sIG9uIE1hcnMnKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBkeW5hbWljYWxseSByZW5kZXIgYSB2aWRlb1xcJ3MgZGVzY3JpcHRpb24nLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgY3V0ZUNhdFZpZGVvRGVzY3JpcHRpb25FbGVtZW50ID0gZmluZFJlbmRlcmVkRE9NQ29tcG9uZW50V2l0aENsYXNzKGN1dGVDYXRWaWRlbywgJ3ZpZGVvLXBsYXllci1kZXRhaWxzJyk7XG4gICAgdmFyIHN1cGVyQ3V0ZUNhdFZpZGVvRGVzY3JpcHRpb25FbGVtZW50ID0gZmluZFJlbmRlcmVkRE9NQ29tcG9uZW50V2l0aENsYXNzKHN1cGVyQ3V0ZUNhdFZpZGVvLCAndmlkZW8tcGxheWVyLWRldGFpbHMnKTtcbiAgICB2YXIgaGFja1JlYWN0b3JWaWRlb0Rlc2NyaXB0aW9uRWxlbWVudCA9IGZpbmRSZW5kZXJlZERPTUNvbXBvbmVudFdpdGhDbGFzcyhoYWNrUmVhY3RvclZpZGVvLCAndmlkZW8tcGxheWVyLWRldGFpbHMnKTtcblxuICAgIGV4cGVjdChjdXRlQ2F0VmlkZW9EZXNjcmlwdGlvbkVsZW1lbnQuY2hpbGRyZW5bMV0uaW5uZXJIVE1MKS50by5lcXVhbCgnVGhlIGJlc3QgY2F0IHZpZGVvIG9uIHRoZSBpbnRlcm5ldCEnKTtcbiAgICBleHBlY3Qoc3VwZXJDdXRlQ2F0VmlkZW9EZXNjcmlwdGlvbkVsZW1lbnQuY2hpbGRyZW5bMV0uaW5uZXJIVE1MKS50by5lcXVhbCgnQmV0dGVyIHRoYW4gdGhlIGJlc3QgY2F0IHZpZGVvIG9uIHRoZSBpbnRlcm5ldCEnKTtcbiAgICBleHBlY3QoaGFja1JlYWN0b3JWaWRlb0Rlc2NyaXB0aW9uRWxlbWVudC5jaGlsZHJlblsxXS5pbm5lckhUTUwpLnRvLmVxdWFsKCdXYXRjaCB0aGUgcmliYm9uIGN1dHRpbmcgb2YgdGhlIGZpcnN0IGNvZGluZyBib290Y2FtcCBpbiBzcGFjZScpO1xuICB9KTtcbn0pOyJdfQ==