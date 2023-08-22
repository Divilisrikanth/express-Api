const getdata =  fetch(`http://localhost:5000/api/v1/items`)
      .then (res =>{
        return res.json()
      }).then(data=>{
        data.forEach(Items=>{
            //const markup =`<li>${Items.id}</li>`
            const markup =`<li>${Items.id}  ${Items.name}  ${Items.price}  ${Items.desc}  ${Items.img}</li>`
    
            document.querySelector('ul').insertAdjacentHTML('beforeend',markup)
        })
      
      }).catch(error=>console.log(error))