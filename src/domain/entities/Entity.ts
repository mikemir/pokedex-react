import IUid from "../interfaces/IUid";

export class Entity implements IUid {
  id: number;

  constructor(id: number = 0) {
    this.id = id > 0 ? id : this.generateId();
  }

  generateId(): number {
    return Math.floor(Math.random() * 1000000);
  }
}
