import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Arduino Uno R3 Development Board",
    description: "The Arduino Uno R3 is a microcontroller board based on the ATmega328P. It has 14 digital input/output pins (of which 6 can be used as PWM outputs), 6 analog inputs, a 16 MHz ceramic resonator, a USB connection, a power jack, an ICSP header and a reset button.",
    price: 499,
    oldPrice: 650,
    image: "https://images.pexels.com/photos/4291/development-web-design-programming.jpg?auto=compress&cs=tinysrgb&w=800",
    category: "Development Boards",
    brand: "Arduino",
    rating: 4.8,
    reviewCount: 128,
    stockStatus: "In Stock",
    tags: ["arduino", "microcontroller", "electronics"],
    featured: true
  },
  {
    id: 2,
    name: "Raspberry Pi 4 Model B - 4GB RAM",
    description: "The Raspberry Pi 4 Model B is the latest product in the popular Raspberry Pi range of computers. It offers ground-breaking increases in processor speed, multimedia performance, memory, and connectivity compared to the prior-generation Raspberry Pi 3 Model B+.",
    price: 4999,
    oldPrice: 5499,
    image: "https://images.pexels.com/photos/5016974/pexels-photo-5016974.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Development Boards",
    brand: "Raspberry Pi",
    rating: 4.9,
    reviewCount: 245,
    stockStatus: "In Stock",
    tags: ["raspberry pi", "single board computer", "electronics"],
    featured: true
  },
  {
    id: 3,
    name: "HC-SR04 Ultrasonic Distance Sensor",
    description: "The HC-SR04 ultrasonic sensor uses sonar to determine distance to an object like bats do. It offers excellent non-contact range detection with high accuracy and stable readings in an easy-to-use package.",
    price: 99,
    oldPrice: 150,
    image: "https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Sensors",
    brand: "Generic",
    rating: 4.5,
    reviewCount: 87,
    stockStatus: "In Stock",
    tags: ["sensor", "ultrasonic", "distance"],
    featured: false
  },
  {
    id: 4,
    name: "MG996R Metal Gear Servo Motor",
    description: "This high-torque MG996R digital servo features metal gearing resulting in extra high 10kg stalling torque in a tiny package. The MG996R is essentially an upgraded version of the famous MG995 servo, and features upgraded shock-proofing and a redesigned PCB and IC control system.",
    price: 299,
    oldPrice: 399,
    image: "https://images.pexels.com/photos/1546333/pexels-photo-1546333.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Motors",
    brand: "Tower Pro",
    rating: 4.6,
    reviewCount: 65,
    stockStatus: "In Stock",
    tags: ["motor", "servo", "robotics"],
    featured: false
  },
  {
    id: 5,
    name: "MPU6050 Accelerometer and Gyroscope Sensor",
    description: "The MPU-6050 devices combine a 3-axis gyroscope and a 3-axis accelerometer on the same silicon die, together with an onboard Digital Motion Processor, which processes complex 6-axis MotionFusion algorithms.",
    price: 149,
    oldPrice: 199,
    image: "https://images.pexels.com/photos/6933539/pexels-photo-6933539.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Sensors",
    brand: "InvenSense",
    rating: 4.7,
    reviewCount: 56,
    stockStatus: "Low Stock",
    tags: ["accelerometer", "gyroscope", "sensor"],
    featured: false
  },
  {
    id: 6,
    name: "ESP32 Wi-Fi & Bluetooth Development Board",
    description: "The ESP32 is a powerful, generic Wi-Fi+BT+BLE MCU module that targets a wide variety of applications. At the core of this module is the ESP32 chip, which is designed to be scalable and adaptive.",
    price: 399,
    oldPrice: 499,
    image: "https://images.pexels.com/photos/2582935/pexels-photo-2582935.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Development Boards",
    brand: "Espressif",
    rating: 4.9,
    reviewCount: 178,
    stockStatus: "In Stock",
    tags: ["esp32", "wifi", "bluetooth", "iot"],
    featured: true
  },
  {
    id: 7,
    name: "L298N Motor Driver Module",
    description: "The L298N is a dual H-Bridge motor driver which allows speed and direction control of two DC motors at the same time. The module can drive DC motors that have voltages between 5 and 35V, with a peak current up to 2A.",
    price: 149,
    oldPrice: 199,
    image: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Motor Drivers",
    brand: "Generic",
    rating: 4.4,
    reviewCount: 92,
    stockStatus: "In Stock",
    tags: ["motor driver", "l298n", "robotics"],
    featured: false
  },
  {
    id: 8,
    name: "DHT11 Temperature and Humidity Sensor",
    description: "The DHT11 is a basic, ultra low-cost digital temperature and humidity sensor. It uses a capacitive humidity sensor and a thermistor to measure the surrounding air, and spits out a digital signal on the data pin.",
    price: 79,
    oldPrice: 99,
    image: "https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Sensors",
    brand: "Generic",
    rating: 4.3,
    reviewCount: 42,
    stockStatus: "In Stock",
    tags: ["temperature", "humidity", "sensor"],
    featured: false
  },
  {
    id: 9,
    name: "Breadboard 830 Points",
    description: "This full-size breadboard features 830 tie points and is a great way to prototype circuits without soldering. It has 2 power rails and 63 rows of tie points, and can accommodate components with leads and wires of diameter 0.3mm to 0.8mm.",
    price: 129,
    oldPrice: 149,
    image: "https://images.pexels.com/photos/6153391/pexels-photo-6153391.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Tools",
    brand: "Generic",
    rating: 4.7,
    reviewCount: 118,
    stockStatus: "In Stock",
    tags: ["breadboard", "prototyping", "tools"],
    featured: false
  },
  {
    id: 10,
    name: "OLED Display Module 0.96 inch 128x64",
    description: "This is a 0.96 inch OLED display module with 128x64 resolution, which can display 8 lines of 16 characters. It's based on the SSD1306 driver IC and communicates via I2C. The display is monochrome (blue on black) and very clear with high contrast.",
    price: 249,
    oldPrice: 299,
    image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Displays",
    brand: "Generic",
    rating: 4.6,
    reviewCount: 85,
    stockStatus: "Low Stock",
    tags: ["oled", "display", "i2c"],
    featured: false
  }
];

export const categories = [
  {
    id: 1,
    name: "Development Boards",
    image: "https://images.pexels.com/photos/4709370/pexels-photo-4709370.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 3
  },
  {
    id: 2,
    name: "Sensors",
    image: "https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=800", 
    count: 3
  },
  {
    id: 3,
    name: "Motors",
    image: "https://images.pexels.com/photos/1546333/pexels-photo-1546333.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1
  },
  {
    id: 4,
    name: "Motor Drivers",
    image: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1
  },
  {
    id: 5,
    name: "Displays",
    image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1
  },
  {
    id: 6,
    name: "Tools",
    image: "https://images.pexels.com/photos/6153391/pexels-photo-6153391.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1
  }
];