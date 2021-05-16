import './FetchErrorHandler.css';

const FetchErrorHandler = ({ refetchAction }) => (
  <div className="refetch-container">
    <p>Oops! Something went wrong on our end.</p>
    <button className="fetch-button" onClick={() => refetchAction()}>
      Try Again
    </button>
  </div>
);

export default FetchErrorHandler;
