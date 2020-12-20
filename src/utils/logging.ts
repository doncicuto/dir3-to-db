export const showErrorMessage = (error: Error): void => {
  console.error(error.message);
};

export const showMessage = (message: string): void => {
  console.log(message);
};
