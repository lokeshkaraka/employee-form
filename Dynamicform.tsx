import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Col, DatePicker, Form, Input, Radio, Row, Select, Space, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Header } from 'antd/es/layout/layout';
import { Link } from 'react-router-dom';
import { useState } from "react";


const Dynamicform = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<any>([]);
  const navigate = useNavigate();
  // const onFinish = (values: any) => {
  //   console.log('Success:', values);
  // };
  const onReset = () => {
    form.resetFields();
  }

  const onFinish = (values: any) => {
    console.log(values);
    axios.post("http://localhost:5555/dynamic", {
      values,
      // employeePayrole: values.employeePayrole,
      // taxdetails: values.taxdetails,
      // superannutation: values.superannutation,
      // employmentdetails: values.employmentdetails,
    })

      .then((res) => {
        if (res.data !== false) {
          setTimeout(() => {
            message.success("data submitted successfully");
          }, 1000);
          // form.resetFields
          console.log(values, res, '111111111111')
        }
      })
      .catch((error) => {
        console.error(error.response);
        message.error("error occurred");
      });
  };



  // const onCreate = () => {
  //   axios.get("http://localhost:5555/dynamic/getData")
  //     .then((res) => {
  //       if (res) {
  //         console.log(res);
  //         setData(res);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error.response);
  //       alert(error.response);
  //     })
  //   console.log(data)
  // }

  const handleReset = () => {
    form.resetFields();
  }

  return <>
    <Card title="EMPLOYEE FORM"
      headStyle={{
        fontWeight: "bold",
        backgroundColor: "#064598",
        color: "white",
        borderRadius: "10px",
        marginTop: "30px",
        textAlign: "center"
      }}

    ></Card>

    <Form
      form={form}
      name="horizontal"
      layout="vertical"
      onFinish={onFinish}
    >

      <Card style={{ border: "1 px solid #000209" }}>
        <Row>
          <Col span={6}>
            <Form.Item
              label="FullName"
              name="fullName"
              rules={[{
                required: true,
                message: 'please enter fullName'
              }]}
            >
              <Input
                placeholder="Enter fullName"
                style={{ padding: "5px" }}
              />
            </Form.Item>
          </Col>

          <Col span={6} offset={2}>
            <Form.Item
              label="DateofBirth"
              name="dateofBirth"
              style={{ padding: "3px" }}
              rules={[{
                required: true,
                message: 'Enter DateofBirth'
              }]}
            >
              <DatePicker
                style={{ width: "100%" }}
                picker="date"
                placeholder="Enter Date of birth"
              />
            </Form.Item>
          </Col>


          <Col span={6} offset={2}>
            <Form.Item
              label="Email id"
              name="emailId"
              rules={[{
                required: true,
                message: 'Enter emailid'
              }]}
            >
              <Input
                placeholder="Enter your Email id"
                style={{ padding: "5px" }}
              />
            </Form.Item>
          </Col>
        </Row>

        <br />
        <br />


        <Row>
          <Col span={6} offset={0}>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[{ required: true, message: 'Enter your gender' }]}
            >
              <Select placeholder="Select Gender" style={{ padding: "2px" }}>
                <Select.Option value="Male">Male</Select.Option>
                <Select.Option value="Female">Female</Select.Option>
                <Select.Option value="Other">Other</Select.Option>
              </Select>
            </Form.Item>
          </Col>




          <Col span={6} offset={2}>


            <Form.Item
              label="PinCode"
              name="pinCode"
              rules={[{
                required: true,
                message: 'enter Pin code'
              }]}
            >
              <Input
                placeholder="Enter Pin code"
                style={{ padding: "5px" }}
              />
            </Form.Item>
          </Col>

          <Col span={6} offset={2}>
            <Form.Item
              label="MobileNumber"
              name="mobileNumber"
              rules={[{
                required: true,
                message: 'Enter MobileNumber'
              }]}
            >
              <Input
                placeholder="Enter your MobileNumber"
                style={{ padding: "5px" }}
              />
            </Form.Item>
          </Col>

        </Row>

        <br />

        <br />

        <Row>

          <Col span={6}>
            <Form.Item
              label="Department"
              name="department"
              rules={[{
                required: true,
                message: 'Enter your Department'
              }]}
            //  style={{padding: "20px"}}
            >
              <Select
                placeholder="Enter your Department"
                style={{ padding: "-10px 90px" }}
              >
                <Select.Option value="Testing">Testing</Select.Option>
                <Select.Option value="Development">Development</Select.Option>
                <Select.Option value="ERP">ERP</Select.Option>
                <Select.Option value="HHRR">HHRR</Select.Option>
                <Select.Option value="HRNP">HRNP</Select.Option>
                <Select.Option value="HRMS">HRMS</Select.Option>
              </Select>
            </Form.Item>

          </Col>




          <Col span={6} offset={2}>
            <Form.Item
              label="Reporting Manager"
              name="reportingManager"
              rules={[{
                required: true,
                message: 'enter your reporting manager name'
              }]}
            >
              <Input
                placeholder="Enter your Reporting Manager"
                style={{ padding: "5px" }}
              />
            </Form.Item>
          </Col>


          <Col span={6} offset={2}>
            <Form.Item
              label="Address"
              name="address"
              rules={[{
                required: true,
                message: 'Enter your Address'
              }]}
            >
              <TextArea
                placeholder="Enter your Address"
                style={{ padding: "5px" }}
              />
            </Form.Item>
          </Col>
        </Row>

        <center><h2>Mode of Pay</h2></center>
        <Form.Item name="dynamic_form_nest_item"
        >
          <Form.List name="payrole">
            {(feilds, { add, remove }) => (
              <>
                {feilds.map((feild, index) => (
                  <Space key={feild.key} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }} align="baseline">

                    <Form.Item
                      name={[feild.name, 'bankAccountName']}
                      label="Bank Account Name"
                      style={{ padding: "20px" }}
                    >
                      <Input
                        type="Employee Bank Name"
                        placeholder="Employee Bank Name"
                        style={{ padding: "6px" }}
                      />
                    </Form.Item>

                    <Form.Item
                      name={[feild.name, 'bSB']}
                      label="BSB"
                      style={{ padding: "20px" }}
                      rules={[
                        {
                          pattern: /^[0-9]{6}$/,
                          message: 'Please enter a 6-digit number for BSB.',
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter BSB"
                        style={{ padding: "5px" }}
                      />
                    </Form.Item>

                    <Form.Item
                     name={[feild.name, 'accountNumber']}
                      label="Account Number"
                      style={{ padding: "20px" }}
                      rules={[
                        {
                          pattern: /^[0-9]{11}$/,
                          message: 'Please enter an 11-digit account number.',
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter A/c Number"
                        style={{ padding: "5px" }}
                      />
                    </Form.Item>

                    <Form.Item
                      name={[feild.name, 'bank']}
                      label="Bank"
                      style={{ padding: "20px" }}
                    >
                      <Input
                        type="Bank"
                        placeholder="Bank"
                        style={{ padding: "6px" }}
                      />

                    </Form.Item>

                    <MinusCircleOutlined onClick={() => remove(feild.name)} />

                  </Space>

                ))}

                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Main Account
                </Button>
              </>
            )}
          </Form.List>
        </Form.Item>

        <center><h2>Tax-Details</h2></center>
        <Form.Item
          >
          <Form.List name="taxdetails">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <div key={key} style={{ marginBottom: 8 }} >
                    <Row>
                      <Col span={12}>
                        <Form.Item
                          {...restField}
                          name={[name, 'emptaxfilenumber']}
                          label="Employee Tax File Number"
                          style={{ padding: "20px" }}
                        >
                          <Input
                            type="text"
                            placeholder="Enter EmployeeTaxFileNumber"
                            style={{ padding: "8px" }}
                          />
                        </Form.Item>
                      </Col>

                      <Col span={6} offset={2}>
                        <Form.Item
                          {...restField}
                          name={[name, 'tfnDeclarationDate']}
                          label="TFN Declaration Date"
                          style={{ padding: "20px" }}
                        >
                          <DatePicker
                            style={{ width: "100%" }}
                            picker="date"
                            placeholder="Date Signed"
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={8} offset={1}>
                        <Form.Item
                          name="threshold"
                        >
                          <p style={{ fontSize: "20" }}>Claim the Tax-free Threshold</p>
                        </Form.Item>
                      </Col>
                      <Col >
                        <Form.Item>
                          <Radio.Group>
                            <Radio value={1}>Yes</Radio>
                            <Radio value={0}>No</Radio>

                          </Radio.Group>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={8} offset={1}>
                        <Form.Item
                          name="indtaxpurpose"
                        >
                          <p style={{ fontSize: "20" }}>Indian resident for tax purposes</p>
                        </Form.Item>
                      </Col>
                      <Col>
                        <Form.Item >
                          <Radio.Group>
                            <Radio value={1}>Yes</Radio>
                            <Radio value={0}>No</Radio>
                          </Radio.Group>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={8} offset={1}>
                        <Form.Item
                          name="help"
                        >
                          <p style={{ fontSize: "20" }}>Higher Education Loan DEBT (HELP)</p>
                        </Form.Item>
                      </Col>
                      <Col>
                        <Form.Item >
                          <Radio.Group>
                            <Radio value={1}>Yes</Radio>
                            <Radio value={0}>No</Radio>
                          </Radio.Group>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={8} offset={1}>
                        <Form.Item
                          name="fsd">
                          <p style={{ fontSize: "20" }}>Financial Supplement DEBT</p>
                        </Form.Item>
                      </Col>
                      <Col>
                        <Form.Item >
                          <Radio.Group>
                            <Radio value={1}>Yes</Radio>
                            <Radio value={0}>No</Radio>
                          </Radio.Group>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12} offset={1}>
                        <Form.Item
                          label="Additional Information"
                          name="additionalInformation"
                          rules={[{ message: 'Enter your Address' }]}
                        >
                          <TextArea
                            placeholder="write here"
                            style={{ padding: "5px" }}
                          />
                        </Form.Item>
                      </Col>
                      <MinusCircleOutlined onClick={() =>
                        remove(name)} />
                    </Row>
                  </div>
                ))}
                <Form.Item
                  rules={[{ required: true, }]}

                >

                  <Button type="dashed" onClick={() =>
                    add()} block icon={<PlusOutlined />}>
                    Add Tax Details
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form.Item>



        <center><h2>Super Annutation</h2></center>
        <Form.Item
          name="dynamic_form_nest_item">
          <Form.List name="superannutation">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <div key={key} style={{ marginBottom: 8 }} >
                    <Row>
                      <Col span={11}>
                        <Form.Item
                          {...restField}
                          name={[name, 'nameofFund']}
                          label="Name of the Fund"
                          style={{ padding: "20px" }}
                        >
                          <Input
                            type="text"
                            placeholder="Enter the name of Fund"
                            style={{ padding: "8px" }}
                          />
                        </Form.Item>
                      </Col>

                      <Col span={11} offset={2}>
                        <Form.Item
                          {...restField}
                          name={[name, 'nameoftheAccount']}
                          label="Name Of The Account"
                          style={{ padding: "20px" }}
                        >
                          <Input
                            type="text"
                            placeholder="Enter name of the Account"
                            style={{ padding: "8px" }}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={11}>
                        <Form.Item
                          {...restField}
                          name={[name, 'membershipNumber']}
                          label="Membership Number"
                          style={{ padding: "20px" }}
                        >
                          <Input
                            type="number"
                            placeholder="Enter Membership Number"
                            style={{ padding: "8px" }}
                          />
                        </Form.Item>
                      </Col>

                      <Col span={11} offset={2}>
                        <Form.Item
                          {...restField}
                          name={[name, 'fundCINSPIN']}
                          label="Fund CIN+SPIN"
                          style={{ padding: "20px" }}
                        >
                          <Input
                            type="text"
                            placeholder="Enter CorporateIdentificationNumber/SPIN"
                            style={{ padding: "8px" }}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={11}>
                        <Form.Item
                          {...restField}
                          name={[name, 'fundBSBAccountnumber']}
                          label="Fund BSB + Account Number"
                          style={{ padding: "20px" }}
                        >
                          <Input
                            type="number"
                            placeholder="Enter Fund BSB + Account Number"
                            style={{ padding: "8px" }}
                          />
                        </Form.Item>
                      </Col>

                      <Col span={10} offset={2}>
                        <Form.Item
                          {...restField}
                          name={[name, 'fundContactDetails']}
                          label="Fund Contact Details"
                          style={{ padding: "20px" }}
                        >
                          <Input
                            type="text"
                            placeholder="Enter Fund Contact Details"
                            style={{ padding: "8px" }}
                          />
                        </Form.Item>
                      </Col>
                      <MinusCircleOutlined onClick={() => remove(name)} />


                    </Row>
                  </div>
                ))}
                <Form.Item>

                  <Button type="dashed" onClick={() =>
                    add()} block icon={<PlusOutlined />}>
                    Superannutation
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form.Item>



        <center><h2>Office Use Only</h2></center>
        <Form.Item
          name="dynamic_form_nest_item">
          <Form.List name="employmentdetails">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <div key={key} style={{ marginBottom: 8 }} >
                    <Row>
                      <Col span={11}>
                        <Form.Item
                          {...restField}
                          name={[name, 'employeeName']}
                          label="Name of the Employee"
                          style={{ padding: "20px" }}
                        >
                          <Input
                            type="name"
                            placeholder="Enter the name of the Employee"
                            style={{ padding: "8px" }}
                          />
                        </Form.Item>
                      </Col>

                      <Col span={11} offset={2}>
                        <Form.Item
                          label="Position"
                          name="position"
                          rules={[{ message: 'Enter employee Position' }]}
                          style={{ padding: "20px" }}
                        >

                          <Select placeholder="Select Position" style={{ padding: "1px" }}>
                            <Select.Option value="General Manager">General Manager</Select.Option>
                            <Select.Option value="Assistant GeneralManager">AssistantGM</Select.Option>
                            <Select.Option value="HeadHR">HeadHR</Select.Option>
                            <Select.Option value="HR">HR</Select.Option>
                            <Select.Option value="PMO">PMO</Select.Option>
                            <Select.Option value="Sr.developer">Sr.Developer</Select.Option>
                            <Select.Option value="Developer">Developer</Select.Option>
                            <Select.Option value="Sr.Tester">Sr.Tester</Select.Option>
                            <Select.Option value="Tester">Tester</Select.Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>




                    <Row>
                      {/* <Col span={11}>
                 <Form.Item
                    label = "Start Date with Company"
                    name  = "startDate"
                    style={{padding:"20px"}}
                    rules = {[{ message: 'Enter StartDateWithCompany' }]} >
                          <DatePicker
                              style={{width:"100%"}}
                              picker="date"
                             placeholder="Enter Start Date With Company"
                          />
                  </Form.Item>       
                      </Col> */}

                      <Col span={11} offset={2}>
                        <Form.Item
                          {...restField}
                          name={[name, 'salaryFTE']}
                          label="Salary P.A(FTE)"
                          style={{ padding: "20px" }}
                        >
                          <Input
                            type="text"
                            placeholder="Enter Salary Per Annum (Full Time Equivalent)"
                            style={{ padding: "8px" }}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={11}>
                        <Form.Item
                          {...restField}
                          name={[name, 'fundBSBAccountnumber']}
                          label="Fund BSB + Account Number"
                          style={{ padding: "20px" }}
                        >
                          <Input
                            type="number"
                            placeholder="Enter Fund BSB + Account Number"
                            style={{ padding: "8px" }}
                          />
                        </Form.Item>
                      </Col>

                      <Col span={10} offset={2}>
                        <Form.Item
                          {...restField}
                          name={[name, 'fundContactDetails']}
                          label="Fund Contact Details"
                          style={{ padding: "20px" }}
                        >
                          <Input
                            type="text"
                            placeholder="Enter Fund Contact Details"
                            style={{ padding: "8px" }}
                          />
                        </Form.Item>
                      </Col>
                      <MinusCircleOutlined onClick={() => remove(name)} />


                    </Row>
                  </div>
                ))}
                <Form.Item>

                  <Button type="dashed" onClick={() =>
                    add()} block icon={<PlusOutlined />}>
                    EmploymentDetails
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form.Item>
        <center>
          <Row justify="end">
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ marginRight: "10px" }} 
              >Submit</Button>
              {/* 
               */}
                 <Button type="primary" htmlType="reset" onClick={onReset} style={{ backgroundColor: "#e80a75" }}>Reset</Button>
               
              {/* </Button> */}
            </Form.Item>
          </Row>
        </center>
      </Card>
    </Form>
  </>
}

export default Dynamicform;