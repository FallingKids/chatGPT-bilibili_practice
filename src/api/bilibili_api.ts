import { getArticleCommentHtmlReq, getArticleCommentRes } from './../type/api/bilibili_api.d';
import Request from '../../lib/request'

const host = 'https://member.bilibili.com'

const BILIBILI = {
    platform: {
        comment: {
            article: '/platform/comment/article'
        }
    }
}

class BlibiliApi {
    private request: Request
    constructor() {
        this.request = new Request()
    }
    async getArticleCommentHtml (params: getArticleCommentHtmlReq): Promise<getArticleCommentRes[]> {
        
        const url = `${host}${BILIBILI.platform.comment.article}`
        const html = await this.request.get(host)
        return []
    }
}