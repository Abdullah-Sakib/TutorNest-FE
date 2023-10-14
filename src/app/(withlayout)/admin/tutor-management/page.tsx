"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/TNBreadCrumb";
import { Avatar, Button, Card, Col, Input, Row, message } from "antd";
import Link from "next/link";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
  EllipsisOutlined,
  SettingOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import UMTable from "@/components/ui/TNTable";
import { useAdminsQuery, useDeleteAdminMutation } from "@/redux/api/adminApi";
import UMModal from "@/components/ui/TNModal";
import { useTutorsQuery } from "@/redux/api/tutorApi";
import Meta from "antd/es/card/Meta";
import Image from "next/image";

const TutorManagementPage = () => {
  const query: Record<string, any> = {};
  const [deleteAdmin] = useDeleteAdminMutation();

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [adminId, setAdminId] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }
  const { data, isLoading } = useTutorsQuery({ ...query });

  console.log(data?.tutors);

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  const deleteAdminHandler = async (id: string) => {
    // console.log(id);
    try {
      const res = await deleteAdmin(id);
      if (res) {
        message.success("Admin Successfully Deleted!");
        setOpen(false);
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "tutor-management",
            link: "/admin/tutor-management",
          },
        ]}
      />
      <ActionBar title="Tutors List">
        <Input
          size="large"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "20%",
          }}
        />
        <div>
          <Link href="/admin/tutor-management/create">
            <Button type="primary" size="large" style={{ marginLeft: "7px" }}>
              Create Tutor
            </Button>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              style={{ margin: "0px 5px" }}
              type="primary"
              onClick={resetFilters}
              size="large"
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>

      <Row
        gutter={{ xs: 24, xl: 20, lg: 20, md: 24 }}
        justify={"space-between"}
        align={"stretch"}
      >
        {data?.tutors?.map((tutor) => (
          <Col
            key={tutor?._id}
            span={8}
            style={{ margin: "10px 0", justifyItems: "center" }}
          >
            <Card
              style={{ width: "100%", height: "100%" }}
              cover={
                <Image
                  alt="Tutor Image"
                  width={300}
                  height={300}
                  src={tutor?.image}
                />
              }
              actions={[
                <Button
                  type="primary"
                  key="details"
                  style={{ width: "90%" }}
                  onClick={() => {
                    // Handle the details button click here
                  }}
                >
                  Details
                </Button>,
              ]}
            >
              <Card.Meta
                title={tutor?.name}
                description={
                  <div>
                    <p>Location: {tutor?.location}</p>
                    <p>Subjects: {tutor?.subjects.join(", ")}</p>
                    <p>Fee: ৳{tutor?.fee}</p>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>

      <UMModal
        title="Remove admin"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => deleteAdminHandler(adminId)}
      >
        <p className="my-5">Do you want to remove this admin?</p>
      </UMModal>
    </div>
  );
};

export default TutorManagementPage;
