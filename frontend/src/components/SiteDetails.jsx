import { Card, Col, Row } from "antd"
import 'bootstrap-icons/font/bootstrap-icons.css';
import QRCodeGenerator from "../utils/QRCodeGenerator";
import { useEffect, useState } from "react";

const SiteDetails = ({ site }) => {
    const [dataURL, setDataURL] = useState('');

    useEffect(() => {
        const generateURL = `http://localhost:4000/api/sites/${site._id}`;
        console.log("Generate URL:", generateURL);
        setDataURL(generateURL);
    }, [site]);
    return (
        <div className="site-details">
            <Row justify="center">
                <Col xs={20} sm={20} md={22} lg={18} xl={24}>
                    <Card
                        title={
                            <div>
                                <i className="bi bi-geo-alt-fill" style={{ marginRight: '5px' }}></i>
                                {site.name}
                            </div>
                        }
                        bordered={true}
                    >
                        <p><strong>City: </strong>{site.city}</p>
                        
                        <p> <strong>Location :</strong> {site.location} </p>
                        <p> <strong> Latitude :</strong> {site.latitude} </p>
                        <p><strong> Longitude :</strong> {site.longitude} </p>
                        <p> <strong> Size (meters) :</strong> {site.size} </p>
                        <p> <strong> Description :</strong> {site.description} </p>
                        <p> {site.createdAt} </p>
                        <QRCodeGenerator url={dataURL} />
                        <Col xs={24} md={8}>
                        </Col>
                    </Card>
                </Col>
            </Row>
            
        </div>
    )
}
export default SiteDetails