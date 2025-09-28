import { BookInterface } from "../model/book-interface/book";

export namespace BookAction {

  export class getAllBookServices {
    static readonly type = '[Book] allbooking';
    // constructor(public payload: Book) { }
  }

  export class RemoveBookService {
    static readonly type = '[Book] Remove Book Service';
    constructor(public payload: string) { }
  }

  export class ViewBookService {
    static readonly type = '[Book] View';
    constructor(public id: number) { }
  }
}
