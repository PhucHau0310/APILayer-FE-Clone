import React from 'react';

const useLoading = () => {
    const [loading, setLoading] = React.useState<boolean>(false);

    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    return [loading, startLoading, stopLoading] as const;
};

export default useLoading;
