var status = "😎";

setTimeout(() => {
  const status = "😍";

  const data = {
    status: "🥑",
    getStatus() {
      return this.status;
    },
  };
  const data1 = {
    status: "🥑",
  }
  console.log(data.getStatus());
  console.log(data.getStatus.call(this));
  console.log(data.getStatus.call(data1));
}, 0);
