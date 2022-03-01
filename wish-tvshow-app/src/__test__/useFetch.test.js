import { renderHook, act } from '@testing-library/react-hooks';

import useFetch from '../hooks/useFetch';

const handlePromise = () => {
  let deferred;
  const promise = new Promise((resolve, reject) => {
    deferred = { resolve, reject };
  });
  return { deferred, promise };
};

describe('useFetch', () => {
  it('fetches data by the url', async () => {
    global.fetch = jest.fn();
    await act(async () =>
      renderHook(() => useFetch('https://api.tvmaze.com/shows/1'))
    );
    expect(global.fetch).toBeCalledWith(`https://api.tvmaze.com/shows/1`);
  });
  it('check if it is loading before getting the data', async () => {
    const { deferred, promise } = handlePromise();

    global.fetch = jest.fn(() => promise);
    const { result, waitForNextUpdate } = renderHook(useFetch);

    expect(result.current.isLoading).toBe(true);

    deferred.resolve();
    await waitForNextUpdate();
    expect(result.current.isLoading).toBe(false);
  });

  it('handles error', async () => {
    global.fetch = jest.fn(() => {
      return new Promise(() => {
        throw Error();
      });
    });
    const { result, waitForNextUpdate } = renderHook(useFetch);
    await waitForNextUpdate();
    expect(result.current.error).toBe(true);
  });

  it('fetches data successfully', async () => {
    const { deferred, promise } = handlePromise();

    global.fetch = jest.fn(() => promise);
    const { result, waitForNextUpdate } = renderHook(useFetch);

    deferred.resolve({
      json: () => ({
        name: 'Under the Dome',
      }),
    });
    await waitForNextUpdate();

    expect(result.current.data).toStrictEqual({ name: 'Under the Dome' });
  });
});
