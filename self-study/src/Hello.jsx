function Hello() {
  const name = "Protap";
  const title = () => {
    return "Barman";
  };

  return (
    <>
      <div className="text-center">
        <h3>
          Hello, {name} {title()}!
        </h3>
      </div>
      <hr />
    </>
  );
}

export default Hello;
