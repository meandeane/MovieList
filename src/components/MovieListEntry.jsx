var MovieListEntry = ({movie}) => (
  <div className="movie-list-entry media">
    {/* <div className="media-left media-middle">
      <img className="media-object" src="https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg" alt="" />
    </div> */}
    <div className="media-body">
      <div className="movie-list-entry-title">{movie.title}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
MovieListEntry.propTypes = {
  movie: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default MovieListEntry;
