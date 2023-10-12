type IDProps = {
  params: any;
};

const Details = ({ params }: IDProps) => {
  const { id } = params;
  return (
    <div>
      <h1>This is booking details page {id}</h1>
    </div>
  );
};

export default Details;
