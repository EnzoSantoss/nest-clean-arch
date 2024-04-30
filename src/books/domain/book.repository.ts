export interface IBookRepository {
  create(input: any, user: any);
  delete(book_id: string);
}
