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
