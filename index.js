import dogs from './data.js'
import Dog from './Dog.js'

let i = 0
let newDog = new Dog(dogs[i])
let isLoading = false;

function render(){
document.getElementById('profile-images-dogs').innerHTML = newDog.getHtmlDogs()    
}

render()

document.addEventListener('click',function(e){
    if(e.target.dataset.like)
    {
    
            if(!isLoading)
            {
                document.getElementById(`${newDog.name}-id-like`).style.display = 'block'
                isLoading = true
                
                i++
                if(i === 3)
                {
                    i = 0
                }
                newDog = new Dog(dogs[i])
                setTimeout(function(){
                render()    
                isLoading = false
                },2000)
                
            }
    
    }
    else if(e.target.dataset.nope)
    {
                if(!isLoading)
            {
            
                document.getElementById(`${newDog.name}-id-not-like`).style.display = 'block' 
                isLoading = true
                
                i++
                if(i === 3)
                {
                    i = 0
                }
                newDog = new Dog(dogs[i])
                
                setTimeout(function(){
                render()
                isLoading = false    
                },2000)    
            }
       
    }        
})
