import { Tag } from "../../entities/Tag";
import { TagsRepository } from "../../repositories/implementations/TagsRepository";
import { AppError } from "../../shared/Errors/AppError";


class CreateTagsService {

    async execute(name: string): Promise<Tag> {
        const tagsRepository = new TagsRepository();

        if (!name) {
            throw new AppError("Invalid provided name.");
        }

        const tagExists = await tagsRepository.findByName(name);

        if (tagExists) {
            throw new AppError("This tag already exists.");
        }

        const tag = await tagsRepository.create(name);

        return tag
    }

}

export { CreateTagsService };