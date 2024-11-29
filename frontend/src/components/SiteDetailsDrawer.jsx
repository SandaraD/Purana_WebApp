import React from 'react';
import { Drawer } from 'antd';
import { useEffect } from 'react';
import QRCodeGenerator from "../utils/QRCodeGenerator";

const SiteDetailsDrawer = ({ site, visible, onClose }) => {
  useEffect(() => {
    console.log('Site details:', site); 
  }, [site]);

  const city = site?.city || "Unknown";
  const locationType = site?.location?.type || "Unknown";
  const coordinates = site?.location?.coordinates || ["N/A", "N/A"];
  const latitude = coordinates[1] || "N/A";
  const longitude = coordinates[0] || "N/A";

  return (
    <Drawer
      title={site ? site.name : "Site Details"}
      placement="right"
      onClose={onClose}
      visible={visible}
      width={700}
    >
      {site ? (
        <>
          <p><strong>City: </strong> {city} </p>
          <p><strong>Latitude:</strong> {latitude}</p>
          <p><strong>Longitude:</strong> {longitude}</p>
          <p><strong>Description:</strong> {site.description || "No description available"}</p>
          <p><strong>Created On:</strong> {new Date(site.createdAt).toLocaleDateString()}</p>

          <strong>QR Code:</strong>
          <div id={`qr-code-${site._id}`}>
            <QRCodeGenerator
              url={`http://localhost:4000/api/sites/${site._id}`}
            />
          </div>
          
          <div>
            <strong>Images:</strong>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {site.images && site.images.length > 0 ? (
                site.images.map((image, index) => (
                  <img
                    key={index}
                    src={`http://localhost:4000${image}`} 
                    alt={`Site image ${index + 1}`}
                    style={{ width: '50%', height: '50%', objectFit: 'fill' }}
                  />
                ))
              ) : (
                <p>No images available</p>
              )}
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Drawer>
  );
};

export default SiteDetailsDrawer;