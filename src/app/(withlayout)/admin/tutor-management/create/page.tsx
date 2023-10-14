"use client";

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormMultiSelectField from "@/components/Forms/FormMultiSelectField";
import FormSelectField, {
  SelectOptions,
} from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import FormDynamicFields from "@/components/ui/FormDynamicFields";
import UMBreadCrumb from "@/components/ui/TNBreadCrumb";
import UploadImage from "@/components/ui/UploadImage";
import { categoryOptions, subjects } from "@/constants/global";
import { formatSlot } from "@/helpers/convert/formatSlot";
import { useCreateTutorMutation } from "@/redux/api/tutorApi";
import { Button, Col, Row, message } from "antd";

const CreateTutorPage = () => {
  const [createTutor, { isSuccess }] = useCreateTutorMutation();

  const adminOnSubmit = async (values: any) => {
    const createData = { ...values };

    const formatedSlots = values?.available_slots?.map((slot: any) =>
      formatSlot(slot.startTime, slot.endTime)
    );

    createData.available_slots = formatedSlots;
    createData.experience = Number(createData.experience);
    createData.fee = Number(createData.fee);

    console.log(createData, "create data");

    const res = await createTutor(createData);
    console.log(res, "res");

    if (isSuccess) {
      message.success("Tutor created successfully!");
    }
  };

  const base = "admin";
  return (
    <>
      <UMBreadCrumb
        items={[
          { label: `tutor-management`, link: `/${base}/tutor-management` },
          { label: "create-tutor", link: `/${base}/tutor-management/create` },
        ]}
      />
      {/* <h1>Create Tutor</h1> */}
      <Form submitHandler={adminOnSubmit}>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
            Tutor Information
          </p>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput
                type="name"
                name="name"
                label="Tutor Name"
                size="large"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput
                type="email"
                name="email"
                label="Email address"
                size="large"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput name="phone" label="Phone" size="large" />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput name="education" label="Education" size="large" />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput
                type="number"
                name="experience"
                label="Experience in months"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput type="number" name="fee" label="Fee" />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput name="location" label="Location" size="large" />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormSelectField
                name="category"
                label="Category"
                options={categoryOptions}
              />
            </Col>
            <Col span={8} style={{ margin: "10px 0" }}>
              <FormMultiSelectField
                options={subjects as SelectOptions[]}
                name="subjects"
                label="Subjects"
              />
            </Col>

            <Col span={12} style={{ margin: "10px 0" }}>
              <FormTextArea name="description" label="Description" rows={4} />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <UploadImage name="image" label="Tutor Image" />
            </Col>

            <Col span={24} style={{ margin: "10px 0" }}>
              <FormDynamicFields />
            </Col>
          </Row>
        </div>
        <Button
          htmlType="submit"
          type="primary"
          style={{ marginBottom: "20px" }}
        >
          submit
        </Button>
      </Form>
    </>
  );
};

export default CreateTutorPage;
