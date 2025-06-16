module.exports = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
    {
      name: "removeAttrs",
      params: {
        attrs: ["svg:width", "svg:height", "svg:viewbox"],
        preserveCurrentColor: false,
      },
    },
    {
      name: "addAttributesToSVGElement",
      params: {
        attributes: [
          {
            width: "72px",
            height: "72px",
            viewBox: "0 0 72 72",
          },
        ],
      },
    },
  ],
};
