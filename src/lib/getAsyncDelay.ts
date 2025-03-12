export const getAsyncDelay = async (delay = 1000) =>
  new Promise((res) => setTimeout(() => res(null), delay));
