import { TagsRepository } from "../../repositories/implementations/TagsRepository";
import { classToPlain } from "class-transformer";

class ListTagsService {

    async execute() {
        const tagsRepository = new TagsRepository();

        const tags = tagsRepository.findAll();

        return classToPlain(tags);
    }

}

export { ListTagsService };