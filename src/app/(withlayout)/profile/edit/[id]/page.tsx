import React from "react";

type IDProps = {
  params: any;
};

const EditProfile = ({ params }: IDProps) => {
  const { id } = params;
  return <div>profile edit page {id}</div>;
};

export default EditProfile;
