import { Tag } from "../entities/Tag";

interface ITagsRepository {

    create(name: string): Promise<Tag>;
    findByName(name: string): Promise<Tag>
    findById(id: string): Promise<Tag>;
    findAll(): Promise<Tag[]>;

}

export { ITagsRepository };