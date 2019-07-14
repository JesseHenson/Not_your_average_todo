import React from 'react'

const Home = () => {
  const data = [
    {
      title: "Functionality",
      desciption: "Search items, sort and filter by any column and filter by catagory",
      image: "https://images.unsplash.com/photo-1562941898-ace64adaa1fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      placement: "center"
    },
    {
      title: "Integration to a Scrum board",
      desciption: "Any item automatically gets added to a board style project management tool",
      image: "https://images.unsplash.com/photo-1562927297-15b3bc0b3d26?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      placement: "float-right"
    },
    {
      title: "Easy add Items",
      desciption: "Simply ",
      image: "https://images.unsplash.com/photo-1562939230-e05e7c80c1d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1252&q=80",
      placement: "ml-3"
    },
    {
      title: "Simple UI Design",
      desciption: "Built with bootstrap for new and modern look and feel",
      image: "https://images.unsplash.com/photo-1562856761-73619ca004f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
      placement: "center"
    }
  ]
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Not Some Regular Todo App... Something of the Future</h1>
        <h2>What makes this todo app stand above the rest???</h2>
        <div className="col-3 center mt-5">
          <ul class="list-group">
            {data.map(innovations => (
              <li class="list-group-item">{innovations.title}</li>
            ))}
          
          </ul>
        </div>
      </div>
      {data.map(innovations=>(
        <div class={`card mb-5 ${innovations.placement}`} style={{width: "40rem"}}>
          <img src={innovations.image} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{innovations.title}</h5>
            <p class="card-text">{innovations.desciption}</p>
            <a href="https://porfolio-v2.netlify.com/" class="btn btn-dark">Portfolio</a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home
