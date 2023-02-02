// Adding a basic container component

const Container = (props) => {
  return (
    <div className="container mx-auto px-4 lg:px-8 max-w-9xl">
      {props.children}
    </div>
  );
};
export default Container;
