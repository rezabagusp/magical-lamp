module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './screens/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      qs: 'Quicksand',
    },
    extend: {
      colors: {
        primary: {
          main: '#B31E1A',
          surface: '#F9EDED',
          border: '#E6B4B3',
          hover: '#951916',
          pressed: '#771411',
          focus: '#F0D2D1',
        },
        secondary: {
          main: '#917609',
          surface: '#F6F4EB',
          border: '#DAD1AD',
          hover: '#796207',
          pressed: '#614F06',
          focus: 'E9E4CE',
        },
        success: {
          main: '#74B816',
          pressed: '#3A5C0B',
        },
        orange: {
          main: '#E87F02',
        },
        blue: {
          main: '#114189',
        },
        neutral: {
          10: '#FEFFFF',
          20: '#FCFDFF',
          30: '#EAECF1',
          40: '#D0D3DA',
          50: '#B7BBC4',
          60: '#9FA3AD',
          70: '#878C96',
          80: '#717580',
          90: '#5B5F69',
          100: '#464952',
        },
        error: '#DA1414',
      },
      boxShadow: {
        elevate: '0px 0px 16px rgba(0, 0, 0, 0.24)',
      },
    },
  },
  plugins: [],
};
