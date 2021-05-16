import urls from './routes';

const checkForValidResponse = resp => {
  if (!resp.ok) throw new Error('womp');
};

export const fetchBooksFaker = async () => {
  const response = await fetch(urls.books);
  checkForValidResponse(response);
  const { data } = await response.json();
  return data;
};
