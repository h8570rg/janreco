import Typography, { TypographyProps } from "@mui/material/Typography";
import classNames from "classnames";
import { config } from "~/core/config";

const Logo = (props: Omit<TypographyProps<"div">, "component">) => {
  const serviceName = config.public.serviceName;
  if (!serviceName) {
    throw new Error("Service name env is not defined.");
  }
  return (
    <Typography
      {...props}
      component="div"
      className={classNames("font-righteous", props.className)}
    >
      {serviceName[0].toUpperCase() + serviceName.slice(1)}
    </Typography>
  );
};

export default Logo;
