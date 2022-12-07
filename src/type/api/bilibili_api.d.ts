export interface getArticleCommentHtmlReq {
    keyword: string,
    order: string,
    filter: string,
    is_hidden: string,
    type: string,
    comment_display: string,
    pn: string
}
export interface getArticleCommentRes {
    rpid: string,
    username: string,
    message: string
}