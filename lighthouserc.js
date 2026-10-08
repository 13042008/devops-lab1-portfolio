module.exports = {
    ci: {
        collect: {
            // Số lần chạy trên mỗi URL để lấy trung vị, giảm sai số phần cứng
            numberOfRuns: 3,
            staticDistDir: './dist',
        },
        assert: {
            assertions: {
                // Performance rất dễ dao động trên CI, chỉ nên để cảnh báo (warn)
                'categories:performance': ['warn', { minScore: 0.8 }],
                // Accessibility và SEO có tính ổn định cao, thiết lập chặn luồng (error) nếu dưới 90 điểm
                'categories:accessibility': ['error', { minScore: 0.9 }],
                'categories:seo': ['error', { minScore: 0.9 }],
            },
        },
        upload: {
            // Tạm thời upload lên server công cộng của Google để dễ lấy link xem
            target: 'temporary-public-storage',
        },
    },
};