import SigninForm from "../components/SigninForm/SigninForm";

export default function Signin() {
  const handleSubmit = function (inputs) {
    console.log(inputs);
  };
  const loading = false;
  const error = false;

  return (
    <div className="flex min-h-[90vh] flex-1 flex-col items-center justify-center">
      <SigninForm logoUrl="/img/logo.svg" onSubmit={handleSubmit} loading={loading} isError={error} />
    </div>
  );
}
