export interface GalleryItem {
  student: string;
  title: string;
  description: string;
  class: string;
  imageName?: string;
}

export const galleryConfig: GalleryItem[] = [
  {
    student: "Cao, Stubin",
    title: "Calculus Visualization Project",
    description: "3D printed mathematical models exploring advanced calculus concepts",
    class: "Calculus II-Honors-Math 182 Spring 2024"
  },
  {
    student: "Chaudhury, Inshaal",
    title: "Mathematical Surface Study",
    description: "Exploration of complex surfaces through 3D printing",
    class: "Calculus II-Honors-Math 182 Spring 2024"
  },
  {
    student: "Farris, Owen J.",
    title: "Parametric Equations in 3D",
    description: "Visual representation of parametric equations using 3D printing",
    class: "Calculus II-Honors-Math 182 Spring 2024"
  },
  {
    student: "Kha, Nyi Thu",
    title: "Geometric Series Visualization",
    description: "3D printed models demonstrating geometric series concepts",
    class: "Calculus II-Honors-Math 182 Spring 2024"
  },
  {
    student: "Kim, Alex J.",
    title: "Integration Applications",
    description: "Physical models showing real-world applications of integration",
    class: "Calculus II-Honors-Math 182 Spring 2024"
  },
  {
    student: "Maglo, Kell",
    title: "Vector Field Models",
    description: "3D visualization of vector fields and their properties",
    class: "Calculus II-Honors-Math 182 Spring 2024"
  },
  {
    student: "Multezem, Nurahmed Abay",
    title: "Differential Equations Study",
    description: "Physical representations of differential equation solutions",
    class: "Calculus II-Honors-Math 182 Spring 2024"
  },
  {
    student: "Nguyen, Duc Tri Nhan",
    title: "Series Convergence Models",
    description: "3D printed demonstrations of series convergence concepts",
    class: "Calculus II-Honors-Math 182 Spring 2024"
  },
  {
    student: "Niaz, Sakib",
    title: "Surface Integration Project",
    description: "Visual exploration of surface integration through 3D printing",
    class: "Calculus II-Honors-Math 182 Spring 2024"
  },
  {
    student: "Vu, John B.",
    title: "Mathematical Sequences",
    description: "Physical models representing mathematical sequences",
    class: "Calculus II-Honors-Math 182 Spring 2024"
  },
  {
    student: "Win, Su Nay Chi",
    title: "Polar Coordinates Study",
    description: "3D visualization of polar coordinate systems",
    class: "Calculus II-Honors-Math 182 Spring 2024"
  },
  {
    student: "Wondimu, Nahom A.",
    title: "Taylor Series Models",
    description: "Physical representations of Taylor series approximations",
    class: "Calculus II-Honors-Math 182 Spring 2024"
  }
];

export function getImagePath(student: string): string {
  // Convert student name to filename format (lowercase, no spaces, no special chars)
  const fileName = student
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  return `/images/gallery/${fileName}.jpg`;
}