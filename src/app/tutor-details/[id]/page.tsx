type IDProps = {
  params: any;
};

const TutorDetailsPage = ({ params }: IDProps) => {
  const { id } = params;
  return (
    <div>
      <h1>Tutor details page {id}</h1>
    </div>
  );
};

export default TutorDetailsPage;
