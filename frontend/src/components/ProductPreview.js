import React from "react";
import { Badge, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./../pages/Home.css";

function ProductPreview({ _id, category,rubrique, name, pictures }) {
    const stars = document.querySelectorAll('.star');
        let check = false;
        stars.forEach(star => {
            star.addEventListener('mouseover', selectStars);
            star.addEventListener('mouseleave', unselectStars);
            star.addEventListener('click', activeSelect);
        })

        function selectStars(e) {
            const data = e.target;
            const etoiles = priviousSiblings(data);
            if (!check) {
                etoiles.forEach(etoile => {
                    etoile.classList.add('hover');
                })
            }

        }

        function unselectStars(e) {
            const data = e.target;
            const etoiles = priviousSiblings(data);
            if (!check) {
                etoiles.forEach(etoile => {
                    etoile.classList.remove('hover');
                })
            }
        }

        function activeSelect(e) {
            if (!check) {
                check = true;
                document.querySelector('.note').innerHTML = 'Note ' + e.target.dataset.note;
            }
        }

        function priviousSiblings(data) {
            let values = [data];
            while (data = data.previousSibling) {
                if (data.nodeName === 'I') {
                    values.push(data);
                }
            }
            return values;
        }
    return (
        <div>
        <LinkContainer to={`/product/${_id}`} style={{ cursor: "pointer", width: "13rem", margin: "10px" }}>
            <Card style={{ width: "20rem", margin: "10px" }}>
                <Card.Img variant="top" className="product-preview-img" src={pictures[0].url} style={{ height: "150px", objectFit: "cover" }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Badge bg="warning" text="dark">
                        {rubrique}
    
                    </Badge>
                </Card.Body>
            </Card>
        </LinkContainer>
        <i class="note">Note:</i>
        <i class="star" data-note="1">&#9733;</i>
    <i class="star" data-note="2">&#9733;</i>
    <i class="star" data-note="3">&#9733;</i>
    <i class="star" data-note="4">&#9733;</i>
    <i class="star" data-note="5">&#9733;</i>
    
        </div>
    );
}

export default ProductPreview;