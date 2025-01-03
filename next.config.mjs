const nextConfig = {
    /* config options here */
    sassOptions: {
        additionalData: `$var: red;`,
    },
    // Tùy chọn để cấu hình việc render dynamic imports trên client-side
    reactStrictMode: true,
    webpack(config, { isServer }) {
        if (!isServer) {
            // Chạy một số điều chỉnh cho client-side build
            config.node = {
                fs: 'empty', // Đảm bảo rằng mô-đun 'fs' không bị yêu cầu khi build
            };
        }
        return config;
    },
};

export default nextConfig;
