import Tabs from "../../../components/tabs"
import { FC, Fragment, memo } from "react";
import ContactUs from "../contact-us";
import Testimonials from "../testimonials";

const Landing: FC<{}> = () => {
  return (
    <Fragment>
      <ContactUs />
      <Testimonials />
      <Tabs />
    </Fragment>
  );
};

export default memo(Landing);
