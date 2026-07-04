import Particles from "react-tsparticles";

export default function ParticlesBg() {
  return (
    <Particles
      className="absolute top-0 left-0 w-full h-full z-0"
      options={{
        fullScreen: {
          enable: false,
        },
        background: {
          color: "transparent",
        },
        particles: {
          number: {
            value: 60,
          },
          color: {
            value: "#38bdf8",
          },
          links: {
            enable: true,
            color: "#38bdf8",
            opacity: 0.2,
          },
          move: {
            enable: true,
            speed: 1,
          },
          size: {
            value: { min: 1, max: 3 },
          },
          opacity: {
            value: 0.4,
          },
        },
      }}
    />
  );
}