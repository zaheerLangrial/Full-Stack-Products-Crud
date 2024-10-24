import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProductsRequest,
  addProductRequest,
  updateProductRequest,
  deleteProductRequest,
} from './store/productSlice';
import { Button, Table, Modal, Form, Input, Popconfirm, message, Spin, Switch } from 'antd';

const App = () => {
  const dispatch = useDispatch();
  const { list: products, loading } = useSelector((state) => state.products);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form] = Form.useForm();

  // Fetch products when component mounts
  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  // Handle form submission for Add or Update product
  const handleFormSubmit = (values) => {
    if (editingProduct) {
      // dispatch(updateProductRequest({ id: editingProduct.id, ...values }));
      dispatch(updateProductRequest({ id: editingProduct.id, ...values }))
      message.success('Product updated successfully!');
    } else {
      // dispatch(addProductRequest(values));
      dispatch(addProductRequest(values))
      message.success('Product added successfully!');
    }
    form.resetFields();
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  // Handle product deletion
  const handleDelete = (id) => {
    // dispatch(deleteProductRequest(id));
    dispatch(deleteProductRequest(id))
    message.success('Product deleted successfully!');
  };

  // Open the modal for editing a product
  const handleEdit = (product) => {
    setEditingProduct(product);
    form.setFieldsValue(product);
    setIsModalOpen(true);
  };

  // Reset the form and editing state
  const handleCancel = () => {
    form.resetFields(); // Clear the form fields
    setIsModalOpen(false);
    setEditingProduct(null); // Reset the editing product
  };

  // Columns for the product table
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Product Name', dataIndex: 'name', key: 'name' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Price', dataIndex: 'price', key: 'price', render: (price) => `₹${price}` },
    { title: 'Stock', dataIndex: 'stock', key: 'stock' },
    {
      title: 'Actions',
      key: 'actions',
      width: 200,
      render: (_, product) => (
        <>
          <Button type="link" onClick={() => handleEdit(product)}>Edit</Button>
          <Popconfirm
            title="Are you sure you want to delete this product?"
            onConfirm={() => handleDelete(product.id)}
          >
            <Button type="link" danger>Delete</Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <div style={{ padding: '0px' }}>
      <h1 style={{ textAlign: 'center' }}>Products</h1>
      <Button type="primary" onClick={() => setIsModalOpen(true)} style={{ marginBottom: '10px' }}>
        Add Product
      </Button>

      {loading ? (
        <Spin size="large" style={{ display: 'block', margin: '50px auto' }} />
      ) : (
        <Table dataSource={products} pagination={{ pageSize: 7 }} columns={columns} rowKey="id" />
      )}

      <Modal
        title={editingProduct ? 'Edit Product' : 'Add Product'}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} onFinish={handleFormSubmit} layout="vertical">
          <Form.Item
            name="name"
            label="Product Name"
            rules={[{ required: true, message: 'Please enter the product name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: 'Please enter a category!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: 'Please enter the price!' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="stock"
            label="Stock"
            rules={[{ required: true, message: 'Please enter the stock quantity!' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="is_active"
            label="Active"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
              {editingProduct ? 'Update' : 'Add'}
            </Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default App;
