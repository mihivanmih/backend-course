import PostService from './PostService.js'

class PostController {
    async create(req, res) {
        //console.log(req.query)
        //console.log(req.body)
        try {
            // const {author, title, content, picture} = req.body
            // const post = await Posts.create({author, title, content, picture})
            const post = await PostService.create(req.body, req.files.picture)
            res.json(post)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    
    async getAll(req, res) {
        try {
            const posts = await PostService.getAll()
            return res.json(posts)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    
    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    
    async update(req, res) {
        try {
            const updatePost = await PostService.update(req.body)
            return res.json(updatePost)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    
    async delete(req, res) {
        try{
            const post = await PostService.delete(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new PostController()