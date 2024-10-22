export default function Imagem({ propsImageUrls }) {
    return (
        <div className="imagem">
            {propsImageUrls.map((url, index) =>
                url ? (
                    <img key={index} src={url} alt={`imagem ${index}`} />
                ) : null
            )}
        </div>
    );
}
