const notFoundMiddleware = (req, res) => {
  res.status(404).send("Route DOES NOT EXIST DUMMASS");
};

export default notFoundMiddleware;
