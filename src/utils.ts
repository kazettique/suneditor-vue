/**
 * @description Check the object is empty
 * @function isEmptyObject
 * @param {Record<string, any>} obj
 * @returns {boolean}
 * @ref https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
 */
export function isEmptyObject(obj: Record<string, any>): boolean {
  // because Object.keys(new Date()).length === 0;
  // we have to do some additional check
  return (
    obj && // 👈 null and undefined check
    Object.keys(obj).length === 0 &&
    Object.getPrototypeOf(obj) === Object.prototype
  );
}
