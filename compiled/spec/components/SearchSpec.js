import App from '../../src/components/App.js';

describe('Search', function () {
  var {
    Simulate,
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    scryRenderedDOMComponentsWithClass
  } = React.addons.TestUtils;

  var app, searchYouTubeStub;

  xdescribe('when rendering live data from YouTube', function () {
    beforeEach(function () {
      searchYouTubeStub = sinon.stub();
      searchYouTubeStub.onCall(0).yields(window.fakeVideoData);
      searchYouTubeStub.onCall(1).yields(window.moreFakeVideoData);

      app = renderIntoDocument(React.createElement(App, { searchYouTube: searchYouTubeStub }));
    });

    it('should load live data when app is initialized', function () {
      var videoEntryTitleElements = scryRenderedDOMComponentsWithClass(app, 'video-list-entry-title');
      videoEntryTitleElements.forEach((videoEntryTitle, i) => {
        expect(videoEntryTitle.innerHTML).to.equal(fakeVideoData[i].snippet.title);
      });
    });

    it('should update the video list when typing into the input box', function () {
      var videoEntryTitleElements = scryRenderedDOMComponentsWithClass(app, 'video-list-entry-title');
      videoEntryTitleElements.forEach((videoEntryTitle, i) => {
        expect(videoEntryTitle.innerHTML).to.equal(fakeVideoData[i].snippet.title);
      });

      var searchInputElement = findRenderedDOMComponentWithClass(app, 'form-control');
      Simulate.change(searchInputElement, { target: { value: 'React tutorial' } });

      var newVideoEntryTitleElements = scryRenderedDOMComponentsWithClass(app, 'video-list-entry-title');
      newVideoEntryTitleElements.forEach((videoEntryTitle, i) => {
        expect(videoEntryTitle.innerHTML).to.equal(moreFakeVideoData[i].snippet.title);
      });
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NwZWMvY29tcG9uZW50cy9TZWFyY2hTcGVjLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJkZXNjcmliZSIsIlNpbXVsYXRlIiwicmVuZGVySW50b0RvY3VtZW50IiwiZmluZFJlbmRlcmVkRE9NQ29tcG9uZW50V2l0aENsYXNzIiwic2NyeVJlbmRlcmVkRE9NQ29tcG9uZW50c1dpdGhDbGFzcyIsIlJlYWN0IiwiYWRkb25zIiwiVGVzdFV0aWxzIiwiYXBwIiwic2VhcmNoWW91VHViZVN0dWIiLCJ4ZGVzY3JpYmUiLCJiZWZvcmVFYWNoIiwic2lub24iLCJzdHViIiwib25DYWxsIiwieWllbGRzIiwid2luZG93IiwiZmFrZVZpZGVvRGF0YSIsIm1vcmVGYWtlVmlkZW9EYXRhIiwiaXQiLCJ2aWRlb0VudHJ5VGl0bGVFbGVtZW50cyIsImZvckVhY2giLCJ2aWRlb0VudHJ5VGl0bGUiLCJpIiwiZXhwZWN0IiwiaW5uZXJIVE1MIiwidG8iLCJlcXVhbCIsInNuaXBwZXQiLCJ0aXRsZSIsInNlYXJjaElucHV0RWxlbWVudCIsImNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwibmV3VmlkZW9FbnRyeVRpdGxlRWxlbWVudHMiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEdBQVAsTUFBZ0IsNkJBQWhCOztBQUVBQyxTQUFVLFFBQVYsRUFBb0IsWUFBVztBQUM3QixNQUFJO0FBQ0ZDLFlBREU7QUFFRkMsc0JBRkU7QUFHRkMscUNBSEU7QUFJRkM7QUFKRSxNQUtBQyxNQUFNQyxNQUFOLENBQWFDLFNBTGpCOztBQU9BLE1BQUlDLEdBQUosRUFBU0MsaUJBQVQ7O0FBRUFDLFlBQVUsdUNBQVYsRUFBbUQsWUFBVztBQUM1REMsZUFBVyxZQUFXO0FBQ3BCRiwwQkFBb0JHLE1BQU1DLElBQU4sRUFBcEI7QUFDQUosd0JBQWtCSyxNQUFsQixDQUF5QixDQUF6QixFQUE0QkMsTUFBNUIsQ0FBbUNDLE9BQU9DLGFBQTFDO0FBQ0FSLHdCQUFrQkssTUFBbEIsQ0FBeUIsQ0FBekIsRUFBNEJDLE1BQTVCLENBQW1DQyxPQUFPRSxpQkFBMUM7O0FBRUFWLFlBQU1OLG1CQUNKLG9CQUFDLEdBQUQsSUFBSyxlQUFlTyxpQkFBcEIsR0FESSxDQUFOO0FBR0QsS0FSRDs7QUFVQVUsT0FBRywrQ0FBSCxFQUFvRCxZQUFXO0FBQzdELFVBQUlDLDBCQUEwQmhCLG1DQUFtQ0ksR0FBbkMsRUFBd0Msd0JBQXhDLENBQTlCO0FBQ0FZLDhCQUF3QkMsT0FBeEIsQ0FBZ0MsQ0FBQ0MsZUFBRCxFQUFrQkMsQ0FBbEIsS0FBd0I7QUFDdERDLGVBQU9GLGdCQUFnQkcsU0FBdkIsRUFBa0NDLEVBQWxDLENBQXFDQyxLQUFyQyxDQUEyQ1YsY0FBY00sQ0FBZCxFQUFpQkssT0FBakIsQ0FBeUJDLEtBQXBFO0FBQ0QsT0FGRDtBQUdELEtBTEQ7O0FBT0FWLE9BQUcsNkRBQUgsRUFBa0UsWUFBVztBQUMzRSxVQUFJQywwQkFBMEJoQixtQ0FBbUNJLEdBQW5DLEVBQXdDLHdCQUF4QyxDQUE5QjtBQUNBWSw4QkFBd0JDLE9BQXhCLENBQWdDLENBQUNDLGVBQUQsRUFBa0JDLENBQWxCLEtBQXdCO0FBQ3REQyxlQUFPRixnQkFBZ0JHLFNBQXZCLEVBQWtDQyxFQUFsQyxDQUFxQ0MsS0FBckMsQ0FBMkNWLGNBQWNNLENBQWQsRUFBaUJLLE9BQWpCLENBQXlCQyxLQUFwRTtBQUNELE9BRkQ7O0FBSUEsVUFBSUMscUJBQXFCM0Isa0NBQWtDSyxHQUFsQyxFQUF1QyxjQUF2QyxDQUF6QjtBQUNBUCxlQUFTOEIsTUFBVCxDQUFnQkQsa0JBQWhCLEVBQW9DLEVBQUNFLFFBQVEsRUFBQ0MsT0FBTyxnQkFBUixFQUFULEVBQXBDOztBQUVBLFVBQUlDLDZCQUE2QjlCLG1DQUFtQ0ksR0FBbkMsRUFBd0Msd0JBQXhDLENBQWpDO0FBQ0EwQixpQ0FBMkJiLE9BQTNCLENBQW1DLENBQUNDLGVBQUQsRUFBa0JDLENBQWxCLEtBQXdCO0FBQ3pEQyxlQUFPRixnQkFBZ0JHLFNBQXZCLEVBQWtDQyxFQUFsQyxDQUFxQ0MsS0FBckMsQ0FBMkNULGtCQUFrQkssQ0FBbEIsRUFBcUJLLE9BQXJCLENBQTZCQyxLQUF4RTtBQUNELE9BRkQ7QUFHRCxLQWJEO0FBY0QsR0FoQ0Q7QUFpQ0QsQ0EzQ0QiLCJmaWxlIjoiU2VhcmNoU3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvQXBwLmpzJztcblxuZGVzY3JpYmUgKCdTZWFyY2gnLCBmdW5jdGlvbigpIHtcbiAgdmFyIHtcbiAgICBTaW11bGF0ZSxcbiAgICByZW5kZXJJbnRvRG9jdW1lbnQsXG4gICAgZmluZFJlbmRlcmVkRE9NQ29tcG9uZW50V2l0aENsYXNzLFxuICAgIHNjcnlSZW5kZXJlZERPTUNvbXBvbmVudHNXaXRoQ2xhc3NcbiAgfSA9IFJlYWN0LmFkZG9ucy5UZXN0VXRpbHM7XG5cbiAgdmFyIGFwcCwgc2VhcmNoWW91VHViZVN0dWI7XG4gIFxuICB4ZGVzY3JpYmUoJ3doZW4gcmVuZGVyaW5nIGxpdmUgZGF0YSBmcm9tIFlvdVR1YmUnLCBmdW5jdGlvbigpIHtcbiAgICBiZWZvcmVFYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgc2VhcmNoWW91VHViZVN0dWIgPSBzaW5vbi5zdHViKCk7XG4gICAgICBzZWFyY2hZb3VUdWJlU3R1Yi5vbkNhbGwoMCkueWllbGRzKHdpbmRvdy5mYWtlVmlkZW9EYXRhKTtcbiAgICAgIHNlYXJjaFlvdVR1YmVTdHViLm9uQ2FsbCgxKS55aWVsZHMod2luZG93Lm1vcmVGYWtlVmlkZW9EYXRhKTtcblxuICAgICAgYXBwID0gcmVuZGVySW50b0RvY3VtZW50KFxuICAgICAgICA8QXBwIHNlYXJjaFlvdVR1YmU9e3NlYXJjaFlvdVR1YmVTdHVifSAvPlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgbG9hZCBsaXZlIGRhdGEgd2hlbiBhcHAgaXMgaW5pdGlhbGl6ZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB2aWRlb0VudHJ5VGl0bGVFbGVtZW50cyA9IHNjcnlSZW5kZXJlZERPTUNvbXBvbmVudHNXaXRoQ2xhc3MoYXBwLCAndmlkZW8tbGlzdC1lbnRyeS10aXRsZScpO1xuICAgICAgdmlkZW9FbnRyeVRpdGxlRWxlbWVudHMuZm9yRWFjaCgodmlkZW9FbnRyeVRpdGxlLCBpKSA9PiB7XG4gICAgICAgIGV4cGVjdCh2aWRlb0VudHJ5VGl0bGUuaW5uZXJIVE1MKS50by5lcXVhbChmYWtlVmlkZW9EYXRhW2ldLnNuaXBwZXQudGl0bGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgXG4gICAgaXQoJ3Nob3VsZCB1cGRhdGUgdGhlIHZpZGVvIGxpc3Qgd2hlbiB0eXBpbmcgaW50byB0aGUgaW5wdXQgYm94JywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdmlkZW9FbnRyeVRpdGxlRWxlbWVudHMgPSBzY3J5UmVuZGVyZWRET01Db21wb25lbnRzV2l0aENsYXNzKGFwcCwgJ3ZpZGVvLWxpc3QtZW50cnktdGl0bGUnKTtcbiAgICAgIHZpZGVvRW50cnlUaXRsZUVsZW1lbnRzLmZvckVhY2goKHZpZGVvRW50cnlUaXRsZSwgaSkgPT4ge1xuICAgICAgICBleHBlY3QodmlkZW9FbnRyeVRpdGxlLmlubmVySFRNTCkudG8uZXF1YWwoZmFrZVZpZGVvRGF0YVtpXS5zbmlwcGV0LnRpdGxlKTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgc2VhcmNoSW5wdXRFbGVtZW50ID0gZmluZFJlbmRlcmVkRE9NQ29tcG9uZW50V2l0aENsYXNzKGFwcCwgJ2Zvcm0tY29udHJvbCcpO1xuICAgICAgU2ltdWxhdGUuY2hhbmdlKHNlYXJjaElucHV0RWxlbWVudCwge3RhcmdldDoge3ZhbHVlOiAnUmVhY3QgdHV0b3JpYWwnfX0pO1xuXG4gICAgICB2YXIgbmV3VmlkZW9FbnRyeVRpdGxlRWxlbWVudHMgPSBzY3J5UmVuZGVyZWRET01Db21wb25lbnRzV2l0aENsYXNzKGFwcCwgJ3ZpZGVvLWxpc3QtZW50cnktdGl0bGUnKTtcbiAgICAgIG5ld1ZpZGVvRW50cnlUaXRsZUVsZW1lbnRzLmZvckVhY2goKHZpZGVvRW50cnlUaXRsZSwgaSkgPT4ge1xuICAgICAgICBleHBlY3QodmlkZW9FbnRyeVRpdGxlLmlubmVySFRNTCkudG8uZXF1YWwobW9yZUZha2VWaWRlb0RhdGFbaV0uc25pcHBldC50aXRsZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdfQ==