type ContainerProps = {
    styles: React.CSSProperties
};

const Container = ({ styles }: ContainerProps) => {
    return (
        <div style={styles}>
            A container
        </div>
    );
};

export default Container;