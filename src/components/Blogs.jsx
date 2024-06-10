import React from "react";
import dehumid from './images/dehumid.jpg'
import cover from './images/stringcover.jpg'
import mark from './images/mark.jpg'


function Blogs() {
    const blogs = [
        {
            id: 1,
            title: 'Your Piano Suffering from Humidity Damage?',
            text: 'High humidity can damage your piano, affecting its sound and lifespan. Click to learn how Bonja Pianos can help.',
            author: 'Mark Bonja',
            category: 'Maintenance',
            image: dehumid,
            link: 'https://open.substack.com/pub/bonjapianos/p/maintain-your-melody-the-power-of?r=40zvu2&utm_campaign=post&utm_medium=web'
        },
        {
            id: 2,
            title: 'Shield Your Grand Piano with a Grand String Piano Cover',
            text: 'Protect your grand piano from dust, moisture, and spills with a grand string piano cover. Click to learn how Bonja Pianos can help.',
            author: 'Mark Bonja',
            category: 'Maintenance',
            image: cover,
            link: 'https://open.substack.com/pub/bonjapianos/p/protecting-your-piano-from-rust-with?r=40zvu2&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true'
        }
    ];

    return (
        <div className="blog-container">
            <h1>Interested in more ways to protect your piano?</h1>
            <p>See below for articles to learn how to keep your piano in pristine condition with expert advice and solutions.</p>
            <div className="blogs-row">
                {blogs.map(blog => (
                    <a key={blog.id} href={blog.link} target="_blank" rel="noopener noreferrer" className="card-link">
                        <div className="card">
                            <img src={blog.image} alt={blog.title} className="card-image" />
                            <div className="blog-card">
                                <div className={`card-category ${blog.category.toLowerCase()}`}>{blog.category}</div>
                                <h2>{blog.title}</h2>
                                <p>{blog.text}</p>
                                <div className="card-author">
                                    <img src={mark} alt={blog.author} className="author-image" /> 
                                    <div>
                                        <p>{blog.author}</p>
                                        <p>{blog.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}


export default Blogs;