/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Alert, Col, Container, Form, Row, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useUpdateProductMutation } from "../services/appApi";
import axios from "../axios";
import "./NewProduct.css";

function EditProductPage() {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [images, setImages] = useState([]);
    const [marque, setMarque] = useState("");
    const [fabricant, setFabricant] = useState("");
    const [fonct, setFonct] = useState("");
    const [rubrique, setRubrique] = useState("");
    const [imgToRemove, setImgToRemove] = useState(null);
    const navigate = useNavigate();
    const [updateProduct, { isError, error, isLoading, isSuccess }] = useUpdateProductMutation();

    useEffect(() => {
        axios
            .get("/products/" + id)
            .then(({ data }) => {
                const product = data.product;
                setName(product.name);
                setDescription(product.description);
                setCategory(product.category);
                setImages(product.pictures);
                setPrice(product.price);
                setMarque(product.marque);
                setFabricant(product.fabricant);
                setRubrique(product.rubrique);
                setFonct(product.fonct);

            })
            .catch((e) => console.log(e));
    }, [id]);

    function handleRemoveImg(imgObj) {
        setImgToRemove(imgObj.public_id);
        axios
            .delete(`/images/${imgObj.public_id}/`)
            .then((res) => {
                setImgToRemove(null);
                setImages((prev) => prev.filter((img) => img.public_id !== imgObj.public_id));
            })
            .catch((e) => console.log(e));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!name || !description || !price || !category || !images.length ||!marque || !fabricant ||!fonct ||!rubrique) {
            return alert("Please fill out all the fields");
        }
        updateProduct({ id, name, description, price, category, images,marque,fabricant,fonct,rubrique }).then(({ data }) => {
            if (data.length > 0) {
                setTimeout(() => {
                    navigate("/");
                }, 1500);
            }
        });
    }

    function showWidget() {
        const widget = window.cloudinary.createUploadWidget(
            {
                cloudName: "dggw5ktf8",
                uploadPreset: "ml_default",
            },
            (error, result) => {
                if (!error && result.event === "success") {
                    setImages((prev) => [...prev, { url: result.info.url, public_id: result.info.public_id }]);
                }
            }
        );
        widget.open();
    }

    return (
        <Container>
            <Row>
                <Col md={6} className="new-product__form--container">
                    <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
                        <h1 className="mt-4">Edit product</h1>
                        {isSuccess && <Alert variant="success">Product updated</Alert>}
                        {isError && <Alert variant="danger">{error.data}</Alert>}
                        <Form.Group className="mb-3">
                            <Form.Label>Product name</Form.Label>
                            <Form.Control type="text" placeholder="Enter product name" value={name} required onChange={(e) => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Product description</Form.Label>
                            <Form.Control as="textarea" placeholder="Product description" style={{ height: "100px" }} value={description} required onChange={(e) => setDescription(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Price($)</Form.Label>
                            <Form.Control type="number" placeholder="Price ($)" value={price} required onChange={(e) => setPrice(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" onChange={(e) => setCategory(e.target.value)}>
                            <Form.Label>Category</Form.Label>
                            <Form.Select value={category}>
                                <option disabled selected>
                                    -- Select One --
                                </option>
                                
                                <option value="pc de bureau">Pc de bureau</option>
                                <option value="laptop">Laptop</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" onChange={(e) => setRubrique(e.target.value)}>
                            <Form.Label>Rubrique</Form.Label>
                            <Form.Select value={rubrique}>
                                <option disabled selected>
                                    -- Select One --
                                </option>
                                <option value="pc gamers">pc gamers</option>
                                <option value="pc pro">pc pro</option>
                                <option value="pc en promotion">pc en promotion</option>
                                <option value="laptop gamers">laptop gamers</option>
                                <option value="laptop pro">laptop pro</option>
                                <option value="laptop en promotion">laptop en promotion</option>


                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" onChange={(e) => setMarque(e.target.value)}>
                            <Form.Label>Marque</Form.Label>
                            <Form.Select value={marque}>
                                <option disabled selected>
                                    -- Select One --
                                </option>
                                <option value="mac">Mac</option>
                                <option value="acer">Acer</option>
                                <option value="asus">Asus</option>
                                <option value="dell">Dell</option>
                                <option value="hp">HP</option>
                                <option value="huawei">Huawei</option>
                                <option value="lenovo">Lenovo</option>
                                <option value="msi">MSI</option>
                                <option value="razen">Razen</option>



                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" onChange={(e) => setFabricant(e.target.value)}>
                            <Form.Label>Fabricant</Form.Label>
                            <Form.Select value={fabricant}>
                                <option disabled selected>
                                    -- Select One --
                                </option>
                                <option value="Apple">Apple</option>
                                <option value="Acer">Acer</option>
                                <option value="Asus">Asus</option>
                                <option value="Dell">Dell</option>
                                <option value="HP">HP</option>
                                <option value="Huawei">Huawei</option>
                                <option value="Lenovo">Lenovo</option>
                                <option value="MSI">MSI</option>
                                <option value="Razen">Razen</option>



                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Fonctionalités</Form.Label>
                            <Form.Control as="textarea" type="text" placeholder="Fonctionalités..." value={fonct} required onChange={(e) => setFonct(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Button type="button" onClick={showWidget}>
                                Upload Images
                            </Button>
                            <div className="images-preview-container">
                                {images.map((image) => (
                                    <div className="image-preview">
                                        <img src={image.url} />
                                        {imgToRemove !== image.public_id && <i className="fa fa-times-circle" onClick={() => handleRemoveImg(image)}></i>}
                                    </div>
                                ))}
                            </div>
                        </Form.Group>

                        <Form.Group>
                            <Button type="submit" disabled={isLoading || isSuccess}>
                                Update Product
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={6} className="new-product__image--container"></Col>
            </Row>
        </Container>
    );
}

export default EditProductPage;
