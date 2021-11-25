export const transformToDate = (timestampString?: string): string | null | undefined => {
  if (timestampString) {
    const timestamp = timestampString.match(/\d+/g);
    return timestamp && new Date(+timestamp).toLocaleDateString('ru-Ru');
  }
};
