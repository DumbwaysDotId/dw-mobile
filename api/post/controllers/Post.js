'use strict';
const moment = require('moment')

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    async findx(ctx) {    
        // return 'hello world'    
        const posts = await strapi.services.post.find(ctx.query);
        // let x = []
        // x.push(posts[0])
        // x.test = "asd"
        console.log(moment().format())
        
        return posts
    },
};
