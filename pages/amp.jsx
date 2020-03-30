import { useAmp } from "next/amp";
export const config = { amp: "hybrid" };

export default function Index() {
  const isAmp = useAmp();
  const shareMessage = "first amp page";
  const shareBtn = {
    marginRight: "1em",
    borderRadius: "50%",
    backgroundSize: "60%"
  };
  return (
    <>
      <p>
        Welcome to the {isAmp ? "AMP" : "normal"} version of the Index page!!
      </p>
      {isAmp ? (
        <amp-img
          width="300"
          height="300"
          src="https://pbs.twimg.com/profile_images/1060167212021899269/DDcV_gWe_400x400.jpg"
          alt="cute sheep"
          layout="responsive"
        />
      ) : (
        <img
          width="300"
          height="300"
          src="https://pbs.twimg.com/profile_images/1060167212021899269/DDcV_gWe_400x400.jpg"
          alt="cute sheep"
        />
      )}
      <form method="post" action-xhr="/form/echo-json/post" target="_blank">
        <amp-date-picker
          mode="overlay"
          layout="container"
          input-selector="[name=deliverydate]"
        >
          <label for="deliverydate">Deliver Date:</label>
          <input type="text" name="deliverydate" />
        </amp-date-picker>
      </form>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <amp-social-share
          type="twitter"
          width="35"
          height="35"
          data-param-text={shareMessage}
          style={shareBtn}
        ></amp-social-share>
        <amp-social-share
          type="facebook"
          width="35"
          height="35"
          data-param-text={shareMessage}
          data-attribution="254325784911610"
          style={shareBtn}
        ></amp-social-share>
        <amp-social-share
          type="pinterest"
          width="35"
          height="35"
          data-param-text={shareMessage}
          style={shareBtn}
        ></amp-social-share>
      </div>
    </>
  );
}
