var site=document.getElementById('site-name')
var url=document.getElementById('site-url')
var btn=document.querySelector('#btn')
var form=document.getElementById('bookmark')
console.log(site)
form.addEventListener('submit',Submission)


function Submission(e){
   e.preventDefault();
   var bookmark={
       name:site.value,
       url:url.value
   }

   
  
   if(localStorage.getItem('bookmarks')===null){
    var bookmarks=[]
       bookmarks.push(bookmark)
       localStorage.setItem('bookmarks',JSON.stringify(bookmarks))
   }
   else{
     bookmarks=JSON.parse(localStorage.getItem('bookmarks'))
     bookmarks.push(bookmark)
     localStorage.setItem('bookmarks',JSON.stringify(bookmarks))
   }
   document.getElementById('bookmark').reset()
   loading()
}

function loading(){
    var output=document.getElementById('output')
    bookmarks=JSON.parse(localStorage.getItem('bookmarks'))
    console.log(bookmarks[0].name)
    output.innerHTML=''
    for(var i=0;i<bookmarks.length;i++){
        var name=bookmarks[i].name
        var url=bookmarks[i].url
        output.innerHTML+='<div class="output">'+
                                    '<h3>'+name+
                                    '<a href="'+url+'" target="_blank">Visit</a>'+''+
                                    '<a onclick="deletebookmark(\''+url+'\')" href="#">delete</a>'
                                    '</h3>'
                                    '</div>'
    }
}


function deletebookmark(url){
    bookmarks=JSON.parse(localStorage.getItem('bookmarks'))
    for(var i=0;i<bookmarks.length;i++){
        if(bookmarks[i].url===url){
            bookmarks.splice(i,1)
        }
    }
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks))  
    loading()
}