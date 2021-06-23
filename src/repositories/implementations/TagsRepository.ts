import { getRepository, Repository } from "typeorm";
import { Tag } from "../../entities/Tag";
import { ITagsRepository } from "../ITagsRepository";

class TagsRepository implements ITagsRepository {

    private repository: Repository<Tag>;

    constructor() {
        this.repository = getRepository(Tag);
    }

    async create(name: string): Promise<Tag> {
        const tag = this.repository.create({
            name
        });

        await this.repository.save(tag);

        return tag;
    }

    async findByName(name: string): Promise<Tag> {
        // where: { name: name }
        const tag = await this.repository.findOne({ name })
        return tag;
    }

    async findById(id: string): Promise<Tag> {
        const tag = await this.repository.findOne({ id });
        return tag;
    }

}

export { TagsRepository };