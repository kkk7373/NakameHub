import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const EventsInfo = ({ event }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "0 auto",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <CardMedia
        sx={{
          height: 200,
          borderRadius: "12px 12px 0 0",
        }}
        image={event.src}
        title={event.title}
      />
      <CardContent sx={{ padding: "20px" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontFamily: '"Crimson Text", serif',
            fontWeight: 600,
            color: "#111827",
            marginBottom: "12px",
          }}
        >
          {event.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#6b7280",
            lineHeight: 1.6,
            fontFamily: '"Crimson Text", serif',
          }}
        >
          {event.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: "0 20px 20px 20px" }}>
        <Button
          size="small"
          sx={{
            color: "#3b82f6",
            fontWeight: 500,
            textTransform: "none",
            fontFamily: '"Crimson Text", serif',
            "&:hover": {
              backgroundColor: "rgba(59, 130, 246, 0.1)",
            },
          }}
        >
          Share
        </Button>
        <Button
          size="small"
          sx={{
            color: "#3b82f6",
            fontWeight: 500,
            textTransform: "none",
            fontFamily: '"Crimson Text", serif',
            "&:hover": {
              backgroundColor: "rgba(59, 130, 246, 0.1)",
            },
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventsInfo;
