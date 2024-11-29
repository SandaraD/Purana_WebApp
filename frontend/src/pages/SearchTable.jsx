import React, { useEffect, useState } from 'react';
import { Button, Card, Input, Modal, Space, Table, Form, Upload } from 'antd';
import { PlusOutlined, DeleteOutlined,CloseOutlined } from '@ant-design/icons';
import axios from 'axios';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import SiteDetailsDrawer from '../components/SiteDetailsDrawer';
import { useAuthContext } from '../hooks/useAuthContext';
import { useSitesContext } from '../hooks/useSitesContext';
import LocationSearch from '../components/LocationSearch';

const handlePrint = async (site) => {
    if (!site) return;

    try {
        const input = document.getElementById(`qr-code-${site._id}`);
        if (!input) {
            throw new Error(`QR code container not found for site ${site.name}`);
        }

        const canvas = await html2canvas(input, { scale: 2 });
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 10, 10);
        pdf.save(`${site.name}-QRCode.pdf`);
    } catch (error) {
        console.error('Error printing QR code:', error);
    }
};

const columns = (handleRowClick, handlePrint, handleEdit, handleDelete) => [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => (
            <Button style={{ color: '#023047' }} type="link" onClick={() => handleRowClick(record)}>{text}</Button>
        ),
    },
    {
        title: 'Actions',
        dataIndex: 'actions',
        render: (_, site) => (
            <Space className="actions-column">
                <Button type="link" onClick={() => handleEdit(site)}>Edit</Button>
                <Button style={{ color: 'red' }} onClick={() => handleDelete(site._id)}><i className="bi bi-trash-fill ps-1"></i></Button>
                <Button onClick={() => {
                    handleRowClick(site);
                    setTimeout(() => handlePrint(site), 2000);
                }}> Print QR Code <i className="bi bi-printer-fill ps-1"></i></Button>
            </Space>
        ),
        align: 'right',
    },
];

const SearchTable = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    const [selectedSite, setSelectedSite] = useState(null);
    const [editingSite, setEditingSite] = useState(null);
    const [files, setFiles] = useState([]);
    const [existingImages, setExistingImages] = useState([]);
    const [searchText, setSearchText] = useState('');
    const { user } = useAuthContext();
    const [form] = Form.useForm();

    const { sites, dispatch } = useSitesContext();

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get('/api/sites', {
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                },
            });
            console.log('Fetched Data:', response.data); 
            const formattedData = response.data.map(item => ({
                ...item,
                key: item._id,
            }));
            setData(formattedData);
            setFilteredData(formattedData);
        } catch (error) {
            console.error("There was an error fetching the data!", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user) {
            fetchData();
        }
    }, [user]);

    useEffect(() => {
        if (searchText) {
            const lowercasedFilter = searchText.toLowerCase();
            const filtered = data.filter(item =>
                item.name.toLowerCase().includes(lowercasedFilter)
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    }, [searchText, data]);


    const onFinish = async (values) => {
      console.log("Raw location values before submitting:", values.location);
  
      try {
          let location;
  
          if (Array.isArray(values.location) && values.location.length === 2) {
              location = {
                  type: "Point",
                  coordinates: [parseFloat(values.location[0]), parseFloat(values.location[1])],
              };
          } else if (values.location && values.location.coordinates) {
              location = {
                  type: "Point",
                  coordinates: values.location.coordinates,
              };
          } else {
              location = {
                  type: "Point",
                  coordinates: [
                      parseFloat(values.longitude),
                      parseFloat(values.latitude),
                  ],
              };
          }
  
          console.log("Corrected location:", location);
  
          const formData = new FormData();
          
          Object.keys(values).forEach((key) => {
              if (key !== "location" && key !== "latitude" && key !== "longitude") {
                  formData.append(key, values[key]);
              }
          });
  
          formData.append("location[type]", location.type);
          formData.append("location[coordinates][0]", location.coordinates[0]);
          formData.append("location[coordinates][1]", location.coordinates[1]);
  
          formData.forEach((value, key) => {
              console.log(`FormData contains: ${key}: ${value}`);
          });
  
          if (files.length > 0) {
              files.forEach((file) => {
                  formData.append("images", file.originFileObj);
              });
          }
  
          const method = editingSite ? "PUT" : "POST";
          const url = editingSite ? `/api/sites/${editingSite._id}` : "/api/sites";
  
          const response = await fetch(url, {
              method,
              body: formData,
              headers: {
                  Authorization: `Bearer ${user.token}`,
              },
          });
  
          if (!response.ok) {
              const json = await response.json();
              throw new Error(json.error);
          }
  
          const updatedSite = await response.json();
          console.log("Site successfully updated:", updatedSite);
  
          form.resetFields();
          setIsModalVisible(false);
          setEditingSite(null);
          fetchData();
      } catch (error) {
          console.error("Failed to submit form:", error);
      }
  };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const showModal = (site = null) => {
        setEditingSite(site);
        if (site) {
            const { images, ...rest } = site;
            form.setFieldsValue(rest);
            setExistingImages(images || []);
        } else {
            form.resetFields();
            setExistingImages([]);
        }
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setEditingSite(null);
    };

    const handleRowClick = (record) => {
        setSelectedSite(record);
        setIsDrawerVisible(true);
    };

    const closeDrawer = () => {
        setIsDrawerVisible(false);
    };

    const handleDelete = (id) => {
        Modal.confirm({
            title: 'Confirm Deletion',
            content: 'Are you sure you want to delete this site?',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk: async () => {
                try {
                    const response = await fetch(`/api/sites/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'Authorization': `Bearer ${user.token}`,
                        },
                    });
                    if (!response.ok) {
                        const json = await response.json();
                        throw new Error(json.error);
                    }
                    fetchData();
                } catch (error) {
                    console.error('Failed to delete site:', error);
                }
            },
        });
    };

    const handleRemoveImage = (index) => {
        setExistingImages(existingImages.filter((_, i) => i !== index));
    };

    const clearSearch = () => {
        setSearchText('');
        setFilteredData(data);
    };

    return (
      <Card
        title="Archeological Sites"
        bordered={false}
        extra={
          <Button
            onClick={() => showModal()}
            style={{ backgroundColor: "#70DAD2" }}
          >
            New <PlusOutlined />
          </Button>
        }
      >
        <div
          style={{ marginBottom: 20, display: "flex", alignItems: "center" }}
        >
          <Input.Search
            placeholder="Search by site name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ flex: 1, marginRight: 10 }}
          />
          <Button
            type="default"
            icon={<CloseOutlined />}
            onClick={clearSearch}
            disabled={!searchText}
          >
            Clear
          </Button>
        </div>

        <Table
          columns={columns(
            handleRowClick,
            handlePrint,
            showModal,
            handleDelete
          )}
          dataSource={filteredData}
          loading={loading}
          scroll={{ x: 1000 }}
          pagination={{ pageSize: 10 }}
        />
        <Modal
          title={editingSite ? "Edit Site" : "Add New Site"}
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
<Form
  form={form}
  name="site-form"
  onFinish={onFinish}
  onFinishFailed={onFinishFailed}
  layout="vertical"
>
  <Form.Item
    label="Name"
    name="name"
    rules={[{ required: true, message: "Please input the site name!" }]}
  >
    <Input />
  </Form.Item>

  <Form.Item
    label="City"
    name="city"
    rules={[{ required: true, message: "Please input the place!" }]}
  >
    <Input />
  </Form.Item>
  
  <Form.Item
  label="Location"
  name="location"
  rules={[
    { required: true, message: "Please select the site location on the map!" },
  ]}
>
  <LocationSearch
    onChange={(coordinates) => {
      console.log("Coordinates from LocationService:", coordinates);

      const geoLocation = {
        type: "Point",
        coordinates: coordinates, 
      };

      form.setFieldsValue({
        location: geoLocation, 
      });
    }}
  />
</Form.Item>

  <Form.Item
    label="Description"
    name="description"
    rules={[
      { required: true, message: "Please input the site description!" },
    ]}
  >
    <Input.TextArea />
  </Form.Item>

  <Form.Item label="Images" name="images">
    <Upload
      listType="picture"
      multiple
      beforeUpload={() => false}
      onRemove={(file) => {
        setFiles(files.filter((f) => f.uid !== file.uid));
      }}
      onChange={({ fileList }) => {
        setFiles(fileList);
      }}
    >
      <Button icon={<PlusOutlined />}>Upload</Button>
    </Upload>

    {existingImages.length > 0 && (
      <div style={{ marginTop: "10px" }}>
        {existingImages.map((image, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
            <img
              src={image.url}
              alt={`Existing Image ${index + 1}`}
              style={{
                width: "100px",
                height: "100px",
                marginRight: "10px",
              }}
            />
            <Button
              type="danger"
              icon={<DeleteOutlined />}
              onClick={() => handleRemoveImage(index)}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
    )}
  </Form.Item>

  <Form.Item>
    <Button
      type="primary"
      htmlType="submit"
      style={{ backgroundColor: "#023047" }}
    >
      {editingSite ? "Update" : "Add"}
    </Button>
  </Form.Item>
</Form>

        </Modal>
        {selectedSite && (
          <SiteDetailsDrawer
            site={selectedSite}
            visible={isDrawerVisible}
            onClose={closeDrawer}
          />
        )}
      </Card>
    );
};

export default SearchTable;

