interface ISearchFunc {
  (a: string, b: string): boolean;
}
const fun1: ISearchFunc = (a: string, b: string) => {
  return a.search(b) !== -1;
};

fun1("123", "1");
