const getAllPosts= (req,res)=>{
    try{
        let postsdata = [
    { id: 2, title: 'My Second Post', date: '2023-10-26' },
    { id: 1, title: 'My First Post', date: '2023-10-25' },
        ]
        res.status(200).json({ 
            success:true,
            data:{posts:postsdata}
        })
        
    }catch(err){
        res.status(500).json({
success:false,
error:err.message
        })
    }
}

const getPostById=(req,res)=>{
try{
    let postId= req.params.id;
    res.status(200).json({
        success:true,
        data:{postID: postId}

    })
}catch(err){
    res.status(500).json({
        success:false,
        error:err.message
    })
}
}

module.exports = {
    getAllPosts,
    getPostById
}