class Dog{
    constructor(data){
        Object.assign(this,data)
    }
    
    getHtmlDogs = function(){
        const {avatar,name,bio,age} = this
        return `<div class='profile-image-container' style="background-image: url('${avatar}');">
                <div class='dog-info'>
                        <h2>${name}, ${age}</h2>
                        <p>${bio}</p>
                    </div>
                    <div class='choice-container'>
                        <img id ='${name}-id-like' src='images/badge-like.png' class='choice-like like-el'/>
                        <img id ='${name}-id-not-like' src='images/badge-nope.png' class='choice-like unlike-el'/>
                    </div>
                </div>
                <div class='like-container'>
                    <img data-nope="${avatar}" src='images/icon-cross.png' class='icon-cross'/>
                    <img data-like="${avatar}" src='images/icon-heart.png' class='icon-heart'/>
                </div>
                `                
    
        }
}

export default Dog
