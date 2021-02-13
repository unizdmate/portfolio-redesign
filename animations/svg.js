import { motion } from "framer-motion";

export const LightAnimatedSVG = () => {
  return (
    <>
      <svg
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "65px",
          height: "50px",
          textAlign: "center",
        }}
      >
        <g>
          <motion.path
            style={{ fill: "#f0f0f0" }}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, yoyo: Infinity }}
            d="M8,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S12.411,22,8,22z M8,36c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6
		S11.309,36,8,36z"
          />
          <motion.path
            style={{ fill: "#f0f0f0" }}
            initial={{ scale: 1 }}
            animate={{ scale: 1.5 }}
            transition={{ delay: 1, duration: 1, yoyo: Infinity }}
            d="M52,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S56.411,22,52,22z M52,36c-3.309,0-6-2.691-6-6s2.691-6,6-6
		s6,2.691,6,6S55.309,36,52,36z"
          />
          <motion.path
            style={{ fill: "#f0f0f0" }}
            initial={{ scale: 0.75 }}
            animate={{ scale: 1.25 }}
            transition={{ delay: 0.5, duration: 1, yoyo: Infinity }}
            d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z M30,36c-3.309,0-6-2.691-6-6s2.691-6,6-6
		s6,2.691,6,6S33.309,36,30,36z"
          />
        </g>
      </svg>
    </>
  );
};

export const DarkAnimatedSVG = () => {
  return (
    <>
      <svg
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "65px",
          height: "50px",
          textAlign: "center",
        }}
      >
        <g>
          <motion.path
            style={{ fill: "#202020" }}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, yoyo: Infinity }}
            d="M8,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S12.411,22,8,22z M8,36c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6
          S11.309,36,8,36z"
          />
          <motion.path
            style={{ fill: "#202020" }}
            initial={{ scale: 1 }}
            animate={{ scale: 1.5 }}
            transition={{ delay: 1, duration: 1, yoyo: Infinity }}
            d="M52,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S56.411,22,52,22z M52,36c-3.309,0-6-2.691-6-6s2.691-6,6-6
          s6,2.691,6,6S55.309,36,52,36z"
          />
          <motion.path
            style={{ fill: "#202020" }}
            initial={{ scale: 0.75 }}
            animate={{ scale: 1.25 }}
            transition={{ delay: 0.5, duration: 1, yoyo: Infinity }}
            d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z M30,36c-3.309,0-6-2.691-6-6s2.691-6,6-6
          s6,2.691,6,6S33.309,36,30,36z"
          />
        </g>
      </svg>
    </>
  );
};

export const RightArrowAnimatedSVG = () => {
  return (
    <>
      <svg
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 700 550"
        style={{
          width: "200px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <g>
          <motion.path
            style={{ fill: "#202020" }}
            initial={{ x: 0 }}
            animate={{ x: 150 }}
            transition={{ duration: 1, yoyo: Infinity }}
            d="M482,234.839l-116.5-67.261c-4.783-2.761-10.898-1.122-13.66,3.66c-2.762,4.783-1.122,10.898,3.66,13.66l84.213,48.62H10
		c-5.523,0-10,4.478-10,10c0,5.521,4.477,10,10,10h429.646L355.5,302.101c-4.783,2.762-6.422,8.877-3.66,13.66
		c1.853,3.208,5.213,5.002,8.669,5.002c1.696,0,3.416-0.434,4.991-1.342L482,252.159c3.094-1.786,5-5.088,5-8.66
		C487,239.927,485.094,236.625,482,234.839z"
          />
        </g>
      </svg>
    </>
  );
};
