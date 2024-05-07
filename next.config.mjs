import MillionLint from '@million/lint';

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
};

export default MillionLint.next({ rsc: true })(nextConfig);
