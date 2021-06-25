interface ICreateComplimentsDTO {
    id?: string;
    user_sender?: string
    user_receiver: string;
    tag_id: string;
    message: string;
}
export { ICreateComplimentsDTO };