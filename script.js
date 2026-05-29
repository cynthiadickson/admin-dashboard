const ctx = document.getElementById("revenueChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [5000, 7000, 6500, 9000, 12000, 14500, 4000, 6200, 8100, 10000, 2500, 15000],
        borderColor: "#10b981",
        backgroundColor: "rgba(37, 235, 219, 0.1)",
        tension: 0.4,
        fill: true
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    }
  }
});