export const debounce = <T extends any[]>(
  func: (...args: T) => void,
  delay: number
): ((this: any, ...args: T) => void) => {
  let timer: NodeJS.Timeout;
  return function (this: any, ...args: T) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

export const serializeParams = (params: { [key: string]: any }) => {
  const queryParams: string[] = [];

  Object.keys(params).forEach((key) => {
    if (
      params[key] === null ||
      params[key] === undefined ||
      (typeof params[key] === "string" && params[key].trim() === "") ||
      (Array.isArray(params[key]) && params[key].length === 0)
    ) {
      return;
    }

    if (Array.isArray(params[key])) {
      queryParams.push(
        `${encodeURIComponent(key)}=${params[key]
          .map(encodeURIComponent)
          .join(",")}`
      );
    } else {
      queryParams.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
      );
    }
  });

  return queryParams.join("&");
};
