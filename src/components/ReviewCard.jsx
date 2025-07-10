import {
  Card,
  CardBody,
  Typography,
  Avatar,
  Rating,
} from "@material-tailwind/react";

const ReviewCard = ({ review, name, date, rating, avatar }) => {
  return (
    <Card className="max-w-sm shadow-lg rounded-2xl">
      <CardBody className="flex flex-col gap-4">
        {/* Rating */}
        <div className="flex items-center gap-2">
          <Rating value={rating} readonly />
        </div>

        {/* Review Text */}
        <Typography className="text-gray-700 text-base">“{review}”</Typography>

        {/* User Info */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-3">
            <Avatar src={avatar} alt={name} size="sm" />
            <div>
              <Typography className="font-semibold text-sm">{name}</Typography>
              <Typography className="text-xs text-gray-500">{date}</Typography>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ReviewCard;
