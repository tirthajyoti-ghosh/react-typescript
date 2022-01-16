type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

const Status = ({ status }: StatusProps) => {
    return (
        <div>
            {status === 'loading' && 'Loading...'}
            {status === 'success' && 'Data loaded successfully'}
            {status === 'error' && 'Error loading data'}
        </div>
    );
};

export default Status;