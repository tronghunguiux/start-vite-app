/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        // "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'black-blue': '#2A313C',
                'red': '#E61E25',
                primary: {
                    100: '#FFD1C2', // Nhạt nhất
                    200: '#FFA98E',
                    300: '#FF805A',
                    400: '#FF5733', // Màu chính
                    500: '#CC4426',
                    600: '#99331A', // Đậm nhất
                },
                secondary: {
                    100: '#C2FFD1', // Nhạt nhất
                    200: '#8EFFA9',
                    300: '#5AFF80',
                    400: '#33FF57', // Màu chính
                    500: '#26CC44',
                    600: '#1A9933', // Đậm nhất
                },
            },
        },
    },
    plugins: [],
}