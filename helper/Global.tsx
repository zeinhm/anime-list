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
