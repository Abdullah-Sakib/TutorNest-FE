"use client";

import { Button, Col, Empty, Row } from "antd";
import { useFieldArray, useFormContext } from "react-hook-form";
import FormTimePicker from "../Forms/FormTimePicker";

const FormDynamicFields = () => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "available_slots",
  });

  return (
    <>
      <span>Slots</span>
      <div>
        {fields.length > 0 ? (
          fields.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  marginBottom: "5px",
                  padding: "20px",
                  border: "1px solid #d9d9d9",
                  borderRadius: "5px",
                }}
              >
                <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                  <Col span={12}>
                    <div>
                      <FormTimePicker
                        name={`available_slots.${index}.startTime`}
                        label="Start time"
                      />
                    </div>
                  </Col>
                  <Col span={12}>
                    <div>
                      <FormTimePicker
                        name={`available_slots.${index}.endTime`}
                        label="End time"
                      />
                    </div>
                  </Col>
                </Row>

                <Button
                  type="primary"
                  onClick={() => remove(index)}
                  danger
                  style={{ margin: "5px 0px" }}
                >
                  Delete
                </Button>
              </div>
            );
          })
        ) : (
          <Empty description="No slots found" />
        )}
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Button type="primary" onClick={() => append(undefined)}>
          Add Slot
        </Button>
      </div>
    </>
  );
};

export default FormDynamicFields;
