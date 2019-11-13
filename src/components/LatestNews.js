import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Button, Card} from "react-bootstrap";

const LatestNews = () => {
    const [articles, setArticles] = useState([]);

    console.log(articles);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `https://snapi.space/api/v1/articles`,
            );
            setArticles(result.data.docs);
        };
        fetchData();
    }, []);

    return (
        <div>
            {articles.map((article) => (
                <Card key={article._id} style={{ width: '18rem' }}>
                    <Card.Img style={{height: '300px', resizeMode: 'center'}} variant="top" src={article.featured_image} />
                    <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text>
                            {article.news_site_long}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default LatestNews;
