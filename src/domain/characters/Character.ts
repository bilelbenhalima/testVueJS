export class Character {
  constructor(
    public id: number,
    public name: string,
    public status: string,
    public species: string,
    public gender: string,
    public origin: { name: string },
    public location: { name: string },
    public image: string,
    public episode: Array<string>,
  ) {}
}
