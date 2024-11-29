import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = ({ url }) => (
    <QRCode value={url} size={128} />
);

export default QRCodeGenerator;