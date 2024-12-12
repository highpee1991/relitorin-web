import React from "react";

const electricalData = [
  {
    id: "1",
    name: "Transformers",
    image: "/electricity/transformer.jpg",
    subcategories: [
      {
        id: "1.1",
        name: "Step-Up Transformers",
        image: "/electricity/stepUpTransformer.jpg",
        details:
          "Relitorin International Inc. offers step-up transformers designed to efficiently increase voltage for long-distance power transmission. Built for reliability, they minimize power loss in industrial and commercial setups.",
      },
      {
        id: "1.2",
        name: "Step-Down Transformers",
        image: "/electricity/stepdownTransformer.jpg",
        details:
          "Our step-down transformers reduce high voltage to safer, usable levels for residential, commercial, and industrial applications. Relitorin International Inc. ensures energy efficiency and compliance with global safety standards.",
      },
      {
        id: "1.3",
        name: "Isolation Transformers",
        image: "/electricity/isolationTransformer.jpg",
        details:
          "Engineered to prevent power surges and ensure electrical isolation, our isolation transformers provide a reliable solution for sensitive equipment. Relitorin International Inc. delivers durable, high-performing units tailored to your needs.",
      },
      {
        id: "1.4",
        name: "Oil-Filled Transformers",
        image: "/electricity/oilFiltererdTransformer.jpg",
        details:
          "Relitorin International Inc. supplies oil-filled transformers for enhanced cooling and efficiency in heavy-duty applications. Perfect for outdoor installations and high-capacity industrial projects.",
      },
      {
        id: "1.5",
        name: "Dry-Type Transformers",
        image: "/electricity/dryTransformer.jpg",
        details:
          "Our dry-type transformers are ideal for indoor applications requiring safe, fire-resistant solutions. Relitorin International Inc. combines quality and safety to meet your power requirements.",
      },
    ],
  },
  {
    id: "2",
    name: "Motors and Drives",
    image: "/electricity/motorDrives.jpg",
    subcategories: [
      {
        id: "2.1",
        name: "Induction Motors",
        image: "/electricity/inductionMotors.jpg",
        details:
          "Relitorin International Inc. provides efficient induction motors for a wide range of industrial processes. These motors are known for their durability, low maintenance, and consistent performance.",
      },
      {
        id: "2.2",
        name: "Synchronous Motors",
        image: "/electricity/synchronousMotor.jpg",
        details:
          "Our synchronous motors offer precision and efficiency for applications requiring constant speed. Relitorin International Inc. supports demanding industrial projects with superior motor solutions.",
      },
      {
        id: "2.3",
        name: "Variable Frequency Drives (VFDs)",
        image: "/electricity/variableFrequencyDrive.jpg",
        details:
          "Relitorin International Inc. offers VFDs to control motor speed and torque, optimizing energy consumption in automation and HVAC systems. Ensure enhanced productivity with our advanced drive solutions.",
      },
      {
        id: "2.4",
        name: "Servo Motors",
        image: "/electricity/servoMotors.jpg",
        details:
          "Achieve precise motion control with our high-quality servo motors. Relitorin International Inc. provides versatile options for robotics, CNC machinery, and other automation systems.",
      },
      {
        id: "2.5",
        name: "Stepper Motors",
        image: "/electricity/steppersMotors.jpg",
        details:
          "Our stepper motors deliver exceptional accuracy for incremental motion control. Relitorin International Inc. ensures seamless integration into your specialized industrial applications.",
      },
    ],
  },
  {
    id: "3",
    name: "Power Generators",
    image: "/electricity/powerGenerator.jpg",
    subcategories: [
      {
        id: "3.1",
        name: "Diesel Generators",
        image: "/electricity/dieselGenerator.jpg",
        details:
          "Relitorin International Inc. supplies robust diesel generators for reliable backup power in heavy-duty and remote applications. Built for efficiency and long operational life.",
      },
      {
        id: "3.2",
        name: "Gas Generators",
        image: "/electricity/gasGenerator.jpg",
        details:
          "Our gas generators offer a cleaner and more sustainable power solution. Relitorin International Inc. ensures top-tier performance for residential, commercial, and industrial needs.",
      },
      {
        id: "3.3",
        name: "Portable Generators",
        image: "/electricity/portableGenerator.jpg",
        details:
          "Relitorin International Inc. provides compact and portable generators for temporary power needs. Perfect for construction sites, events, and emergency backup.",
      },
      {
        id: "3.4",
        name: "Standby Generators",
        image: "/electricity/standbyGenerator.jpg",
        details:
          "Our standby generators ensure uninterrupted power during outages, safeguarding critical operations. Relitorin International Inc. guarantees reliable, high-capacity systems tailored to your requirements.",
      },
      {
        id: "3.4",
        name: "Solar Generators",
        image: "/electricity/solarGenerator.jpg",
        details:
          "Relitorin International Inc. offers eco-friendly solar generators designed for off-grid power generation. A sustainable choice for environmentally conscious operations.",
      },
    ],
  },
  {
    id: "4",
    name: "Electrical Panels and Enclosures",
    image: "/electricity/electricalPanelEnclosure.jpg",
    subcategories: [
      {
        id: "4.1",
        name: "Power Distribution Panels",
        image: "/electricity/powerDistributionpanel.jpg",
        details:
          "Relitorin International Inc. delivers durable power distribution panels for safe and efficient energy management in industrial and commercial setups.",
      },
      {
        id: "4.2",
        name: "Control Panels",
        image: "/electricity/controlPanel.jpg",
        details:
          "Our control panels are engineered for automation and process control in manufacturing and industrial systems. Relitorin International Inc. combines functionality with precision.",
      },
      {
        id: "4.3",
        name: "Panelboards",
        image: "/electricity/panelBoard.jpg",
        details:
          "Relitorin International Inc. provides advanced panelboards for optimal circuit management and distribution. Built for flexibility and ease of installation.",
      },
      {
        id: "4.4",
        name: "Switchgear Enclosures",
        image: "/electricity/switchgearEnclosure.jpg",
        details:
          "Protect your electrical systems with our rugged switchgear enclosures. Relitorin International Inc. offers high-quality solutions designed for safety and durability.",
      },
      {
        id: "4.5",
        name: "Weatherproof Enclosures",
        image: "/electricity/weatheproofEnclosure.jpg",
        details:
          "Our weatherproof enclosures ensure the safety of electrical components in outdoor and harsh environments. Relitorin International Inc. ensures long-lasting, reliable protection.",
      },
    ],
  },

  {
    id: "5",
    name: "Electrical Accessories",
    image: "/electricity/electricalAccesaories.jpg",
    subcategories: [
      {
        id: "5.1",
        name: "Connectors and Terminals",
        image: "/electricity/connectorsTerminal.jpg",
        details:
          "Relitorin International Inc. provides durable connectors and terminals for secure electrical connections. Ideal for industrial and residential wiring applications.",
      },
      {
        id: "5.2",
        name: "Relays and Switches",
        image: "/electricity/relaySwitches.jpg",
        details:
          "Our relays and switches deliver dependable performance for controlling circuits in automation and power systems. Relitorin International Inc. ensures reliability and compatibility.",
      },
      {
        id: "5.3",
        name: "Cable Glands",
        image: "/electricity/cableGlands.jpg",
        details:
          "Relitorin International Inc. offers premium cable glands to ensure secure and safe cable entry points. Designed for industrial and hazardous environments.",
      },
      {
        id: "5.4",
        name: "Conduits and Fittings",
        image: "/electricity/conduitFittings.jpg",
        details:
          "Protect and organize your wiring with our robust conduits and fittings. Relitorin International Inc. delivers high-quality solutions for all your electrical installations.",
      },
      {
        id: "5.5",
        name: "Surge Protectors",
        image: "/electricity/surgeProtectors.jpg",
        details:
          "Relitorin International Inc. supplies surge protectors to safeguard your systems from voltage spikes. Essential for ensuring the longevity of sensitive equipment.",
      },
    ],
  },
];

export default electricalData;
